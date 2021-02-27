import React from 'react'
import 'rsuite/dist/styles/rsuite-dark.css'
import { Container, Header, Sidebar, Content, Panel } from 'rsuite'
import { useSelector } from 'react-redux'
import { AppHeader } from './ui/AppHeader'
import { AppSideNav, Dashboard, selectActiveTab } from './features'
import { SIDE_NAV_TABS } from './app/constants'

const contentStyle = {
  padding: 20,
}

const App = () => {
  const selectedTab = useSelector(selectActiveTab)

  return (
    <div>
      <Container>
        <Header>
          <AppHeader />
        </Header>
        <Container>
          <Sidebar>
            <AppSideNav />
          </Sidebar>
          <Content style={contentStyle}>
            <Panel header="Content" bordered>
              {SIDE_NAV_TABS.DASHBOARD === selectedTab && <Dashboard />}
            </Panel>
          </Content>
        </Container>
      </Container>
    </div>
  )
}

export default App
