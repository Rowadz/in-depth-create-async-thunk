import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, HTTP_STATUS } from '../../app/constants'
import axios, { CancelToken } from 'axios'

const namespace = 'dashboard'

export const fetchDashboardData = createAsyncThunk(
  `${namespace}/fetchDashboardData`,
  async (obj, { dispatch, getState, signal }) => {
    const source = CancelToken.source()

    /** A signal object that allows you to communicate with a DOM request
     * (such as a Fetch) and abort it if required via an AbortController object. */
    signal.addEventListener('abort', () => {
      source.cancel()
    })

    const { data } = await axios.get(`${API_URL}/dashboard`, {
      cancelToken: source.token,
    })
    // const data = await fetch(`${API_URL}/dashboard`, { signal }).then((r) =>
    //   r.json()
    // )
    return data
  }
  // {
  //   condition: (obj, { getState }) => {
  //     console.log({ objFromCondirtion: obj })
  //     const { users } = getState()
  //     if (users.loading === HTTP_STATUS.PENDING) {
  //       return false
  //     }
  //   },
  //   dispatchConditionRejection: true,
  // }
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
