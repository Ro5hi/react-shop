import FormField from "./FormField";

const BillingDetailsFields = () => {
  return (
    <>
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="Name"
        required
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="Email"
        required
      />
      <FormField
        name="address"
        label="Address"
        type="text"
        placeholder="Addess"
        required
      />
      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="City"
        required
      />
      <FormField
        name="state"
        label="State"
        type="text"
        placeholder="State"
        required
      />
      <FormField
        name="zip"
        label="ZIP"
        type="text"
        placeholder="12345"
        required
      />
    </>
  );
};

export default BillingDetailsFields;