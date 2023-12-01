import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/basketball-sports.gif"

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize={100}></Image>
        
       
    </HStack>
  )
}

export default NavBar