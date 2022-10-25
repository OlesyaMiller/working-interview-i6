import React from 'react';

const Transcations = ({transactions}) => {
    
  return (
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
        {transactions.map(transaction => <tr key={transaction.id}>
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