import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Image,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon,BellIcon,SearchIcon } from '@chakra-ui/icons';
import { NavLink } from '@macaiki/macaiki/shared/ui';

/* eslint-disable-next-line */
export interface NavbarProps {}
const links = ['Home','Comunity'];
export function Navbar(props: NavbarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={'#262626'} minWidth='md' px={4} pl={{md: '20'}} pr={{md: '20'}}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
        <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            color={'white'}
            backgroundColor='#262626'
          />
          <HStack spacing={40} alignItems={'center'} >
            <Box>
              <Image objectFit='cover' width={120} src='/assets/logo.png' />
            </Box>
            <HStack
              alignItems={'center'}
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {links.map((link) => (
                <NavLink key={link} link={link} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <InputGroup >
            <InputLeftElement>
            <IconButton
                 bg="transparent !important"
                 variant="ghost"
                 fontSize={20}
                 icon={<SearchIcon color='gray' />}
                 aria-label={'Search'}


              />
            
            </InputLeftElement>
            <Input placeholder='Search' borderRadius='5' color={'white'}  backgroundColor='#000000'size='sm' width={'300px'} mr='10' border='1px' borderColor='gray' />
            
            </InputGroup>
              <IconButton
                  size='2xl'
                  fontSize='2xl'
                  icon={<BellIcon />}
                  color={'white'}
                  backgroundColor='#262626'
                  aria-label={'Notifikasi'}
                  mr={'4'}

              />
            <Menu>

              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>

                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map((link) => (
                <NavLink key={link} link={link} />
                ))}
            </Stack>
          </Box>
        ) : null}
    </Box>
  );
}

export default Navbar;
