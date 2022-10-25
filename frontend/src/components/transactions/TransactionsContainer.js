import React, {useState, useEffect} from 'react';
import Transcations from './Transactions';
import axios from 'axios';


const TransactionsContainer = () => {
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
        <div><div>this is TransactionsContainer</div>

            <Transcations transactions={transactions}/>
        </div>
    );
}

export default TransactionsContainer;