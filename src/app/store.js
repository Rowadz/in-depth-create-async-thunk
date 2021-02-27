import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from '../features/Dashboard/dashboardSlice'
import appSideNavSliceReducer from '../features/AppSideNav/appSideNavSlice'

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    appSideNav: appSideNavSliceReducer,
  },
})
