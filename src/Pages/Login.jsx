import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    Center,
    Text,
    useToast
  } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import loginUser from '../functions/loginUser';
import loginWithGoogle from '../functions/loginGoogle';
import registerUser from '../functions/registerUser';

  export default function Login() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)
    const toast = useToast()  

    const emailRef = useRef();
    const passwordRef = useRef();

    async function submitForm (e) {
      e.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      console.log(email , password);
      if (isLoggedIn) {
        await loginUser(email, password);
        toast({
          title: 'Login Success',
          status: 'success',
          duration: 9000,
          isClosable: true,       
        })
      } else{
        await registerUser(email , password);
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
    } 
   
  }

  async function handleGoogleLogin (e){
      e.preventDefault()
      try {
        await loginWithGoogle()
        toast({
          title: 'Login Success with Google',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      } catch (error) {
          console.log(error)
      }
  }


    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'} >
            <Heading fontSize={'2xl'}>{isLoggedIn ? "SingIn" : "Register"}</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" ref={emailRef} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" ref={passwordRef} />
            </FormControl>
            <Stack spacing={6}>
              {isLoggedIn?   <Button
                w={'full'}
                maxW={'md'}
                variant={'outline'}
                leftIcon={<FcGoogle />}>
                <Center>
                  <Text onClick={handleGoogleLogin} >Sign in with Google</Text>
                </Center>
              </Button> : ""}
              <Button colorScheme={'blue'} variant={'solid'}  onClick={submitForm}>
                {isLoggedIn ? "Enter your account" : "Register"}
              </Button>
            </Stack>
                <Button 
                onClick={() => setIsLoggedIn(!isLoggedIn)}
                bg={'blue.500'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'teal.500',
                  boxShadow: '#40826d',                  
                }}
                _focus={{
                  bg: 'teal.500',
                  boxShadow: '#40826d'
                }}
                >
                  {isLoggedIn ? "Do not have an account? Create it here" : "Already have an account? login here"}
                </Button>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
    );
  }