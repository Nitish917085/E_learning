import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducer';


import createSagaMiddleware from 'redux-saga';


// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: userReducer,

});



export default store;