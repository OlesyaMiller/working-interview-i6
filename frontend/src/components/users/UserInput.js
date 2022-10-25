import React, { useState } from 'react';
import axios from 'axios';

const UserInput = () => {
    const [userInfo, setUserInfo] = useState({
        name: ""
    });

    const [userId, setUserId] = useState("");

    const createUser = (data) => {
        axios.post('http://localhost:3000/users', data)
        .then(responce => setUserId(responce.data.id))
        .catch(error => {
            console.log(error);
        });
    }

    const handleOnChange = (event) => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value 
        })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        createUser(userInfo)
    }

    return ( 
        <div>
            <form method="post" onSubmit={handleOnSubmit}>
                <label>Name:</label>
                <input name="name" onChange={handleOnChange} value={userInfo.name}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
        
     );
}

export default UserInput;