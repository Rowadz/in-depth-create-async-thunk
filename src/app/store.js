import { configureStore } from '@reduxjs/toolkit'
import appSideNavSliceReducer from '../features/AppSideNav/appSideNavSlice'

export default configureStore({
  reducer: {
    appSideNav: appSideNavSliceReducer,
  },
})
