// src/App.js
import React, { useState, useEffect } from "react";
import UserList from "./UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the provided URL
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <UserList users={users} />
    </div>
  );
};

export default App;
