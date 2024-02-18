// components/LoginForm.js
import React,  { useState }  from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../css/LoginForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService'

const LoginForm = () => {
  const navigate = useNavigate();

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Username:', formData.username);
      console.log('Password:', formData.password);
      
      // Add your authentication logic here
      let response =''; 

      console.log('response '+response);


      try {
        // const response = await axios.post('http://localhost:9090/munero/login', {
        //   username: formData.username,
        //   password: formData.password,
        // });

       await authService.login(formData.username,formData.password)
        .then((res)=>{
          response = res;
          console.log('Authentication successful:', response);
          sessionStorage.setItem('Authorization',response.data);

          if(res.status === 200){
            navigate('/items');
        }
        })
        


        // Handle successful authentication, e.g., redirect the user
      } catch (error) {
        console.error('Authentication failed:', error.message);

        // Handle authentication failure, e.g., display an error message
      }
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
