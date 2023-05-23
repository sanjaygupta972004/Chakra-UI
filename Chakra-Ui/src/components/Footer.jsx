import { Box, Button, HStack, Heading, Stack, VStack,Input,Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.500'} minH={'40'} color={'white'}>
        <Stack direction={['column','row']} >
            <VStack alignItems={'stretch'} width={'fit-content'}>
                <Heading size={'md'} textTransform={'uppercase'} py={'2'} fontSize={'2xl'} color={'purple'}>
                    subscribe to get updates
                </Heading>
                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input type="text" placeholder='Enter Emil here..' borderRadius="none" border={'none'} focusBorderColor={'none'} outline={'none'} _placeholder={{color:'green',fontSize:'25px'}} />
                    <Button p={'0'} colorScheme={'blue'} variant={'gost'} borderRadius={'0px 20px 20px 0px'}  > <AiOutlineSend size={'28'}/>
                    </Button>
                 </HStack>
           </VStack>  

           <VStack 
           w={'full'} 
           borderLeft={['none','3px solid white']}
           borderRight={['none','3px solid white']}
           bgColor={'blackAlpha.500'}
           >
            <Heading textTransform={'uppercase'} alignItems={'center'} p={'2'} color={'orange.300'} >VIDEO HUB
            <Text textTransform={'capitalize'}>
              all right received  
            </Text>
            </Heading>
           </VStack>

           <VStack w={'full'} >
            <Heading size={'md'} textTransform={'uppercase'} py={'2'}>
              social media 
            </Heading>
            <Button variant={'link'} colorScheme={'purple'}>
              <a href="https://www.youtube.com/">YouTube</a>
            </Button>
            <Button variant={'link'} colorScheme={'purple'}>
              <a href="https://www.linkedin.com/feed/">linkedin</a>
            </Button>
            <Button variant={'link'} colorScheme={'purple'}>
              <a href="https://twitter.com/home">Twitter</a>
            </Button>
            <Button variant={'link'} colorScheme={'purple'}>
              <a href="https://www.youtube.com/">Github</a>
            </Button>
            
        

           </VStack>

            
            

           
        </Stack>
    </Box>

  )
}

export default Footer