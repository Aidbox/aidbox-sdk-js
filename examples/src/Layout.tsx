import { Navbar, Text } from '@nextui-org/react'

import Logo from './assets/logo.svg'
import { Box } from './shared'

export const Layout = ({ children }: any) => {
  const pathName = document.location.pathname

  return (
    <Box
      css={{
        maxW: '100%'
      }}
    >
      <Navbar
        variant='sticky'
      >
        <Navbar.Brand>
          <Navbar.Content
            hideIn='xs'
            css={{ p: 0 }}
          >
            <Navbar.Link
              href='/'
            >
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
        <Navbar.Content
          variant='underline'
        >
          <Navbar.Link
            href='/phr'
            isActive={pathName === '/phr'}
          >PHR
          </Navbar.Link>
          <Navbar.Link
            href='/complex-query'
            isActive={pathName === '/complex-query'}
          >Complex Query
          </Navbar.Link>
          <Navbar.Link
            href='/subscriptions'
            isActive={pathName === '/subscriptions'}
          >Aidbox Subscriptions
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
      {children}
    </Box>
  )
}
