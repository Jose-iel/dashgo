import { Flex, Icon, HStack, Box, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { NotificationNav } from './NotificationNav';


export function Profile(){
    return(
        <Flex
          align="center"
          ml="auto"
        >
            <NotificationNav/>

            <Flex align="center">
                <Box mr="4" textAlign="right">
                    <Text>José Henrique Iel</Text>
                    <Text color="gray.300" fontSize="small">
                        josehenriqueiel@gmail.com
                    </Text>
                </Box>
                <Avatar size="md" name="José Henrique" src="https://github.com/Jose-iel.png"/>
            </Flex>
        </Flex>
    );
}