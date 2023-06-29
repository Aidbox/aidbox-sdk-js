import { Navbar, Text } from '@nextui-org/react'
import { ReactElement, memo } from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from './assets/logo.svg'
import { Box } from './shared'

export const Layout = ({ children }: { children: ReactElement }) => {
  const navigate = useNavigate()
  const pathName = window.location.pathname

  return (
    <Box
      css={{
        maxW: '100%'
      }}
    >
      <Navbar variant='static'>
        <Navbar.Brand>
          <Navbar.Content
            hideIn='xs'
            css={{ p: 0 }}
          >
            <Navbar.Link href='/'>
              <Logo />
              <Text
                b
                color='inherit'
                hideIn='xs'
                css={{ 'font-weight': 'bold' }}
              >
                SDK Samples
              </Text>
            </Navbar.Link>
          </Navbar.Content>
        </Navbar.Brand>
        <Navbar.Content variant='underline'>
          <Navbar.Link
            onClick={() => navigate('/phr')}
            isActive={pathName === '/phr'}
          >
            PHR
          </Navbar.Link>
          <Navbar.Link
            onClick={() => navigate('/complex-query')}
            isActive={pathName === '/complex-query'}
          >
            Complex Query
          </Navbar.Link>
          <Navbar.Link
            onClick={() => navigate('/subscriptions')}
            isActive={pathName === '/subscriptions'}
          >
            Aidbox Subscriptions
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
      {children}
    </Box>
  )
}
