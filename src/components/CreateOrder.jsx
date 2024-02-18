// CreateOrder.js
import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Order from '../domain/Order';
import ListItem from '../domain/ListItem';
import orderService from '../services/orderService';


const CreateOrder = () => {
const location = useLocation();
const selectedItems = sessionStorage.getItem('Orders').split(',')|| [];
console.log("selectedItems", selectedItems);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your logic for submitting the order form
    const formData = new FormData(e.target);
    const orderInstance = new Order(
        formData.get('customerName'),
        formData.get('firstName'),
        formData.get('lastName'),
        formData.get('referenceNo'),
        formData.get('deliveryChannel'),
        formData.get('contactNumber'),
        formData.get('smsMobileNumber'),
        formData.get('emailAddress'),
        null, 
        'AE',
        'EN',
        formData.get('orderDate'),
        selectedItems.map((itemId) => new ListItem(itemId, formData.get(`value_${itemId}`)))
      );

      console.log('Order Data:', orderInstance);
      const response = await orderService.placeOrder(orderInstance).then(
        (res)=>{
            console.log('res', res);
        }

      )


  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Form onSubmit={handleSubmit} className="w-75">
        <h2 className="text-center mb-4">Create Order</h2>

        <Row>
          <Col>
            <Form.Group controlId="customerName">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="text" placeholder="Enter customer name" name='customerName' required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" name='firstName' required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" name='lastName' required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="referenceNo">
              <Form.Label>Reference No</Form.Label>
              <Form.Control type="text" placeholder="Enter reference number" name='referenceNo' required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="contactNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter contact number" name='contactNumber' required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="smsMobileNumber">
              <Form.Label>SMS Mobile Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter SMS mobile number" name='smsMobileNumber' required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
          
            <Form.Group controlId="emailAddress">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="text" placeholder="Enter Email Address" name='emailAddress' required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="orderDate">
              <Form.Label>Order Date</Form.Label>
              <Form.Control type="date" name='orderDate' required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="deliveryChannel">
              <Form.Label>Delivery Channel</Form.Label>
              <Form.Control type="text" placeholder="Delivery Channel" name='deliveryChannel' required />
            </Form.Group>
          </Col>
        </Row>

        <h4 className="mt-4">Line Items</h4>
        {selectedItems.map((itemId) => (
          <div key={itemId}>
            <Row>
              <Col>
                <Form.Group controlId={`cardItemId_${itemId}`}>
                  <Form.Label>Card Item ID (Read-only)</Form.Label>
                  <Form.Control type="text" value={itemId} readOnly />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId={`value_${itemId}`}>
                  <Form.Label>Value</Form.Label>
                  <Form.Control type="text" placeholder="Enter value" name={`value_${itemId}`} required />
                </Form.Group>
              </Col>
            </Row>
          </div>
        ))}

        <Button type="submit" className="mt-4">Submit Order</Button>
      </Form>
    </Container>
  );
};

export default CreateOrder;
