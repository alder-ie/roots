import { withAuthenticationRequired } from '@auth0/auth0-react'
import React from 'react'

interface Props {
  page: React.FC
}

export const ProtectedRoute: React.FC<Props> = ({ page }) => {
  const Component = withAuthenticationRequired(page, {
    onRedirecting: () => <div>Loading...</div>
  })
  return <Component />
}

export default ProtectedRoute
