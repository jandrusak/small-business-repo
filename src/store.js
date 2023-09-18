import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import businessReducer from './Redux/reducers'; 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import {applyMiddleware} from 'redux'
// import App from './App';

const store = configureStore({
    reducer: {
    businesses: businessReducer, 
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
});

export default store;