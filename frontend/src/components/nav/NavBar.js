import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
        <Link
          to="/"
            // exact
            activestyle={{
              color: 'black'
            }}
            >Home
        </Link> |
        <Link
            to="/new-user"
            // exact
            activestyle={{
                color: 'black'
            }}
            >Create user
        </Link> |

        <Link
          to="/new-transaction"
          // exact 
          activestyle={{
            color: 'black'
          }}
        > Create transaction
        </Link> 
        
    </div>
  )
}

export default NavBar