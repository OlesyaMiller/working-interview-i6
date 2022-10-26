import { React, useState, useEffect } from 'react';
import UsersContainer from './components/users/UsersConatainer';
import TransactionsContainer from './components/transactions/TransactionsContainer';
import Home from './components/Home';
import NavBar from './components/nav/NavBar';
import UserInput from './components/users/UserInput';
import TransactionInput from './components/transactions/TransactionInput';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Transaction from './components/transactions/Transaction';
import axios from 'axios';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const App = () => {
  const [state, setState] = useState({
    isPaneOpen: false
  }); 
  const [transactions, setTransactions] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const data = await axios('http://localhost:3000/transactions');
        console.log("transactions data", data.data)
        setTransactions(data.data);
      }
      fetchData()
    }, []); 

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<TransactionsContainer transactions={transactions}/>} />
          <Route path="/new-user" element={<UserInput/>} />
          <Route path="/new-transaction" element={<TransactionInput/>} />
          <Route path="/transactions/:id" element={routerProps => <Transaction transactions={transactions} {...routerProps}/>} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App;
