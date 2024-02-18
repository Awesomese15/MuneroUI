// CreateOrder.js
import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const CreateOrder = () => {
const location = useLocation();
const selectedItems = sessionStorage.getItem('Orders').split(',')|| [];
console.log("selectedItems", selectedItems);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic for submitting the order form
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Form onSubmit={handleSubmit} className="w-75">
        <h2 className="text-center mb-4">Create Order</h2>

        <Row>
          <Col>
            <Form.Group controlId="customerName">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="text" placeholder="Enter customer name" required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="referenceNo">
              <Form.Label>Reference No</Form.Label>
              <Form.Control type="text" placeholder="Enter reference number" required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="contactNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter contact number" required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="smsMobileNumber">
              <Form.Label>SMS Mobile Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter SMS mobile number" required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="orderDate">
              <Form.Label>Order Date</Form.Label>
              <Form.Control type="date" required />
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
                  <Form.Control type="text" placeholder="Enter value" required />
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
