import { configureStore } from '@reduxjs/toolkit'
import appSideNavSliceReducer from '../features/AppSideNav/appSideNavSlice'
import dashboardReducer from '../features/Dashboard/dashboardSlice'
import usersReducer from '../features/Users/usersSlice'

export default configureStore({
  reducer: {
    appSideNav: appSideNavSliceReducer,
    dashboard: dashboardReducer,
    users: usersReducer,
  },
})
