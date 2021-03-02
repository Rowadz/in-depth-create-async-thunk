import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, HTTP_STATUS } from '../../app/constants'
import axios from 'axios'

const namespace = 'dashboard'

export const fetchDashboardData = createAsyncThunk(
  `${namespace}/fetchDashboardData`,
  async (obj, { dispatch, getState }) => {
    const { data } = await axios.get(`${API_URL}/dashboard`)
    return data
  }
)

const dashboardSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    data: null,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: {
    [fetchDashboardData.pending](state) {
      state.loading = HTTP_STATUS.PENDING
    },
    [fetchDashboardData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED
      state.data = payload
    },
    [fetchDashboardData.rejected](state, { error }) {
      state.loading = HTTP_STATUS.REJECTED
      state.errorMessage = error.message
    },
  },
})

export default dashboardSlice.reducer
