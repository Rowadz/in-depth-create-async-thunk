import React from 'react'
import 'rsuite/dist/styles/rsuite-dark.css'
import { Container, Header, Sidebar, Content, Panel } from 'rsuite'
import { AppHeader } from './ui/AppHeader'
import { AppSideNav } from './features/AppSideNav'

const contentStyle = {
  padding: 20,
}

const App = () => {
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
            <Panel header="Content" bordered></Panel>
          </Content>
        </Container>
      </Container>
    </div>
  )
}

export default App
