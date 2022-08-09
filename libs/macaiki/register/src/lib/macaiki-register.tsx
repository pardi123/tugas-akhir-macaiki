import { Box, Button, Center, Container, Stack, Text,Image, Flex } from '@chakra-ui/react';
import * as Yup from 'yup';
import { Formik,Form,FormikProps } from 'formik';
import { PasswordField, TextField } from '@macaiki/macaiki/shared/ui';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
type MacaikiRegisterProps = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}
export function MacaikiRegister() {
  const registerSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is Required'),
    confirmPassword: Yup.string().required('Confirm Password Is Required')
  })

  return (
    <Center
      w="100%"
      h="120vh"
      bg="#000000"
      backgroundImage='/assets/bg.png'
      backgroundSize="cover"

    >
      
      <Container color='#BC6FF1' minW='sm' alignItems='center'>
          <Flex alignItems='center' justify='center'>
              <Image
                  objectFit='cover'
                  src='/assets/MacaIki.png'
                  alt='Macaiki'
                  fallbackSrc='https://via.placeholder.com/150'
                  mb='8'              
              />
          </Flex>
          <Box 
            bg='#262626'
            backdropFilter='auto'
            backdropBlur='8px'
            px={7}
            py={6}
          >
            <Formik 
              initialValues={
              {
                email: '',
                username: '',
                password: '',
                confirmPassword: ''
              }
            }
            validationSchema = {registerSchema}
            onSubmit={()=> console.log('submited')}            
            >
                {(formikProps: FormikProps<MacaikiRegisterProps>) => {
                  console.log(formikProps.values);
                  return(
                    <Form>
                        <Stack pt={0} spacing={4}>
                            <TextField 
                              label=''
                              name='email'
                              placeholder='email'

                            />
                            <TextField
                              label=''
                              name='username'
                              placeholder='Username'
                            />
                            <PasswordField 
                              label=''
                              name='password'
                              placeholder='Password'
                            />
                            <PasswordField 
                              label=''
                              name='confirmPassword'
                              placeholder='Confirm Password'
                            />
                        </Stack>
                        <Button
                            w="full"
                            colorScheme="blueAlpha"
                            mt={3}
                            bg="#262626"
                            py={6}
                            type="submit"
                            color='#BC6FF1'
                            border='1px' 
                            borderColor='#BC6FF1'
                        >
                            Register
                        </Button>
                        <Text fontSize='xs' color='white' fontWeight='medium' align='center' mt='5'>
                        By clicking Sign Up you agree to our Privacy and Policy You may receive verification email to activate your account.

                        </Text>
                        <Text fontSize='md' color='#BC6FF1' align='center' fontWeight='medium' mt='6'><Link to='/'>Already have an account?</Link></Text>
                    </Form>

             
                  )
                }}
            </Formik>

          </Box>
      </Container>
    </Center>
  );
}

export default MacaikiRegister;
