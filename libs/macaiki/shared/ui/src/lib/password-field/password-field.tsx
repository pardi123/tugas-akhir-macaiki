import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  useDisclosure,
} from '@chakra-ui/react';
import { useField } from 'formik';
import { HiEye, HiEyeOff } from 'react-icons/hi';
/* eslint-disable-next-line */
export interface PasswordFieldProps extends InputProps {
  label: string;
  name:  string;
}



export function PasswordField({name,label,...props}: PasswordFieldProps)  {
  const [field,meta] = useField(name);
  const {isOpen,onToggle} = useDisclosure(); 
  return (
    <FormControl id={props.id} isInvalid={!! (meta.touched && meta.error)}>
        <FormLabel
          aria-label={label}
          htmlFor={props.id}
          textTransform='capitalize'
          fontWeight='normal'
          fontSize='lg'
        >
          {label}
        </FormLabel>
        <InputGroup mb='0'>
        <InputRightElement pt='4' pr='4'>
          <IconButton
                bg="transparent !important"
                variant="ghost"
                fontSize={24}
                aria-label={isOpen ? `Mask ${name}` : `Reveal ${name}`}
                icon={isOpen ? <HiEyeOff color="gray" /> : <HiEye color="gray" />}
                onClick={onToggle}
          />
        </InputRightElement>

          <Input
              type={isOpen ? 'text' : 'password'}
              aria-label={label}
              bg='#000000'
              color='white'
              py={6}
              border='1px'
              borderColor='#262626'
              {...field}
              {...props}
        />
        
      </InputGroup>
    </FormControl>
  );
}

export default PasswordField;
