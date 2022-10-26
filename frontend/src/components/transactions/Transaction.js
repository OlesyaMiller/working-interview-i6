import React from "react";
import "react-sliding-pane/dist/react-sliding-pane.css";

const Transaction = ({id, transactions}) => {
    
    if (transactions.length === 0) return null;

    const transaction = transactions.find(transaction => transaction.id === id);

    return ( 
        <div>
            <div>Id: {transaction.id}</div>
            <div>Title: {transaction.title}</div>
            <div>Amount: {transaction.amount}</div>
            <div>General ledger account: {transaction.gen_ledger_account}</div>
            <div>User name: {transaction.user_id}</div>
        </div>
     )
}

export default Transaction;