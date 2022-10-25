import React from 'react';
import UsersContainer from './components/users/UsersConatainer';
import TransactionsContainer from './components/transactions/TransactionsContainer';
import Home from './components/Home';
import NavBar from './components/nav/NavBar';
import UserInput from './components/users/UserInput';
import TransactionInput from './components/transactions/TransactionInput';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/new-user" element={<UserInput/>} />
          <Route path="/new-transaction" element={<TransactionInput/>} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App;
