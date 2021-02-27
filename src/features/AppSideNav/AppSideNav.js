import React from 'react'
import { Sidebar, Sidenav, Nav, Icon } from 'rsuite'

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: '#34c3ff',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
}

const AppSideNav = () => {
  return (
    <Sidebar
      style={{ display: 'flex', flexDirection: 'column' }}
      width={260}
      collapsible
    >
      <Sidenav defaultOpenKeys={['3']} style={{ height: '100vh' }}>
        <Sidenav.Header>
          <div style={headerStyles}>
            <Icon
              icon="logo-analytics"
              size="lg"
              style={{ verticalAlign: 0 }}
            />
            <span style={{ marginLeft: 12 }}>Get data for...</span>
          </div>
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
              Users
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<Icon icon="area-chart" />}>
              Reports
            </Nav.Item>
            <Nav.Item eventKey="4" icon={<Icon icon="bug" />}>
              Bug Requests
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Sidebar>
  )
}

export default AppSideNav
