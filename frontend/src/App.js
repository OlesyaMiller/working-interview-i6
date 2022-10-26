import { React } from 'react';
import TransactionsContainer from './components/transactions/TransactionsContainer';
import NavBar from './components/nav/NavBar';
import UserInput from './components/users/UserInput';
import TransactionInput from './components/transactions/TransactionInput';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import "react-sliding-pane/dist/react-sliding-pane.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<TransactionsContainer />} />
          <Route path="/new-user" element={<UserInput/>} />
          <Route path="/new-transaction" element={<TransactionInput />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
