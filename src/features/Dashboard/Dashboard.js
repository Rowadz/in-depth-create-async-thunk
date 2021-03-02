import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Placeholder, Message } from 'rsuite'
import { fetchDashboardData } from './dashboardSlice'
import { selectLoadingStatus } from './selectors'
import { HTTP_STATUS } from '../../app/constants'
import DashboardCards from './DashboardCards'
import { unwrapResult } from '@reduxjs/toolkit'

const Dashboard = () => {
  const dispatch = useDispatch()
  const loading = useSelector(selectLoadingStatus)
  const errorMessage = useSelector((state) => state.dashboard.errorMessage)

  useEffect(() => {
    // dispatch(fetchDashboardData({ id: 2, name: 'rowadz', age: 80 }))
    //   .then(unwrapResult)
    //   .then((obj) => console.log({ obj }))
    //   .catch((obj) => console.log({ objErr: obj }))
    const promise = dispatch(
      fetchDashboardData({ id: 2, name: 'rowadz', age: 80 })
    )
    return () => {
      promise.abort()
    }
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
          description={errorMessage}
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
