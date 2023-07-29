import React, { useState, useEffect } from "react";
import { db } from '../config/Firebase';
import { collection, getDocs } from 'firebase/firestore';

function UserList() {
  // State hook to store the list of users
  const [users, setUsers] = useState([]);

  // useEffect hook to fetch users data from the Firebase Firestore
  useEffect(() => {
    // Function to fetch users from the 'users' collection in Firestore
    const fetchUsers = async () => {
      // Get a reference to the 'users' collection
      const usersCol = collection(db, 'users');
      // Fetch the documents from the 'users' collection
      const userSnapshot = await getDocs(usersCol);
      // Map the data of each document and store it in the userList array
      const userList = userSnapshot.docs.map(doc => doc.data());
      // Update the state with the fetched user data
      setUsers(userList);
    };
    // Call the fetchUsers function when the component mounts
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Registered Users:</h2>
      <ul>
        {/* Map over the users array and display each user's name and email */}
        {users.map((user, index) =>
          <li key={index}>
            {user.name} ({user.email})
          </li>
        )}
      </ul>
    </div>
  );
}

export default UserList;
