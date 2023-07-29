import React from 'react';
import { Card } from 'react-bootstrap';

function ProfileData({ currentUser }) {
  if (currentUser) {
    const { photoURL, displayName, email, uid, phoneNumber } = currentUser;

    return (
      <Card className="profile-card">
        <Card.Body>
          {displayName && <Card.Title>{displayName}</Card.Title>}
          {email && <Card.Text>{email}</Card.Text>}
          {uid && <Card.Text>User ID: {uid}</Card.Text>}
          {phoneNumber && <Card.Text>User ID: {phoneNumber}</Card.Text>}
         
        </Card.Body>
      </Card>
    );
  }

  return <p>Please log in to view your profile.</p>;
}

export default ProfileData;
