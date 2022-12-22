import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean;
}
export function Profile({ showProfileData }: ProfileProps){
    return (
        <Flex align="center">
           { showProfileData && (
            <Box mr="4" textAlign="right">
                <Text>Robson da Motta</Text>
                <Text color="gray.300" fontSize="small">email@email.com</Text>        
            </Box>
            ) } 
            
            <Avatar size="md" name="Robson da Motta"/>
        </Flex>
    );
}