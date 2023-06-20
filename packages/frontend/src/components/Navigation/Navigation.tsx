import { FC, ReactNode } from 'react'
import { FiHome, FiMenu, FiMoon, FiSun } from 'react-icons/fi'
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerContent,
  Flex,
  HStack,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'

import Sidebar from './Sidebar'
import { LinkItemProps } from './Sidebar'
import UserMenu from './UserMenu'

interface NavigationProps {
  children: ReactNode
}

const linkItems: Array<LinkItemProps> = [
  { name: 'Home', href: '/', icon: FiHome }
]

const user = {
  name: 'John Doe',
  avatar: ''
}

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
        sx={styles.topBar}
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          variant="ghost"
          onClick={onOpen}
          aria-label="open menu"
          ml="2"
          icon={<FiMenu />}
        />
        <Divider flexGrow="1" borderColor="rgba(0,0,0,0)" />
        <HStack alignContent="right">
          <Stack direction={'row'} spacing={7} flex="auto">
            <Button onClick={toggleColorMode} variant="ghost">
              {colorMode === 'light' ? <FiMoon /> : <FiSun />}
            </Button>
            <UserMenu user={user} />
          </Stack>
        </HStack>
      </Flex>
      <Box ml={{ base: 0, md: 60 }} pt="24" px="6">
        {children}
      </Box>
    </Box>
  )
}

export default Navigation

const styles = {
  topBar: {
    w: 'full',
    pos: 'fixed',
    zIndex: '2',
    pr: '4',
    height: '20',
    alignItems: 'center',
    borderBottomWidth: '1px',
    justifyContent: 'flex-start'
  }
}