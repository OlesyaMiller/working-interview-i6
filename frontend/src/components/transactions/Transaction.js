import React from 'react';

const Transaction = (props) => {
    return (  
        <div><h5>Transaction</h5>
            <p>{props.transaction.title}</p>
        </div>
    );
}

export default Transaction;