import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), { ssr:false })

const options = {
    chart: {
        toolbar: { 
            show: false
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600],
        },
        axixTicks: {
            color: theme.colors.gray[600],
        },
        categories: [
            '2022-12-19T00:00:00.000Z',
            '2022-12-20T00:00:00.000Z',
            '2022-12-21T00:00:00.000Z',
            '2022-12-22T00:00:00.000Z',
            '2022-12-23T00:00:00.000Z',
            '2022-12-24T00:00:00.000Z',
            '2022-12-25T00:00:00.000Z',
        ],
    },
    fill: {         
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
    },
};

const series = [
 {name: 'id_series', data: [211,434,133,35,66,133,775]}
];

export default function Dashboard() {
    return(
      <Flex direction="column" h="100vh">
         <Header/>
         <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar/>
            <SimpleGrid flex="1" gap="4" minChildWidth="328px" >
                <Box 
                    p={["6", "8"]}
                    bg="gray.800"
                    borderRadius={8}
                    pb="4">
                    <Text fontSize="lg" mb="4">Inscritos</Text>
                    <Chart type="area" options={options} series={series}  height={160}/>
                </Box>
                <Box 
                    p={["6", "8"]}
                    bg="gray.800"
                    borderRadius={8}>
                    <Text fontSize="lg" mb="4">Abertura</Text>
                    <Chart type="area" options={options} series={series} height={160}/>
                </Box>
            </SimpleGrid>
         </Flex>         
      </Flex>
    );
}