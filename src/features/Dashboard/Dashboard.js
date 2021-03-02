import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Placeholder, Message } from 'rsuite'
import { HTTP_STATUS } from '../../app/constants'
import { fetchDashboardData } from './dashboardSlice'
import { selectLoadingStatus } from './selectors'
import DashboardCards from './DashboardCards'

const Dashboard = () => {
  const dispatch = useDispatch()
  const loading = useSelector(selectLoadingStatus)

  useEffect(() => {
    dispatch(fetchDashboardData())
  }, [])

  return (
    <div>
      {loading === HTTP_STATUS.PENDING && (
        <Placeholder.Paragraph style={{ marginTop: 30 }} rows={5} active />
      )}
      {loading === HTTP_STATUS.REJECTED && (
        <Message
          showIcon
          closable
          type="error"
          title="Error"
          description="TODO display error message from the rest API"
        />
      )}
      {loading === HTTP_STATUS.FULFILLED && (
        <>
          <Message
            showIcon
            closable
            type="success"
            title="Success"
            description="Fetched data correctly"
          />
          <DashboardCards />
        </>
      )}
    </div>
  )
}

export default Dashboard
