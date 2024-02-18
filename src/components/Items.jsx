import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';

const Items = () => {
  var [items, setItems] = useState([]);
  const [queryParams, setQueryParams] = useState({
    current: 1,
    lang: 'EN',
    rowCount: 100,
    includePricingDetails: false,
    searchPhrase: '',
  });

  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    try {
      const token ='Bearer '+sessionStorage.getItem('Authorization');

      const queryString = new URLSearchParams(queryParams).toString();
      const apiUrl = `http://localhost:9090/munero/items?${queryString}`;

      const response = await fetch(apiUrl, {
        headers: {
          Authorization: token,
        },
      });

      const data = await response.json();
      setItems(data || []);
      console.log(data);
    } catch (error) {
      console.error('Error fetching items:', error.message);
    }finally{
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [queryParams]);

  const handleInputChange = (name, value) => {
    setQueryParams((prevParams) => ({ ...prevParams, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchItems();
  };

  return (
    <Container>
    <h2 className="mt-4 mb-4">Items</h2>
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row>
        <Col xs={12} md={6} lg={2} className="mb-4">
          <Form.Group controlId="current">
            <Form.Label>Current</Form.Label>
            <Form.Control
              type="number"
              value={queryParams.current}
              onChange={(e) => handleInputChange('current', e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={2} className="mb-4">
          <Form.Group controlId="lang">
            <Form.Label>Language</Form.Label>
            <Form.Control
              type="text"
              value={queryParams.lang}
              onChange={(e) => handleInputChange('lang', e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={2} className="mb-4">
          <Form.Group controlId="rowCount">
            <Form.Label>Row Count</Form.Label>
            <Form.Control
              type="number"
              value={queryParams.rowCount}
              onChange={(e) => handleInputChange('rowCount', e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={2} className="mb-4">
          <Form.Group controlId="includePricingDetails">
            <Form.Label>Include Pricing Details</Form.Label>
            <Form.Control
              as="select"
              value={queryParams.includePricingDetails}
              onChange={(e) => handleInputChange('includePricingDetails', e.target.value === 'true')}
            >
              <option value={true}>True</option>
              <option value={false}>False</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Form.Group controlId="searchPhrase">
            <Form.Label>Search Phrase</Form.Label>
            <Form.Control
              type="text"
              value={queryParams.searchPhrase}
              onChange={(e) => handleInputChange('searchPhrase', e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} className='d-flex align-items-center justify-content-center'>
          <Button type="submit">Apply Filters</Button>
        </Col>
      </Row>
    </Form>
    {loading ? (
        <p>Loading...</p>
      ) : items && items.length > 0 ? (
        <Row>
          {items.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={item.cardFaceImage} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  {queryParams.includePricingDetails && (
                    <Card.Text>Price: {item.fromValue} {item.currency} - {item.toValue} {item.currency}  </Card.Text>
                  )}
                 <Button type="submit">Order</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No items found.</p>
      )}
  </Container>
  );
};

export default Items;
