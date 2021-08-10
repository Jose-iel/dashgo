import { Flex } from "@chakra-ui/react";
import { SearchBox } from "./SearchBar/SearchBox";
import { Logo } from "./Logo/Logo";
import { LoginUser } from "./AvatarUser/LoginUser";



export function Header(){
    return(
        <Flex
          as="header"
          w="100%"
          maxWidth={1480}
          h="20"
          mx="auto"
          mt="4"
          px="6"
          align="center"
        >
            <Logo />
            <SearchBox />
            <LoginUser />
        </Flex>
    );
}