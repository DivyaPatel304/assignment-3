import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);

  const generatePassword = () => {
    // Define character sets
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_-+=[]{}|;:,.<>?';

    let chars = lowercaseChars;
    if (includeUppercase) chars += uppercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <>
    
    <div className='sidebar'>
        <Sidebar />
    </div>
    <div className='main-container'>
    <Container>
        <h1>Password Generator</h1>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Form>
            <Form.Group controlId="passwordLength">
              <Form.Label>Password Length</Form.Label>
              <Form.Control
                type="number"
                value={passwordLength}
                onChange={(e) => setPasswordLength(parseInt(e.target.value))}
              />
            </Form.Group>

            <Form.Group controlId="includeNumbers">
              <Form.Check
                type="checkbox"
                label="Include Numbers"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
              />
            </Form.Group>

            <Form.Group controlId="includeSymbols">
              <Form.Check
                type="checkbox"
                label="Include Symbols"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
              />
            </Form.Group>

            <Form.Group controlId="includeUppercase">
              <Form.Check
                type="checkbox"
                label="Include Uppercase"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
              />
            </Form.Group>

            <Button variant="primary" onClick={generatePassword}>
              Generate Password
            </Button>

            <Form.Group controlId="generatedPassword" className="mt-3">
              <Form.Label>Generated Password</Form.Label>
              <Form.Control type="text" value={password} readOnly />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  
    </>
  );
};

export default PasswordGenerator;
