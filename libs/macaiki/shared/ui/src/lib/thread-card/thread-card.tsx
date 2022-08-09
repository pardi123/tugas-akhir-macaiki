import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChatIcon,
  AttachmentIcon,
} from '@chakra-ui/icons';
import {
  Avatar,
  Text,
  Box,
  Badge,
  Flex,
  Heading,
  Image,
  IconButton,
  Button,
  Input,
} from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface ThreadCardProps {}

export function ThreadCard(props: ThreadCardProps) {
  return (
    <Box width="100%" backgroundColor="#262626" py={4} px={4} mb={3}>
      <Flex>
        <Avatar src="https://bit.ly/sage-adebayo" />
        <Box ml="3">
          <Text fontWeight="bold">
            Segun Adebayo &nbsp; .
            <Badge
              ml="2"
              backgroundColor="#262626"
              textColor="#4F98FD"
              textTransform="capitalize"
              fontSize="14px"
            >
              Follow
            </Badge>
          </Text>
          <Text fontSize="sm" textColor="#A5A5A5">
            UI Engineer . 2 month ago
          </Text>
        </Box>
      </Flex>
      <Heading fontSize="xl" mt={3} mb={2}>
        Sepedahan dari Jakarta ke Surabaya cuma 10 hari?
      </Heading>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
        doloremque omnis sit eveniet itaque ea vero minima corrupti animi sint
        eligendi officiis voluptatibus temporibus eum, quia odio, magnam,
        adipisci dolorum?
      </Text>
      <Image
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--NL0KK6Nk--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vzepsqfz16sxyqy3rnir.png"
        alt="Dan Abramov"
        mt={4}
      />
      <Flex align="start" mt={3} justifyContent="space-between">
        <Flex width="55%" justify="space-evenly">
          <Flex>
            <Button
              aria-label="arrow-up"
              backgroundColor="transparent"
              border="1px"
              borderColor="#464646"
              leftIcon={<ArrowUpIcon />}
              textAlign="center"
              pl={3}
              pr={4}
              _hover={{
                background: '#262626',
              }}
            >
              112k
            </Button>
            <IconButton
              aria-label="arrow-up"
              backgroundColor="transparent"
              border="1px"
              borderColor="#464646"
              icon={<ArrowDownIcon />}
              textAlign="center"
              pl={3}
              pr={4}
              _hover={{
                background: '#262626',
              }}
            />
          </Flex>
          <Button
            aria-label="arrow-up"
            backgroundColor="transparent"
            border="1px"
            borderColor="#464646"
            leftIcon={<ChatIcon />}
            textAlign="center"
            pl={3}
            pr={4}
            _hover={{
              background: '#262626',
            }}
          >
            Comment
          </Button>
          <Button
            aria-label="arrow-up"
            backgroundColor="transparent"
            border="1px"
            borderColor="#464646"
            leftIcon={<AttachmentIcon />}
            textAlign="center"
            pl={3}
            pr={4}
            _hover={{
              background: '#262626',
            }}
          >
            Share
          </Button>
        </Flex>
        <Button
          aria-label="arrow-up"
          backgroundColor="transparent"
          textAlign="center"
          pl={3}
          pr={4}
          fontSize="20px"
          _hover={{
            background: '#262626',
          }}
        >
          . . .
        </Button>
      </Flex>
      <Flex align="start" justify="space-around" mt={4}>
        <Avatar
          size={'md'}
          src={
            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
          }
        />
        <Input
          placeholder="Write your comment"
          borderRadius="5"
          color={'white'}
          backgroundColor="#464646"
          size="sm"
          width={'75%'}
          cursor="pointer"
          border="1px"
          borderColor="#464646"
          textColor="white"
          py={5}
        />
        <Button backgroundColor="#BC6FF1" textColor="#181818">
          Comment
        </Button>
      </Flex>
    </Box>
  );
}

export default ThreadCard;
