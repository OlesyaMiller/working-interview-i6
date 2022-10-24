import React from 'react';
import UsersContainer from './components/users/UsersConatainer';
import TransactionsContainer from './components/transactions/TransactionsContainer';
import NavBar from './components/nav/NavBar';
import UserInput from './components/users/UserInput';
import TransactionInput from './components/transactions/TransactionInput';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/new-user" element={UserInput} />
          <Route path="/new-transaction" element={TransactionInput} />
        </Routes>
      </Router>
      <p>
        Welcome to my accounting app!
        <button>Create new user</button>
        <UsersContainer />
        <TransactionsContainer />
      </p>
    </div>
  )
}

export default App;
