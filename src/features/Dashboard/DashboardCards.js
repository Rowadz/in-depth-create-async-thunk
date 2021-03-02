import React from 'react'
import { useSelector } from 'react-redux'
import { Panel, Row, Col } from 'rsuite'

const DashboardCards = () => {
  const data = useSelector((state) => state.dashboard.data)

  return (
    <Row>
      {data.map(({ id, Type, Longitude, Latitude, Suffix }) => (
        <Col xs={4} key={id}>
          <Panel header={<h3>{Type}</h3>} shaded bordered>
            <ul>
              <li>
                Longitude: <b>{Longitude}</b>
              </li>
              <li>
                Latitude: <b>{Latitude}</b>
              </li>
              <li>
                Suffix: <b>{Suffix}</b>
              </li>
            </ul>
          </Panel>
        </Col>
      ))}
    </Row>
  )
}

export default DashboardCards
