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
import { useTranslation } from 'react-i18next'
import { useAuth0 } from '@auth0/auth0-react'

const UserMenu = () => {
  const { t } = useTranslation()
  const { user, logout } = useAuth0()
  return (
    <Menu autoSelect={false}>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}
      >
        <Avatar size={'sm'} src={user?.picture} />
      </MenuButton>
      <MenuList alignItems={'center'}>
        <VStack my={4}>
          <Avatar size={'lg'} src={user?.picture} />
          <p>{user?.name}</p>
        </VStack>
        <MenuDivider mx={8} />
        <MenuItem as="a" href="/profile" sx={styles.menuButton}>
          {t('navigation.userMenu.profile')}
        </MenuItem>
        <MenuItem sx={styles.menuButton}>
          {t('navigation.userMenu.settings')}
        </MenuItem>
        <MenuItem
          sx={styles.menuButton}
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          {t('navigation.userMenu.logout')}
        </MenuItem>
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