import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Listing from "./Components/Listing";
import Details from "./Components/Details";
import Login from "./Components/Login";
import AdminView from "./Components/AdminView";
import AddListing from "./Components/AddListing";
import Navigation from './Components/Navigation';
import PrivateComponentWrapper from './Components/PrivateRoute';
// import { ImageOutlined } from '@mui/icons-material';
import { Provider } from 'react-redux';
import store from './store';
import ReactDOM from 'react-dom'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
            <Router>
        <Navigation />
        <Routes>
          <Route path='/' exact element={<Listing/>}/>
          <Route path='/details/:id' exact element={<Details/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/admin' exact element={
            <PrivateComponentWrapper>
            <AdminView/>
            </PrivateComponentWrapper>
          }/>
          <Route path='/addlisting' exact element={
             <PrivateComponentWrapper>
             <AddListing/>
             </PrivateComponentWrapper>
           }/>
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}


export default App;
