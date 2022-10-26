import React, { useEffect, useState } from 'react';
import Transcations from './Transactions';
import axios from 'axios';

const TransactionsContainer = (props) => {
    // const [transactions, setTransactions] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await axios('http://localhost:3000/transactions');
    //         console.log("transactions data", data.data)
    //         setTransactions(data.data);
    //     }
    //     fetchData()
    // }, []);

    return (  
        <div>this is TransactionsContainer
            
            <Transcations transactions={props.transactions}/>
        </div>
    );
}

export default TransactionsContainer;