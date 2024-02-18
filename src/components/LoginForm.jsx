// components/LoginForm.js
import React,  { useState }  from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import '../css/LoginForm.css';

const LoginForm = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { username: '', password: '' };

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Username:', formData.username);
      console.log('Password:', formData.password);
      // Add your authentication logic here
    }
  };
  return (

    
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <div className="login-form-container p-4 rounded">
        <h2 className="text-center mb-4">Login</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" 
            placeholder="Enter your username" 
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            isInvalid={!!errors.username}/>
            <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" 
            placeholder="Enter your password" 
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            isInvalid={!!errors.password}/>
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mt-3">
            Login
          </Button>
        </Form>
      </div>
    </Container>

    
  );
};

export default LoginForm;
