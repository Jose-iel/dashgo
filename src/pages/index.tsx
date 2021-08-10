import { Flex, Button, Stack, Image, Box, Container } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { Logo } from '../components/Header/Logo';


export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as
        =
        "form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        >
          
        <Stack spacing="4">
          <Box flex="1" align="center">
            <Logo/>
          </Box>
          <Input type="email" name="email" label="E-mail"/>

          <Input type="password" name="password" label="Password"/>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  );
}
