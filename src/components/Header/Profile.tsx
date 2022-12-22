import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile(){
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Robson da Motta</Text>
                <Text color="gray.300" fontSize="small">email@email.com</Text>        
            </Box>
            <Avatar size="md" name="Robson da Motta"/>
        </Flex>
    );
}