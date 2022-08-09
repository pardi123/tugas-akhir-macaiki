import {
  Heading,
  Avatar,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react';
import { Navbar } from '@macaiki/macaiki/shared/layout';
import { ThreadCard } from '@macaiki/macaiki/shared/ui';
/* eslint-disable-next-line */
export interface MacaikiProfileProps {}

export function MacaikiProfile(props: MacaikiProfileProps) {
  return (
    <Box pl={4} pr={4} color="white">
      <Navbar />
      <Box
        w={'full'}
        bgColor="#262626"
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        mb={5}
      >
        <Image
          h={'250px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit={'cover'}
        />

        <Flex justify={'space-between'} mt={-12} ml={4} px={12}>
          <Avatar
            size={'xl'}
            src={
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            css={{
              border: '2px solid white',
            }}
          />
          <Flex justify="end" mt={14}>
            <Button
              pl={14}
              pr={14}
              bg="transparent"
              textColor="#BC6FF1"
              border="1px"
              borderColor="#BC6FF1"
              fontSize="12px"
            >
              Share profile
            </Button>
            <Button
              pl={14}
              pr={14}
              bg="#BC6FF1"
              textColor="#181818"
              fontSize="12px"
              mr={4}
              ml={4}
            >
              Edit your profile
            </Button>
          </Flex>
        </Flex>

        <Box p={6} px={14}>
          <Stack spacing={0} align={'start'} mb={5} mt={-5}>
            <Flex>
              <Heading
                fontSize={'2xl'}
                fontWeight={500}
                fontFamily={'body'}
                textColor="#F6F7FC"
              >
                John Doe
              </Heading>
              <Text ml={3} mt={1} textColor="#F6F7FC">
                @John_doe
              </Text>
            </Flex>

            <Text color={'#A5A5A5'}>Frontend Developer</Text>
          </Stack>
          <Stack direction={'row'} justify={'start'} spacing={5} mt={-3}>
            <Stack spacing={0} align={'start'}>
              <Text fontWeight={600} color="#F6F7FC">
                23k
              </Text>
              <Text fontSize={'sm'} color={'#F6F7FC'}>
                Followers
              </Text>
            </Stack>
            <Stack spacing={0} align={'start'}>
              <Text fontWeight={600} color="#F6F7FC">
                23k
              </Text>
              <Text fontSize={'sm'} color="#F6F7FC">
                Followers
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box
        bgColor="#262626"
        width="full"
        pl={6}
        pr={6}
        borderRadius="5"
        mb={4}
        px={12}
      >
        <Flex justify="space-between">
          <Heading color="#BC6FF1" fontSize="24px" mt={6}>
            Let’s complete your profile now!
          </Heading>
          <Image objectFit="cover" src="/assets/daily.png" alt="Dan Abramov" />
        </Flex>
      </Box>
      <Box
        bgColor="#262626"
        width="full"
        pl={6}
        pr={6}
        borderRadius="5"
        p={4}
        px={12}
      >
        <Heading color="#BC6FF1" fontSize="24px">
          Threads
        </Heading>
      </Box>
      <Box color="white" px={12} bgColor="#262626">
        <ThreadCard />
      </Box>
    </Box>
  );
}

export default MacaikiProfile;
