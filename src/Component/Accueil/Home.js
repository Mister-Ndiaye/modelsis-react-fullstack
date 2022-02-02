import React, { useContext, useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  Heading,
  Button,
  Spacer,
  Image,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import comput from '../Images/comput2.svg';
//import { Logo } from './Logo';
import { authContex } from '../Context/Context';
function Home() {
  const [bgHome, setbgHome] = useState('')
  const user = useContext(authContex);
  useEffect(() => {
  console.log(user);
  
  }, );
  
  return (
    <ChakraProvider theme={theme}>

      <Box  ml='5%' mr='5%' mt='25' p={3} borderRadius='lg' borderWidth='7' overflow='hidden'> 
           <Flex >
             <Box p={2} bg={bgHome} borderRadius={25} m={2} >
               <Heading>mnckdev Challenge</Heading>
             </Box>
             <Spacer/>
             <Box p={2}>
               <Button bg={bgHome}>Accueil </Button>
             </Box>
             <Box p={2} >
               <Button  bg={bgHome}>Login</Button>
             </Box>
             
             <Box p={2}>
               <Button bg={bgHome} >Sign In </Button>
             </Box>

             <Box p={2} >
             <ColorModeSwitcher justifySelf="flex-end" />
            
             </Box>
            
           </Flex>
           <hr/>

      </Box>
      <Box bg={bgHome} /* onMouseOver={()=>
      setbgHome('gray.50')} onMouseLeave={()=>setbgHome('') }*/
      
      p={1} alignItems='center'  ml='5%' mr='5%' mt={1} >
          <Image src={comput} alt = 'nice' />
      </Box>
    </ChakraProvider>
  );
}

export default Home;
