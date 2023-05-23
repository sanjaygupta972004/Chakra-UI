import { Button, Container, HStack, Input, VStack, border } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { Form } from 'react-router-dom'

const Upload = () => {
  return (
    <Container
    maxW={'container.xl'}
    h={'100vh'}
    p={'16'}
    > 
    <VStack color={'purple.500'} h={'md'} justifyContent={'center'} >
        <AiOutlineCloudUpload size={'95'}/>
    </VStack>
    <form>
      <HStack h={'0'} w={'34'} mx={'85'}>  
        <Input type={'file'} cursor={'pointer'}required />
        <Button colorScheme={'purple'} type={'submit'} >Upload</Button>
      </HStack>

    </form>

    </Container>
  )
}

export default Upload