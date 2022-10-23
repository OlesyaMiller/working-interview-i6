import UsersContainer from './components/users/UsersConatainer';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios('http://localhost:3000/users/index');
      console.log(data)
      setUsers(data.data);
    }
    fetchData()
  }, []);

  return (
    <div>
        <p>
          Welcome to my accounting app!
          <UsersContainer users={users}/>
        </p>
    </div>
  );
}

export default App;
