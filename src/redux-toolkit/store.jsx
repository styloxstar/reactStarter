import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/CounterSlice.jsx'
import usersReducer from './slices/UserSlice.jsx'

export const store = configureStore({
  reducer: {
        counter: counterReducer,
        users: usersReducer,
  },
})
export default store;