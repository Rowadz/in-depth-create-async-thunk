import { configureStore } from '@reduxjs/toolkit'
import appSideNavSliceReducer from '../features/AppSideNav/appSideNavSlice'
import dashboardReducer from '../features/Dashboard/dashboardSlice'

export default configureStore({
  reducer: {
    appSideNav: appSideNavSliceReducer,
    dashboard: dashboardReducer,
  },
})
