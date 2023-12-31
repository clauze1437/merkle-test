import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import UserDetail from './components/UserDetail';
// import AddEditUser from './components/AddEditUser';

import './css/bootstrap.min.css';
import './css/style.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/userDetail/:userID" element={<UserDetail />} />
        {/* <Route path="/addEditUser/:userID?" element={<AddEditUser />} /> */}

      </Routes>
    </Router>
  );
};

export default App;
