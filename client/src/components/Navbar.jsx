import { Avatar, Box, Button, Flex, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Links = [["Home", "/"], ["Add", "add"]];

function Navbar() {
  return (
    <Box bg={'gray.100'} px={4}>
      <Flex h={16} alignItems={'center'}>
        <HStack
          spacing={8}
          alignItems="center"
          w="100%">
          <Box
            color="#F00"
            fontWeight="bold">Yelp Clone</Box>
          <HStack
            as="nav"
            spacing={4}
            display={{ base: "none", md: "flex" }}>
            {Links.map(link => (
              <Button key={link[0]}>
                <NavLink
                  to={link[1]}>{link[0]}</NavLink>
              </Button>
            ))}
          </HStack>
        </HStack>
        <Flex
          alignItems="center">
          <Avatar
            size="sm"
            src="yelp.png" />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar;