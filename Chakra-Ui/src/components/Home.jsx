import { Box, color,Container,Heading,Image, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5(1).png";
import { BiBorderRadius } from 'react-icons/bi';

const heading={
  pos:"absolute",
  left:"50%",
  top:"50%",
  transform:"translate(-50%,-50%)",
  textTransform:'uppercase',
  p:'4',
  size:'3xl',
  borderRadius:"20px"
 
  


}

const Home = () => {
  return <Box>
    <Mycarousel/>

    <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
      <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'3px solid'} m={'auto'}>
        services
      </Heading>
         <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']}> 
         <Image src={img5} h={['40','430']} filter={'hue-rotate(130deg)'} />

         <Text letterspacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'} fontSize={'25'} width={['65','195']} >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel iure soluta, ullam totam harum commodi et? Voluptatibus minima unde libero ipsam, autem qui provident saepe odio dolore, blanditiis recusanda Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium similique saepe voluptates nesciunt
         </Text>

          </Stack>

    </Container>

    </Box>
  
}
const Mycarousel=()=>(
  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
    <Box width={'full'} height={'100vh'} >
      <Image src={img1} objectFit={'cover'}/>
      <Heading bgColor={'whiteAlpha.700'}color={'black'}  {...heading}>
        Watch the Future
       </Heading>
    </Box>

    <Box width={'full'} height={'100vh'} >
      <Image src={img2} objectFit={'cover'}/>
      <Heading bgColor={'blackAlpha.800'}color={'white'}  {...heading}>
      Future is Gaming
       </Heading>
    </Box>

    <Box width={'full'} height={'100vh'} >
      <Image src={img3} objectFit={'cover'}/>
      <Heading bgColor={'blackAlpha.700'}color={'green'}  {...heading}>
       Gaming On Console
      </Heading>
    </Box>

    <Box width={'full'} height={'100vh'} >
      <Image src={img4}objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.700'}color={'white'}  {...heading}>
       night life is cool 
      </Heading>
    </Box>

  </Carousel>
)

export default Home
