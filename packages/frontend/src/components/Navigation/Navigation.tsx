import { FC, ReactNode } from 'react'
import { FiHome, FiMenu, FiMoon, FiSun } from 'react-icons/fi'
import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  DrawerContent,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'

import Sidebar from './Sidebar'
import { LinkItemProps } from './Sidebar'

interface NavigationProps {
  children: ReactNode
}

const linkItems: Array<LinkItemProps> = [
  { name: 'Home', href: '/', icon: FiHome }
]

const Navigation: FC<NavigationProps> = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Sidebar
        onClose={onClose}
        linkItems={linkItems}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        onEsc={onClose}
      >
        <DrawerContent>
          <Sidebar linkItems={linkItems} onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Flex
        ml={{ base: 0, md: 40 }}
        pl={{ base: 4, md: 24 }}
        pr="4"
        height="20"
        alignItems="center"
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent="flex-start"
      >
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          variant="ghost"
          onClick={onOpen}
          aria-label="open menu"
          icon={<FiMenu />}
        />
        <Divider flexGrow="1" borderColor="rgba(0,0,0,0)" />
        <HStack alignContent="right">
          <Stack direction={'row'} spacing={7} flex="auto">
            <Button onClick={toggleColorMode} variant="ghost">
              {colorMode === 'light' ? <FiMoon /> : <FiSun />}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={'https://avatars.dicebear.com/api/male/username.svg'}
                />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar
                    size={'2xl'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </HStack>
      </Flex>
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}

export default Navigation
