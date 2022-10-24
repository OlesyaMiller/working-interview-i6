import React, { useState } from 'react';

const TransactionInput = () => {
    const [transactionInfo, setTransactionInfo] = useState({
        user_id: "",
        title: "",
        amount: 0,
        gen_ledger_account: "",
    });

    const handleOnChange = (event) => {
        setTransactionInfo({
            [event.target.name]: event.target.value 
        })
    }

    return (  
        <p>transactions form</p>
    );
}

export default TransactionInput;