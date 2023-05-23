
import { Container, Heading, VStack,Input, Button,Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'20'}>
 
     <form >
       <VStack alignItems={'stretch'} w={['full','85']} m={'auto'} my={'16'}>

         <Heading >VIDEO HUB</Heading>
         <Avatar alignSelf={'center'} boxSize={'80px'}/>
         <Input placeholder={'Name'} type={'text'} required focusBorderColor={'purple'}/>
         <Input placeholder={'Password'} type={'password'} required focusBorderColor={'purple'}/>
         <Button variant={'solid'} w={''} type={'submit'} fontSize={'23'} colorScheme={'purple'}>SignUp</Button>
   
         <Text textAlign={'end'} fontSize={'20'} fontWeight={'800'}  textDecoration={'underline'}> Already SignUp?{'   '}  
         <Button variant={'link'} alignSelf={'flex-end'} fontSize={'22'} fontWeight={'700'}>
         <Link to ={"/LogIn"} > 
          LogIn</Link>
         </Button></Text>
       </VStack>
     </form>
 
 
    </Container>
  )
}

export default SignUp