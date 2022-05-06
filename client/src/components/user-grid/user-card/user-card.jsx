import React from 'react';
import genericAvatar from '../../../assets/images/generic-avatar.png';
import './user-card.css';

const UserCard = ({ imageUrl, userName, fullName }) => {
  return (
    <div className="user_card">
      <img src={imageUrl || genericAvatar} alt={`${userName} avatar`} />
      <div className="user_card-info">
        <p>{userName}</p>
        <p>{fullName}</p>
      </div>
    </div>
  );
};

export default UserCard;
