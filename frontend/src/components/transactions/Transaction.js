import { React, useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const Transaction = ({id, transactions}) => {
    // console.log('transactions props', transactions)
    // const [state, setState] = useState({
    //     isPaneOpen: false
    // }); 
    
    if (transactions.length === 0) return null;

    const transaction = transactions.find(transaction => transaction.id === id);
    console.log('transaction', transaction)
    
    return ( 
        <div>
            <div>this is transaction title {transaction.title}</div>
            
        </div>
     );
}

export default Transaction;