import React, { useState } from 'react';
import axios from 'axios';

const UserInput = () => {
    const [userInfo, setUserInfo] = useState({
        name: ""
    });

    const handleOnChange = (event) => {
        setUserInfo({
            [event.target.name]: event.target.value 
        })
    }

    const [userId, setUserId] = useState("");

    const createUser = (data) => {
        axios.post('http://localhost:3000/users', data)
        .then(responce => setUserId(responce.data.id))
        .catch(function (error) {
            console.log(error);
        });
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        createUser(userInfo)
    }

    return ( 
        <div>
            <form onSubmit={handleOnSubmit}>
                <label>Name:
                    <input type="text" name="name" value={userInfo} onChange={handleOnChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
        
     );
}

export default UserInput;