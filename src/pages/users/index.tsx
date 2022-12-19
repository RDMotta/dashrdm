import { Box, Button, Flex, Heading, Icon, Text, Table, Thead, Tbody, Tr, Th, Td, Checkbox } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function UserLust(){
    return(
        <Box>
          <Header/>
          <Flex w="100%" my="6" mx="auto" px="6" maxWidth={1480}>
            <Sidebar/>

            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                <Flex mb="8" justify="space-between" align="center">
                    <Heading size="lg" fontWeight="normal">Usuários</Heading>
                    <Button 
                        as="a" 
                        size="sm" 
                        fontSize="sm"
                        colorScheme="pink"                        
                        leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                    >Novo cadastro</Button>
                </Flex>

                <Table colorScheme="whiteAlpha">
                    <Thead>
                        <Tr>
                            <Th px="6" color="gray.300" width="8">
                                <Checkbox colorScheme="pink"/>
                            </Th>
                            <Th>Usuário</Th>
                            <Th>Cadastro</Th>
                            <Th width="8"/>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td px="6">
                                <Checkbox colorScheme="pink"/>
                            </Td>
                            <Td>
                               <Box>
                                    <Text fontWeight="bold">Robson da Motta</Text>
                                    <Text fontSize="sm" color="gray.300">email@email.com</Text>
                                </Box>
                            </Td>
                            <Td>13 de Fev. 1990</Td>
                            <Td>
                            <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm"
                                colorScheme="purple"
                                leftIcon={<Icon as={RiPencilLine} fontSize="20"/>}
                            >Editar</Button>

                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
          </Flex>  
        </Box>
    );
}