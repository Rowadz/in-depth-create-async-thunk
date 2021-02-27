import { createSlice } from '@reduxjs/toolkit'

const appSideNavSlice = createSlice({
  name: 'appSideNav',
  initialState: {
    selected: null,
  },
  reducers: {
    changeSelectedTab(state, { payload: tabName }) {
      state.selected = tabName
    },
  },
})

export const { changeSelectedTab } = appSideNavSlice.actions

export default appSideNavSlice.reducer
