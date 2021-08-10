import { Flex, Icon, HStack, Box, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { RiNotificationLine, RiUserLine } from 'react-icons/ri'

export function LoginUser(){
    return(
        <Flex
          align="center"
          ml="auto"
        >
            <HStack
              spacing="8"
              mx="8"
              pr="8"
              py="1"
              color="gray.300"
              borderRightWidth={1}
              borderColor="gray.700"
            >
                <Icon as={RiNotificationLine} fontSize="20"/>
                <Icon as={RiUserLine} fontSize="20"/>
            </HStack>

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