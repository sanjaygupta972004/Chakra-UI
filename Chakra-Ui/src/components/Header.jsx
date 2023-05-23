import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    VStack,
    useDisclosure,
    HStack
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  import {BiMenuAltLeft} from 'react-icons/bi';

const Header = () => {
    const{isOpen,onOpen,onClose}=useDisclosure();

  return (
    <>
    <Button pos={'fixed'}top={'4'} left={'4'} colorScheme={'purple'} padding={'1'} borderRadius={'2xl'} onClick={onOpen}  zIndex={'overlay'}>
      <BiMenuAltLeft size={'23'}/>
    </Button>

<Drawer isOpen={isOpen} placement='left' onClose={onClose}>
    <DrawerOverlay>
        <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>VIDEO HUB </DrawerHeader>
        <DrawerBody>
<VStack align={'flex-start'}  >

<Button onClick={onClose} colorScheme={"purple"} variant={'ghost'}>
  <Link to={'/'}>Home</Link>
 </Button>
 <Button onClick={onClose} colorScheme={"purple"} variant={'ghost'}>
  <Link to={'/videos'}>Videos</Link>
 </Button>
 <Button  onClick={onClose} colorScheme={"purple"} variant={'ghost'}>
  <Link to={'/videos?category=free'}>Free Video</Link>
 </Button>
 <Button onClick={onClose} colorScheme={"purple"} variant={'ghost'}>
  <Link to={'/upload'}>Upload</Link>
 </Button>

 </VStack >  

 <HStack pos={'absolute'} left={'2'} bottom={'38'}  justifyContent={'space-evenly'} width={'full'}>
  <Button colorScheme={'purple'} >
    <Link to={'/login'} >LogIn</Link>
  </Button>
  <Button colorScheme={'purple'} variant={'outline'}>
    <Link to={'/signUp'}>SignUp</Link>
  </Button>
 </HStack>



        </DrawerBody>
        </DrawerContent>
    </DrawerOverlay>
</Drawer>  
    </>
  )
}

export default Header