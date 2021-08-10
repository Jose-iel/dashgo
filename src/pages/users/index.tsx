import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox  } from "@chakra-ui/react";
import React from "react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";
import { UserTable } from "../../components/UserTable";

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
                          leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                        >
                        Criar novo usuário
                        </Button>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <UserTable />
                        <UserTable />
                        <UserTable />
                    </Table>

                    <Pagination/>
                </Box>
            </Flex>
            
        </Box>
    );
}