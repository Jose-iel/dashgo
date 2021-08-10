import { Checkbox, Td, Tr, Box, Text, Button, Icon, Tbody } from "@chakra-ui/react";
import React from "react";
import { RiPencilLine } from "react-icons/ri";

export function UserTable(){
    return(
            <Tbody>
                <Tr>
                    <Td px="6">
                        <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                        <Box>
                            <Text fontWeight="bold">José Henrique Iel de Castro</Text>
                            <Text fontSize="sm" color="gray.300">josehenriqueiel@gmail.com</Text>
                        </Box>
                    </Td>
                    <Td>10 de Agosto, 2021</Td>
                    <Td>
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="purple"
                          leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                        >
                        Editar
                        </Button>
                    </Td>
                </Tr>
            </Tbody>
    );
}