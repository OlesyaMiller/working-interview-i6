import { React, useState, useEffect } from 'react';
import Users from './Users';
import axios from 'axios';

const UsersContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios('http://localhost:3000/users');
            console.log("users data", data.data)
            setUsers(data.data);
        }
        fetchData();
    }, []);

    return (  
        <div>
            <Users users={users}/>
        </div>
    );
}

export default UsersContainer;
