import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
}

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('LOG_USER', (state, action) => {
      state.currentUser=action.payload
    })
    .addCase('REG_USER', (state, action) => {
      state.currentUser=action.payload
    })
    .addCase('LOG_OUT', (state, action) => {
      state.currentUser=null
    })
})

export default userReducer;
