import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  VStack
} from '@chakra-ui/react'

interface User {
  name: string
  avatar: string
}

interface UserMenuProps {
  user: User
}

const UserMenu = ({ user }: UserMenuProps) => {
  return (
    <Menu autoSelect={false}>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}
      >
        <Avatar
          size={'sm'}
          src={
            user.avatar
              ? user.avatar
              : 'https://avatars.dicebear.com/api/male/username.svg'
          }
        />
      </MenuButton>
      <MenuList alignItems={'center'}>
        <VStack my={4}>
          <Avatar
            size={'lg'}
            src={
              user.avatar
                ? user.avatar
                : 'https://avatars.dicebear.com/api/male/username.svg'
            }
          />
          <p>{user.name}</p>
        </VStack>
        <MenuDivider mx={8} />
        <MenuItem sx={styles.menuButton}>Account Settings</MenuItem>
        <MenuItem sx={styles.menuButton}>Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default UserMenu

const styles = {
  menuButton: {
    px: '4',
    display: 'flex',
    _hover: {
      bg: 'primary.400',
      color: 'white'
    },
    _focus: {
      bg: 'primary.400',
      color: 'white'
    }
  }
}