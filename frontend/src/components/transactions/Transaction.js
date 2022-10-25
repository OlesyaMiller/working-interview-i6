import React from 'react';

const Transaction = (props) => {
    return (  
        <>
            <td>{props.transaction.date_created}</td>
            <td>{props.transaction.title}</td>
            <td>{props.transaction.amount}</td>
            <td>{props.transaction.user.name}</td>
        </>
    );
}

export default Transaction;