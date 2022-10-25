import React from 'react';

const Transaction = (props) => {
    return (  
        <div>
            {props.transaction.title}
        </div>
    );
}

export default Transaction;