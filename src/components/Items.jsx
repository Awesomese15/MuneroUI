// src/components/ItemsPage.js
import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from the API when the component mounts
    const fetchItems = async () => {
      try {
        const response = await fetch('localhost:9090/munero/items'); // Replace with the actual API endpoint
        const data = await response.json();
        setItems(data.items);
      } catch (error) {
        console.error('Error fetching items:', error.message);
      }
    };

    fetchItems();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <Container>
      <h2 className="mt-4 mb-4">Items</h2>
      <Row>
        {items.map((item) => (
          <Col key={item.id} xs={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.cardFaceImage} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.usageInstructions}</Card.Text>
                {/* Add more item details as needed */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Items;
