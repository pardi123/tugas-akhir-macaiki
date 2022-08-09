import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react';
import { useField } from 'formik';


/* eslint-disable-next-line */
export interface TextFieldProps extends InputProps {
  label: string;
  name: string;
  placeholder?: string

}

export function TextField({
  name,
  label,
  placeholder,
  ...props
}: TextFieldProps) {
  const [field,meta] = useField(name)
  return (
    <FormControl id={props.id} isInvalid={!!(meta.touched && meta.error)}>
        <FormLabel
          aria-label={label}
          htmlFor={props.id}
          textTransform="capitalize"
          fontWeight="normal"
          fontSize="lg"
        >
            {label}
        </FormLabel>
        <Input
          type='email'
          aria-label={label}
          placeholder={placeholder ?? label}
          bg='#000000'
          color='white'
          py={6}
          border='1px'
          borderColor='#262626'
          {...field}
          {...props}
        />
    </FormControl>
  );
}

export default TextField;
