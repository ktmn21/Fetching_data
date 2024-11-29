import React from 'react';
import './App.css';
import UserList from './components/UserList';
import PostList from './components/PostList';
import ErrorHandling from './components/ErrorHandling';

function App() {
  return (
      <div className="App">
        <UserList />
        <PostList />
        <ErrorHandling />
      </div>
  );
}

export default App;
