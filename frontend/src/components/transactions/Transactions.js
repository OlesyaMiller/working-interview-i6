import React from 'react';
import Transaction from './Transaction';

const Transcations = (props) => {
    return ( 
        <p>transactionS
            <div>
                {props.transactions.map(transaction => {return <div key={transaction.id}>{<Transaction transaction={transaction} key={transaction.id} id={transaction.id} />}</div>})}
        </div>
        </p>
     );
}

export default Transcations;