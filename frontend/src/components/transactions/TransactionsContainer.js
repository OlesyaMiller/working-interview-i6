import React, { useEffect, useState } from 'react';
import Transcations from './Transactions';
import axios from 'axios';

const TransactionsContainer = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const data = await axios('http://localhost:3000/transactions');
          setTransactions(data.data);
        }
        fetchData()
    }, []); 

    return (  
        <div>
            <Transcations transactions={transactions} />
        </div>
    );
}

export default TransactionsContainer;