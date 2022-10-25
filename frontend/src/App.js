import React from 'react';
import UsersContainer from './components/users/UsersConatainer';
import TransactionsContainer from './components/transactions/TransactionsContainer';
import NavBar from './components/nav/NavBar';
import UserInput from './components/users/UserInput';
import TransactionInput from './components/transactions/TransactionInput';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <div>
        <NavBar />
        <Routes>
          <Route exact path="/new-user" element={<UserInput/>} />
          <Route path="/new-transaction" element={<TransactionInput/>} />
        </Routes>
      
        <TransactionsContainer />
      
    </div>
  )
}

export default App;
