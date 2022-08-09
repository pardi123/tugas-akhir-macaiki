import styles from './macaiki-home.module.css';
import { Navbar } from '@macaiki/macaiki/shared/layout';
import {
  Flex,
  Stack,
  Text,
  Avatar,
  Input,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
  Tabs,
  Heading,
  Image,
  Box,
  Center,
  ListItem,
  OrderedList,
} from '@chakra-ui/react';
import { FcAddImage } from 'react-icons/fc';
import { ThreadCard } from '@macaiki/macaiki/shared/ui';
/* eslint-disable-next-line */
export interface MacaikiHomeProps {}

export function MacaikiHome(props: MacaikiHomeProps) {
  return (
    <>
      <Navbar />
      <Flex pl={16} pr={16} color="white">
        <Stack
          p="4"
          cursor="pointer"
          boxShadow="lg"
          minWidth="63%"
          maxWidth="63%"
          m="4"
        >
          <Stack
            direction="row"
            alignItems="center"
            backgroundColor="#262626"
            mb={5}
            pr={5}
            pl={5}
            py={10}
            borderRadius="md"
          >
            <Avatar
              size={'md'}
              src={
                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
              }
            />
            <Input
              placeholder="Search"
              borderRadius="5"
              color={'white'}
              backgroundColor="#000000"
              size="sm"
              width={'75%'}
              cursor="pointer"
              border="1px"
              borderColor="gray"
              py={5}
            />
            <FcAddImage fontSize="30" />
          </Stack>
          <Tabs>
            <TabList>
              <Tab color="white" fontWeight="bold">
                For You
              </Tab>
              <Tab color="white" fontWeight="bold">
                Trending
              </Tab>
              <Tab color="white" fontWeight="bold">
                Comunity
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel cursor="context-menu">
                <ThreadCard />
                <ThreadCard />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
        <Box
          mt={8}
          maxW={'445px'}
          w={'full'}
          bg="#262626"
          boxShadow={'2xl'}
          maxHeight="450px"
          rounded={'md'}
          p={6}
          overflow={'hidden'}
        >
          <Box h={'240px'} mt={-6} mx={-6} mb={6} pos={'relative'}>
            <Center
              backgroundImage="/assets/bg-trending.png"
              height="240"
              backgroundSize="cover"
            >
              <Flex flexFlow="row" align="start" mt={20}>
                <Image src="/assets/Vector.png" height="16" mr="" ml="5" />{' '}
                <Heading color="white" fontWeight="extrabold">
                  Trending hreads For You
                </Heading>
              </Flex>
            </Center>
          </Box>
          <OrderedList
            fontSize="xl"
            fontWeight="bold"
            listStyleType="unset"
            letterSpacing={1}
            p={3}
          >
            <ListItem>KKN Desa Kenari</ListItem>
            <ListItem mt={5}>Dino Suwu</ListItem>
            <ListItem mt={5}>Cara Bernafas</ListItem>
          </OrderedList>
        </Box>
      </Flex>
    </>
  );
}

export default MacaikiHome;
