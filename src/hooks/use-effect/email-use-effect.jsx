import React, { useEffect, useState } from 'react';
export const EmailUseEffect = () => {
const [email, setEmail] = useState('');
const [lastName, setLastName] = useState('');
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [users, setUsers] = useState([]);

useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
          // Access the first user
          setEmail(data.users[0].email); // Set email from the first user
          setLastName(data.users[0].lastName); // Set last name from the first user
          setUsers(data.users); // Set all users
          setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

if (loading) {
    return <p>Loading...</p>;
}

if (error) {
    return <p>{error}</p>;
}

return (
    <div>
      <h1>User Info</h1>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
        <h1>Users</h1>
        <ul>
           {users.map((user) => (
            <li key={user.id}>
                <div>
                    <h3>{user.firstName} {user.lastName}</h3>
                    <p>{user.email}</p>
                </div>
            </li>
           ))}
            </ul>
    </div>
);
}