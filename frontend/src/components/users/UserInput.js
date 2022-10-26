import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserInput = () => {
    const navigate = useNavigate();
    
    const [userInfo, setUserInfo] = useState({
        name: ""
    });

    const createUser = (data) => {
        axios.post('http://localhost:3000/users', data)
        .then(responce => responce.json())
        .catch(error => {
            console.log(error);
        })
    };

    const handleOnChange = (event) => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value 
        })
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        createUser(userInfo);
        navigate('/');
    };

    return ( 
        <div>
            <form method="post" onSubmit={handleOnSubmit}>
                <label>Name:</label>
                <input name="name" onChange={handleOnChange} value={userInfo.name}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
     )
}

export default UserInput;