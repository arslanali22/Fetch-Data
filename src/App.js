// src/App.js
import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">User List</h1>
      <UserList usersData={users} />
    </div>
  );
};

export default App;
