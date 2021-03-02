import React from 'react'
import { useSelector } from 'react-redux'
import { Panel, Row, Col } from 'rsuite'

const DashboardCards = () => {
  const data = useSelector((state) => state.users.data)

  return (
    <Row className="show-grid">
      {data.map(({ id, email, name }) => (
        <Col xs={4} key={id}>
          <Panel header={<h3>{name}</h3>} shaded bordered>
            <ul>
              <li>
                email: <b>{email}</b>
              </li>
              <li>
                name: <b>{name}</b>
              </li>
            </ul>
          </Panel>
        </Col>
      ))}
    </Row>
  )
}

export default DashboardCards
