import React from 'react';
import {Box, Center, ChakraProvider, Container, theme} from '@chakra-ui/react';
import Home from './Component/Accueil/Home';
import FormAuth from './Component/Authentification/FormAuth';
import Produits from './Component/Produits/Produits';
//import { authContex } from './Component/Context/Context';

function App() {
  return (
   
    <ChakraProvider theme={theme}>
      
      <Home/>
      <Container  w="100%"> 
      

        <Produits/>
      

      </Container>
    
    
    </ChakraProvider>
  );
}

export default App;
