import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
        <Link to="/">Home</Link> |
        <Link to="/new-user">Create user</Link> |
        <Link to="/new-transaction">Create transaction</Link> 
    </div>
  )
}

export default NavBar;