import React from 'react';
import User from './User';

const Users = (props) => {
    return ( 
        <div>userS
                {props.users.map(user => {return <div key={user.id}>{<User user={user} key={user.id} id={user.id} />}</div>})}
        </div>
     );
}

export default Users;