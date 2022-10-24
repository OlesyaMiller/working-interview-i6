import React, { useState } from 'react';
import axios from 'axios';

const TransactionInput = () => {
    const [transactionInfo, setTransactionInfo] = useState({
        user_id: "",
        title: "",
        amount: 0,
        gen_ledger_account: "",
    });

    const [transactionId, setTransactionId] = useState("");

    const createTransaction = (data) => {
        axios.post('http://localhost:3000/transactions', data)
        .then(responce => setTransactionId(responce.data.id))
        .catch(function (error) {
            console.log(error);
        });
    }

    const handleOnChange = (event) => {
        setTransactionInfo({
            [event.target.name]: event.target.value 
        })
    }

    return (  
        <p>
            <form>
                <form as="select" name="user_id" onChange={this.handleOnChange}>
                    <option value="select">Select</option>  
                    {/* {this.props.locations.map(location => 
                        {return <option value={location.id}>{location.name}</option>}
                    )} */}
                </form>
            </form>
        </p>
    );
}

export default TransactionInput;