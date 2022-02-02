import { Box, Button, Center, Container, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

function FormAuth() {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const handleClick = ()=>{
        const user = {nom : username , password:password}
        console.log("first  " ,username);
        console.log("first"  , user);
    }

    const handleUsername =(e)=>{
    setusername(e.target.value)
    }

    const handlePassword =(e)=>{
        setpassword(e.target.value)
        }
    return (
        <Container borderWidth={1} p={4} mb={20} maxW='container.sm' borderRadius={25}>
            <Heading textAlign='center' p={3}>Connection </Heading>
            
            <Box>
                <Box>
                    <FormControl isRequired p={5} isRequired>
                        <FormLabel htmlFor='email'>Saisir votre email </FormLabel>
                        <Input id='email' placeholder='votre email' value={username} onChange={handleUsername}  />

                    </FormControl>
                </Box>
                <Box>
                    <FormControl isRequired p={5}>
                        <FormLabel htmlFor='password'>Saisir votre password</FormLabel>
                        <Input id='password' placeholder='*********' value={password} onChange={handlePassword} />
                    </FormControl>
                    <Center p={5}>
                    <Button  color='black' bg='blue.700' onClick={handleClick}>Connection </Button>

                    </Center>
                </Box>

            </Box>
        </Container>
    )
}

export default FormAuth
