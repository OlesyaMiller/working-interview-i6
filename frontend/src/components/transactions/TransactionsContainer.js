import React, { useEffect, useState } from 'react';
import Transcations from './Transactions';
import axios from 'axios';

const TransactionsContainer = () => {
    const BASE_URL = 'http://localhost:3000'

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const data = await axios(`${BASE_URL}/transactions`);
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