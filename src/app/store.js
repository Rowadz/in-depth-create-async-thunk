import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from '../features/Dashboard/dashboardSlice'
import usersReducer from '../features/Users/usersSlice'
import appSideNavSliceReducer from '../features/AppSideNav/appSideNavSlice'

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    users: usersReducer,
    appSideNav: appSideNavSliceReducer,
  },
})
