import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import SlidingPane from "react-sliding-pane";
import Transaction from './Transaction';
import "react-sliding-pane/dist/react-sliding-pane.css";

const Transcations = ({transactions}) => {

  const [state, setState] = useState({
    isPaneOpen: false
  }); 
  const [id, setId] = useState("");
    
  return (
    <div>
      <table>
        <thead>
          <tr>
              <th>Date</th> |
              <th>Title</th> |
              <th>Amount</th> |
              <th>User</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => 
              <tr key={transaction.id} onClick={() => {setId(transaction.id); setState({isPaneOpen: true})}}>
                  <td>{transaction.created_at}</td> |
                  <td>{transaction.title}</td> |
                  <td>{transaction.amount}</td> |
                  <td>{transaction.user_id}</td>
              </tr>
            )}
        </tbody>
      </table>

      <SlidingPane
        isOpen={state.isPaneOpen}
        title="Transaction details"
        onRequestClose={() => {
          setState({ isPaneOpen: false });
        }}
      >
        <Transaction id={id} transactions={transactions} />
      </SlidingPane>
    </div>
  ) 
}

export default Transcations;