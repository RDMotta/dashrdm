import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic';
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), { ssr:false })
const options = {};

const series = [
 {name: 'id_series', data: [21,44,1,35,66,133,775]}
];

export default function Dashboard() {
    return(
      <Flex direction="column" h="100vh">
         <Header/>
         <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar/>
            <SimpleGrid flex="1" gap="4" minChildWidth="328px" >
                <Box 
                    p="8"
                    bg="gray.800"
                    borderRadius={8}>
                    <Text fontSize="lg" mb="4">Inscritos</Text>
                    <Chart options={options} series={series} type="area" height={160}/>
                </Box>
                <Box 
                    p="8"
                    bg="gray.800"
                    borderRadius={8}>
                    <Text fontSize="lg" mb="4">Abertura</Text>
                </Box>
            </SimpleGrid>
         </Flex>         
      </Flex>
    );
}