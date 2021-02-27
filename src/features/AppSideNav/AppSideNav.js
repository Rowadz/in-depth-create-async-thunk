import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSelectedTab } from './appSideNavSlice'
import { selectActiveTab } from './selectors'
import { Sidebar, Sidenav, Nav, Icon } from 'rsuite'
import { SIDE_NAV_TABS } from '../../app/constants'

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
  const dispatch = useDispatch()
  const selectedTab = useSelector(selectActiveTab)
  const changeTab = (tabName) => {
    dispatch(changeSelectedTab(tabName))
  }

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
            <Nav.Item
              eventKey="1"
              active={selectedTab === SIDE_NAV_TABS.DASHBOARD}
              icon={<Icon icon="dashboard" />}
              onClick={() => changeTab(SIDE_NAV_TABS.DASHBOARD)}
            >
              {SIDE_NAV_TABS.DASHBOARD}
            </Nav.Item>
            <Nav.Item
              eventKey="2"
              active={selectedTab === SIDE_NAV_TABS.USERS}
              icon={<Icon icon="group" />}
              onClick={() => changeTab(SIDE_NAV_TABS.USERS)}
            >
              {SIDE_NAV_TABS.USERS}
            </Nav.Item>
            <Nav.Item
              eventKey="3"
              active={selectedTab === SIDE_NAV_TABS.REPORTS}
              icon={<Icon icon="area-chart" />}
              onClick={() => changeTab(SIDE_NAV_TABS.REPORTS)}
            >
              {SIDE_NAV_TABS.REPORTS}
            </Nav.Item>
            <Nav.Item
              eventKey="4"
              icon={<Icon icon="bug" />}
              active={selectedTab === SIDE_NAV_TABS.BUG_REQUESTS}
              onClick={() => changeTab(SIDE_NAV_TABS.BUG_REQUESTS)}
            >
              {SIDE_NAV_TABS.BUG_REQUESTS}
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Sidebar>
  )
}

export default AppSideNav
