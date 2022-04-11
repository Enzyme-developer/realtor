import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100' flexWrap='wrap'>

    
    <Box>
      <Menu w='100%'>
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
        <MenuList w='100%'>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>

    <Spacer />

    <Box fontSize='2xl' color='green.500' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>Realtor</Link>
    </Box>

  </Flex>
);

export default Navbar;