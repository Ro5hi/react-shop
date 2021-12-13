import styled, { keyframes } from "styled-components";

export const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;

export const SubmitButton = styled.button`
    display: block;
    height: 40px;
    width: 100%;
    font-size: inherit;
    background-color: ${props => (props.disabled ? "#7795f8" : "#f6a4eb")};
    box-shadow: ${props =>
        props.disabled
        ? "none"
        : "0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08), inset 0 1px 0 #ffb9f6;"};
    border-radius: 4px;
    opacity: ${props => (props.disabled ? 0.5 : 1)};
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    `;

export const Row = styled.div`
    width: 475px;
    margin: 30px auto;
    box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #829fff;
    border-radius: 4px;
    background-color: #7795f8;
    position: relative;
`

// Error Container
export const fade = keyframes`
  from {
    opacity: 0;
    transform: scale3D(0.95, 0.95, 0.95);
  }
  to {
    opacity: 1;
    transform: scale3D(1, 1, 1);
  }
`;

export const ErrorContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  font-size: 13px;
  margin: -10px auto 0px auto;
  width: 100%;
  max-width: 450px;
  opacity: 90;
  animation: ${fade} 150ms ease-out;
  animation-delay: 50ms;
  animation-fill-mode: forwards;
  will-change: opacity;
  & svg {
    margin-right: 10px;
  }
`;


// Form Container
export const FormFieldContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 15px;
  border-top: 1px solid #819efc;
  &:first-of-type {
    border-top: none;
  }
`;

export const Label = styled.label`
  width: 20%;
  min-width: 70px;
  padding: 11px 0;
  color: #c4f0ff;
  overflow: hidden;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-right: 1px solid #819efc;
`;

export const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 11px 15px 11px 8px;
  color: #fff;
  background-color: transparent;
  animation: 1ms void-animation-out;
  &::placeholder {
    color: #87bbfd;
  }
`;
