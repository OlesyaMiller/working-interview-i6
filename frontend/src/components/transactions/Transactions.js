import React from 'react';
import Transaction from './Transaction';

const Transcations = ({transactions}) => {
    
  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
            <td>Date</td>
            <td>Title</td>
            <td>Amount</td>
            <td>User</td>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => <tr>
            <td>{transaction.created_at}</td>
            <td>{transaction.title}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.user_id}</td>
        </tr>)}
      </tbody>
    </table>
  ) 
}

export default Transcations;