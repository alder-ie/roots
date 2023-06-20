import { Flex, Icon, Link } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface NavItemProps {
  icon: IconType
  link: string
  children: string
}

const NavItem = ({ icon, link, children }: NavItemProps) => {
  return (
    <Link
      href={link}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        sx={styles.navItem}
        bg={
          link.includes(window.location.pathname.substring(1, 5)) &&
          window.location.pathname.includes(link)
            ? 'blue.400'
            : 'transparent'
        }
        color={
          link.includes(window.location.pathname.substring(1, 5)) &&
          window.location.pathname.includes(link)
            ? 'white'
            : ''
        }
      >
        {icon && <Icon as={icon} sx={styles.navItemIcon} />}
        {children}
      </Flex>
    </Link>
  )
}

export default NavItem

const styles = {
  navItem: {
    align: 'center',
    p: '4',
    mx: '4',
    my: '1',
    borderRadius: 'lg',
    role: 'group',
    cursor: 'pointer',
    _hover: {
      bg: 'cyan.400',
      color: 'white'
    }
  },
  navItemIcon: {
    mr: '4',
    mt: '1',
    fontSize: '16',
    _groupHover: {
      color: 'white'
    }
  }
}
