import React from 'react';
import UserCard from './user-card/user-card';
import './user-grid.css';

const UserGrid = ({ users }) => {
  return (
    <div className="user_grid">
      {users.map((user, index) => (
        <UserCard {...user} key={`${user.fullName}${user.userName}${index}`} />
      ))}
    </div>
  );
};

export default UserGrid;
