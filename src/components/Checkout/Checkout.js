import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState, useContext } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import BillingDetailsFields from './BillingDetailsFields';
import CheckoutError from './CheckoutError';

import { 
    CardElementContainer, 
    Row, 
    SubmitButton,
    } 
from './CheckoutStyles';

const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

const Checkout = ({ price, onSuccessfulCheckout }) => {

    // cart 
    const { cart, cartTotal, total } = useContext();
    const { orderNow } = useContext();

    // checkout 
    const [succeeded, setSucceeded] = useState(false);
    const [checkoutError, setCheckoutError] = useState();
    const [orderDetails, setOrderDetails] = useState({ cart, total, address: null, token: null });

    // stripeJS
    const stripe = useStripe();
    const elements = useElements();

    const handleCardDetails = event => {
        event.error ? setCheckoutError(event.error.message) : setCheckoutError();
    }

    const handleSubmit = async event => {
        event.preventDefault();
       
        const billingDetails = {
            name: event.target.name.value,
            email: event.target.email.value,
            address: {
                city: event.target.city.value,
                line1: event.target.address.value,
                state: event.target.state.value,

            }
        };

        setSucceeded(true);

        const cardElement = elements.getElement("card");
        try {
            const { data: clientSecret } = await fetch("/api/payment", {
                amount: price * 100,
        }) 
        const paymentMethodReq = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: billingDetails
        });

        if (paymentMethodReq.error) {
            setCheckoutError(paymentMethodReq.error.message);
            setSucceeded(false);
            return;
        }

        const { error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: paymentMethodReq.paymentMethod.id
        });

        if (error) {
            setCheckoutError(error.message);
            setSucceeded(false);
            return;
        }

        onSuccessfulCheckout();
        } catch (error) {
            setCheckoutError(error.message);
        }
    };
 
        const cardElementOptions = {
            style: {
                base: {
                    fontSize: '16px',
                    color: '#fff',
                    '::placeholder': {
                        color: '#b6b6b6',
                },
                invalid: {
                    color: '#ffc7ee',
                    iconColor: '#ffc7ee',
                },
            },
            hidePostalCode: true,
        },
    };

    const CheckoutElements = ({ children, title}) => {
        return (
            <Elements stripe={stripePromise}>{children}</Elements>
        )
    }

    return (
        <CheckoutElements>
            <form onSubmit={handleSubmit}>
                <Row>
                    <BillingDetailsFields />
                </Row>
                <Row>
                    <CardElementContainer>
                        <CardElement 
                            options={cardElementOptions}
                            onChange={handleCardDetails} 
                        />
                    </CardElementContainer>
                </Row>
                <Row>
                    {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
                    <SubmitButton disabled={succeeded || !stripe}>
                        {succeeded ? "Loading..." : `Pay $${price}`}
                    </SubmitButton>
                </Row>    
            </form>
        </CheckoutElements>
    )
}

export default Checkout;