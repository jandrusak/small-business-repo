import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import cookie from "cookie";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="relative" style={{backgroundColor: '#4CAF50' }}>
      <Toolbar style={{display: 'flex', justifyContent: 'flex-end'}}>
        <ul className="nav-list" style={{display: 'flex', gap: '20px', margin: 0, padding: 0}}>
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/addlisting">Add</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/login">Login</Link>
          </li>
          <li
            className="nav-list-item"
            onClick={() => {
              document.cookie = cookie.serialize("loggedIn", null, {
                maxAge: 0,
              });
              navigate("/login");
            }}
          >
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
