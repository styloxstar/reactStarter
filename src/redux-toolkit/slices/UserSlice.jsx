import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
  'users/fetch',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState: {enableStatus: false, data: [], status: 'idle' },
    reducers: {
        enableStatus: (state, action) => {
            state.enableStatus = action.payload;
        }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchUsers.rejected, state => {
        state.status = 'failed'
      })
  },
})
export const { enableStatus } = usersSlice.actions
export default usersSlice.reducer
