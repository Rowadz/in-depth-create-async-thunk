import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, HTTP_STATUS } from '../../app/constants'
import axios from 'axios'

const namespace = 'users'

export const fetchUsersData = createAsyncThunk(
  `${namespace}/fetchDashboardData`,
  async () => {
    const { data } = await axios.get(`${API_URL}/users-group`)
    return data
  }
)

const usersSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    data: null,
  },
  reducers: {},
  extraReducers: {
    [fetchUsersData.pending](state) {
      state.loading = HTTP_STATUS.PENDING
    },
    [fetchUsersData.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED
      state.data = payload
    },
    [fetchUsersData.rejected](state) {
      state.loading = HTTP_STATUS.REJECTED
    },
  },
})

export default usersSlice.reducer
