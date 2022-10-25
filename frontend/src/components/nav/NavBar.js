import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
        <NavLink
            to="/new-user"
            exact
            activeStyle={{
                color: 'black'
            }}
            >Create user
        </NavLink> |

        <NavLink
          to="/new-transaction"
          exact 
          activeStyle={{
            color: 'black'
          }}
        > Create transaction
        </NavLink> 
        
    </div>
  )
}

export default NavBar