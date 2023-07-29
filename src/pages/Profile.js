import React, { useEffect, useState } from 'react';
import Sidebar from '../component/Sidebar';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/Firebase';
import ProfileData from '../component/ProfileData';

function Profile() {
  // State hook to store the current user
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect hook to listen for changes in the user's authentication state
  useEffect(() => {
    // Use the onAuthStateChanged function to observe changes in the authentication state
    // When the user logs in or logs out, this function will be called with the updated user object
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If a user is logged in, update the currentUser state with the user object
        setCurrentUser(user);
        console.log(user);
      } else {
        // If no user is logged in, set the currentUser state to null
        setCurrentUser(null);
      }
    });

    // Clean up the subscription when the component unmounts to avoid memory leaks
    return () => unsubscribe();
  }, []);

  return (
    <>
      {/* Container for the main content */}
      <div className="container-fluid">
        {/* Row to display the sidebar and profile data */}
        <div className="row flex-nowrap">
          {/* Render the Sidebar component */}
          <Sidebar />
          
          {/* Render the ProfileData component if a user is logged in, otherwise render nothing */}
          {currentUser ? <ProfileData currentUser={currentUser} /> : null}
        </div>
      </div>
    </>
  );
}

export default Profile;
