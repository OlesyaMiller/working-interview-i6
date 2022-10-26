import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TransactionInput = () => {
    const navigate = useNavigate();

    const [transactionInfo, setTransactionInfo] = useState({
        user_id: "",
        title: "",
        amount: null,
        gen_ledger_account: "",
    });

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios('http://localhost:3000/users');
            setUsers(data.data);
        }
        fetchData();
    }, []);

    const createTransaction = (data) => {
        axios.post('http://localhost:3000/transactions', data)
        .then(res => res.json())
        .catch(error => {
            console.log(error);
        });
    }

    const handleOnChange = (event) => {
        setTransactionInfo({
            ...transactionInfo,
            [event.target.name]: event.target.value 
        })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        createTransaction(transactionInfo);
        setTransactionInfo({
            ...transactionInfo,
            user_id: "",
            title: "",
            amount: 0,
            gen_ledger_account: "",
        });
        navigate('/');
    }

    return (  
        <div>
            <form method="post" onSubmit={handleOnSubmit}>
                <select name="user_id" onChange={handleOnChange}>
                    <option name="user_id" value="select">Select user </option>  
                    {users.map(user => 
                        {return <option key={user.id} name="user_id" value={user.id}>{user.name}</option>}
                    )}
                </select>
                <input onChange={handleOnChange} name="title" value={transactionInfo.title}/>
                <input onChange={handleOnChange} name="amount" value={transactionInfo.amount}/>
                <input onChange={handleOnChange} name="gen_ledger_account" value={transactionInfo.gen_ledger_account}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default TransactionInput;