import { Box, Flex, Heading, Button, Icon  } from "@chakra-ui/react";
import React from "react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../Header";
import { SideBar } from "../SideBar";

export default function UserList(){
    return(
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mg="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="pink"
                          leftIcon={<Icon as={RiAddLine} />}
                        >
                        Criar novo usuário
                        </Button>
                    </Flex>
                </Box>
            </Flex>
            
        </Box>
    );
}