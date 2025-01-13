import React, { useEffect, useState } from 'react';
export const EmailUseEffect = () => {
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [users, setUsers] = useState([]);
const [selectedGender, setSelectedGender] = useState('all');
const [filteredUsers, setFilteredUsers] = useState([]);

useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
          setUsers(data.users); // Set all users
          setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedGender === 'all') {
      setFilteredUsers(users); // Show all users
    } else {
      setFilteredUsers(users.filter((user) => user.gender === selectedGender));
    }
  }, [selectedGender, users]);

if (loading) {
    return <p>Loading...</p>;
}

if (error) {
    return <p>{error}</p>;
}

return (
    <div>
         <div>
            <h1>Filter by Gender</h1>
            <select
                onChange={(e) => setSelectedGender(e.target.value)}
                value={selectedGender}
                >
                <option value="all">All</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </select>
        </div>
        <div>
        <h1>Users</h1>
        <ul>
           {filteredUsers.map((user) => (
            <li key={user.id}>
                <div>
                    <h3>{user.firstName} {user.lastName}
                    </h3>
                    <p>{user.gender}</p>
                    <p>{user.email}</p>
                </div>
            </li>
           ))}
            </ul>
        </div>
       
    </div>
);
}