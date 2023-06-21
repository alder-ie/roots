import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { IconType } from 'react-icons'
import NavItem from './NavItem'

interface SidebarProps extends BoxProps {
  onClose: () => void
  linkItems: Array<LinkItemProps>
}

export interface LinkItemProps {
  name: string
  href: string
  icon: IconType
}

const Sidebar = ({ onClose, linkItems, ...rest }: SidebarProps) => {
  const { t } = useTranslation()
  return (
    <Box
      sx={styles.box}
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          {t('app.name')}
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {linkItems.map(link => (
        <NavItem key={link.name} icon={link.icon} link={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default Sidebar

const styles = {
  box: {
    w: { base: 'full', md: 60 },
    pos: 'fixed',
    h: 'full',
    zIndex: '3'
  }
}