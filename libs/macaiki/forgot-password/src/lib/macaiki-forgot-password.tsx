import { Box, Button, Center, Container, Stack,Divider, Text,Image, Flex } from '@chakra-ui/react';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import { Formik,Form,FormikProps } from 'formik';
import { PasswordField } from '@macaiki/macaiki/shared/ui';

/* eslint-disable-next-line */
type ForgotPassword = {
  password: string;
  confirmPassword: string;
}

export function MacaikiForgotPassword() {
  const forgetPassSchema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Username is required'),

  })
  return (
    <Center
      w="100%"
      h="100vh"
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
          py='10'
         />

      </Flex>
      <Box
            bg='#262626'
            backdropFilter="auto"
            backdropBlur="8px"
            borderRadius='md '
            px={6}
            py={7}
          >
            <Text fontSize='xl' mb='3' align='center'>Forgotten Password</Text>
          <Formik 
            initialValues={
              {
                password: '',
                confirmPassword: '',
              }
            }
            validationSchema={forgetPassSchema}
            onSubmit={() => console.log('submitted')}
          
          >
            {(formikProps: FormikProps<ForgotPassword>) => {
               console.log(formikProps.values);
               return(
                  <Form>
                      <Stack pt='0' spacing='4' >
                            <PasswordField 
                              label=''
                              name='password'
                              placeholder='Enter new password'
                            />
                             <PasswordField 
                              label=''
                              name='confirmPassword'
                              placeholder='Enter new password'
                            />
                      </Stack>
                      <Button
                        w="full"
                        colorScheme="blueAlpha"
                        bg="#BC6FF1"
                        py={6}
                        mt={3}
                        type="submit"
                        color='black'
                      >
                        Confirm
                      </Button>
                      <Divider orientation='horizontal' borderColor='#464646' border='2px' mt='5' />
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
                        <Link to='/register'> Register </Link>
                      </Button>

                  </Form>
               )
            }}
            
          </Formik>    
        </Box>
        </Container>
    </Center>
  );
}

export default MacaikiForgotPassword;
