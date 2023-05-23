import { Container, Heading, VStack,Input, Button,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const logIn = () => {
  return (
   <Container maxW={'container.xl'} h={'100vh'} p={'20'}>

    <form >
      <VStack alignItems={'stretch'} w={['full','85']} m={'auto'} my={'20'}>
        <Heading>Welcome Back</Heading>
        <Input placeholder={'Email'} type={'email'} required focusBorderColor={'purple'}/>
        <Input placeholder={'Password'} type={'password'} required focusBorderColor={'purple'}/>
        <Button variant={'link'} alignSelf={'flex-end'} py={'10px'}  fontSize={'20'}>
          <Link to ={"/forgetpassword"} > 
          Forget Password?</Link>
        </Button>
        <Button variant={'solid'} w={''} type={'submit'} fontSize={'23'} colorScheme={'purple'}>LogIn</Button>
  
        <Text textAlign={'end'} fontSize={'20'} fontWeight={'800'}  textDecoration={'underline'}> New User?{'   '}  
        <Button variant={'link'} alignSelf={'flex-end'} fontSize={'22'} fontWeight={'700'}>
        <Link to ={"/SignUp"} > 
         SignUp</Link>
        </Button></Text>
      </VStack>
    </form>


   </Container>
  )
}

export default logIn