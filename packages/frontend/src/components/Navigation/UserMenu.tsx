import {
  Avatar,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList
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
          src={
            user.avatar
              ? user.avatar
              : 'https://avatars.dicebear.com/api/male/username.svg'
          }
        />
      </MenuButton>
      <MenuList alignItems={'center'}>
        <br />
        <Center>
          <Avatar
            size={'xl'}
            src={
              user.avatar
                ? user.avatar
                : 'https://avatars.dicebear.com/api/male/username.svg'
            }
          />
        </Center>
        <br />
        <Center>
          <p>{user.name}</p>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem>Account Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default UserMenu
