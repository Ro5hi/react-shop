
import { FormFieldContainer, Label, Input } from './CheckoutStyles';

const FormField = ({ label, type, name, placeholder, required }) => {
    return (
      <FormFieldContainer>
        <Label htmlFor={name}>{label}</Label>
        <Input name={name} type={type} placeholder={placeholder} required />
      </FormFieldContainer>
    );
  };
  
  export default FormField;
  