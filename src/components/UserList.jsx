import React from 'react';

const UserList = ({ usersData }) => (
  <ul className="list-group">
    {usersData.map((user) => (
      <li key={user.id} className="list-group-item">
         * {user.name}
      </li>
    ))}
  </ul>
);

export default UserList;
