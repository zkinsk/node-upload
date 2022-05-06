import React from 'react';
import UserCard from './user-card/user-card';
import './user-grid.css';

const UserGrid = () => {
  const users = [
    {
      userName: 'bob',
      fullName: 'boober',
    },
  ];
  return (
    <div className="user_grid">
      {users.map((user) => (
        <UserCard {...user} />
      ))}
    </div>
  );
};

export default UserGrid;
