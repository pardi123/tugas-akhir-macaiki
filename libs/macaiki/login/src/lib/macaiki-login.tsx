import { Box, Button, Center, Container, Stack, Text,Image, Flex } from '@chakra-ui/react';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';

import { Form, Formik, FormikProps } from 'formik';
import { TextField,PasswordField } from '@macaiki/macaiki/shared/ui';
/* eslint-disable-next-line */
type FormType ={
  email: string;
  password:string;
} 

export function MacaikiLogin() {
  const loginSchema = Yup.object().shape({
    email: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  })
  return (
    <Center
      w="100%"
      h="100vh"
      backgroundImage='/assets/bg.png'
      backgroundSize="cover"

    >

    <Container color='#BC6FF1' minW='sm' alignItems='center'>
    <Flex alignItems='center' justify='center'>
      <Image
        objectFit='cover'
        src='/assets/MacaIki.png'
        alt='Dan Abramov'
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
         <Formik 
          initialValues={{
            email: '',
            password: '',
          
          }}
          validationSchema={loginSchema}
          onSubmit={() => console.log('submitted')}
         >
            {(formikProps: FormikProps<FormType>) =>{
              console.log(formikProps.values);
              return(
                  <Form> 
                        
                    <Stack pt='0' spacing='4'>
                      <TextField 
                         label=""
                         name="email"
                         placeholder="Masukkan email"                      
                      />
                      <PasswordField
                        label=""
                        name="password"
                        placeholder="Masukkan Kata Sandi"
                      />
                    </Stack>
                    <Button
                        w="full"
                        mt={5}
                        colorScheme="blueAlpha"

                        bg="#BC6FF1"
                        py={6}
                        type="submit"
                        color='black'
                    >
                      Masuk
                  </Button>
                  <Text fontSize='md' fontWeight='medium' align='center' mt='5'>
                      <Link to='/forgotPassword'>Forgotten Password</Link>
                  </Text>
                  <Link to='/register'>
                      <Button
                            w="full"
                            mt={5}
                            colorScheme="blueAlpha"

                            bg="#262626"
                            py={6}
                            type="button"
                            color='#BC6FF1'
                            border='1px' 
                            borderColor='#BC6FF1'
                        >
                          Register
                      </Button>
                      </Link>
                  
                  </Form>
              )
            }}
         </Formik>
      </Box>
    </Container>
    </Center>
  );
}

export default MacaikiLogin;
