import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Alert, Tab, Tabs } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import "./Auth.css"
import { auth } from '../config/Firebase';

const Auth = () => {
  // State hooks to manage form inputs and display error/success messages
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');
  const [user, setUser] = useState(null);

  // React Router's hook to handle navigation
  const navigate = useNavigate();

  // Function to handle user login
  const handleLogin = async () => {
    try {
      const auth = getAuth();
      // Sign in the user with the provided email and password
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setLoginSuccess('Successfully logged in!');
      setError('');
      const currentUser = auth.currentUser;

      setUser(currentUser); 
      console.log(user)
      // Redirect to dashboard after successful login
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
      setLoginSuccess('');
    }
  };

  // Function to handle user registration
  const handleRegister = async () => {
    try {
      const auth = getAuth();
      // Create a new user with the provided email and password
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);

      // Update the user's profile with the provided name
      await updateProfile(userCredential.user, { displayName: registerName });

      setRegisterSuccess('Successfully registered!');
      setError('');
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
      setRegisterSuccess('');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Login/Register</h2>
        {/* Tabs for Login and Register sections */}
        <Tabs defaultActiveKey="login" id="auth-tabs">
          {/* Login Tab */}
          <Tab eventKey="login" title="Login">
            <Form>
              <Form.Group controlId="loginEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={(e) => setLoginEmail(e.target.value)} required />
              </Form.Group>
              <Form.Group controlId="loginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={(e) => setLoginPassword(e.target.value)} required />
              </Form.Group>
              <Button className="w-100 mt-3" type="button" onClick={handleLogin}>
                Login
              </Button>
              {/* Display error and success messages */}
              {error && <Alert variant="danger">{error}</Alert>}
              {loginSuccess && <Alert variant="success">{loginSuccess}</Alert>}
            </Form>
          </Tab>
          {/* Register Tab */}
          <Tab eventKey="register" title="Register">
            <Form>
              <Form.Group controlId="registerName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={(e) => setRegisterName(e.target.value)} required />
              </Form.Group>
              <Form.Group controlId="registerEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={(e) => setRegisterEmail(e.target.value)} required />
              </Form.Group>
              <Form.Group controlId="registerPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={(e) => setRegisterPassword(e.target.value)} required />
              </Form.Group>
              <Button className="w-100 mt-3" type="button" variant="secondary" onClick={handleRegister}>
                Register
              </Button>
              {/* Display error and success messages */}
              {error && <Alert variant="danger">{error}</Alert>}
              {registerSuccess && <Alert variant="success">{registerSuccess}</Alert>}
            </Form>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default Auth;
