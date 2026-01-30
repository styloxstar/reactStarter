import React from 'react'
import { combineReducers } from 'redux'
import CountReducer from './CountReducer'

const index = combineReducers({
    countState: CountReducer
})

export default index
