import React from 'react';
import user from '../Profile/user.json';
import Profile from '../Profile/Profile';
import transactions from '../TransactionHistory/transaction.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import Statistics from '../Statistics/Statistics';
import statisticdata from '../Statistics/statistic.json';
import FriendList from '../FriendList/FriendList';
import friends from '../FriendList/friends.json';

function App() {
  return (
    <div>
      <Profile user={user} />
      <hr />
      <Statistics title="File loaded" stats={statisticdata} />
      <hr />
      <FriendList friends={friends} />
      <hr />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
