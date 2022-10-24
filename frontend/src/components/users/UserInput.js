import React, { useState } from 'react';


const UserInput = () => {
    const [userInfo, setUserInfo] = useState({
        name: ""
    });

    const handleOnChange = (event) => {
        setUserInfo({
            [event.target.name]: event.target.value 
        })
    }

    return ( 
        <p>
            this is a users form
        </p>
        
     );
}

export default UserInput;