import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SlidingPane from "react-sliding-pane";
import Transaction from './Transaction';
import "react-sliding-pane/dist/react-sliding-pane.css";

const Transcations = ({transactions}) => {
    const [state, setState] = useState({
        isPaneOpen: false
    }); 
    const [id, setId] = useState("");
    
  return (
    <div>
    <table border='1px solid black'>
      <thead>
        <tr>
            <td>Date</td>
            <td>Title</td>
            <td>Amount</td>
            <td>User</td>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => <Link id={transaction.id} onClick={() => {setId(transaction.id); setState({isPaneOpen: true})}}>
            <tr key={transaction.id}>
            <td>{transaction.created_at}</td>
            <td>{transaction.title}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.user_id}</td>
        </tr></Link>)}
      </tbody>
    </table>
    <SlidingPane
        isOpen={state.isPaneOpen}
        title="Transaction details"
        onRequestClose={() => {
          setState({ isPaneOpen: false });
        }}
      >
        <Transaction id={id} transactions={transactions}/>
        
      </SlidingPane>
    </div>
  ) 
}

export default Transcations;