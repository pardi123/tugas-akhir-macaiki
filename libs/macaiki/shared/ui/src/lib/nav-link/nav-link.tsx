import {Link,  useColorModeValue,
} from '@chakra-ui/react'
/* eslint-disable-next-line */
export interface NavLinkProps {
  link: string;
}

export function NavLink({link,...props}:NavLinkProps) {
  return (
    <Link
    px={8}
    py={1}
    fontSize={'18px'}
    fontWeight={'bold'}
    rounded={'md'}
    color={'white'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {link}
  </Link>
  );
}

export default NavLink;
