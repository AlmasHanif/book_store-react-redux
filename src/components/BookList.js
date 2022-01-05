import React from "react";
import { Container } from "react-bootstrap";
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from 'react-redux'

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <Container className="mt-5">
      <Row>
        {books && books.map((item) => (
          <Col className="mt-5">
            <Card border="light" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Title>{item.price}</Card.Title>
                <Card.Text>
                <img alt="img" src={`/images/${item.image}`}/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
    </div>
  );
};

export default BookList;
