import { FormFieldStyled, FormLabel, FormInput, ErrorText } from './styles';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { Text } from "../Text/Text";
import { ReactComponent as CrossIcon } from '../../assets/icons/cross.svg';

interface FormFieldProps {
  label: string;
  id: string;
  register: UseFormRegister<any>;
  requiredMessage: string;
  errors?: FieldError;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  register,
  requiredMessage,
  errors,
}) => {

  return (
    <FormFieldStyled>
      <FormLabel htmlFor={id}>
        <Text variant="text1SemiBold">{label}</Text>
      </FormLabel>
      
      <FormInput
        id={id}
        {...register(id, { required: requiredMessage })}
      />
      <CrossIcon className='cross_icon'/>
      {errors && <ErrorText>{errors.message}</ErrorText>}

    </FormFieldStyled>
  )
}
