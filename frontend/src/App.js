import UsersContainer from './components/users/UsersConatainer';
import React from 'react';
import TransactionsContainer from './components/transactions/TransactionsContainer';

const App = () => {

  return (
    <div>
        <p>
          Welcome to my accounting app!
          <button>Create new user</button>
          <UsersContainer />
          <TransactionsContainer />
        </p>
    </div>
  );
}

export default App;
