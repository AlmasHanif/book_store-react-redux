import React, { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addBook } from "../store/action";

const AddBook = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sucsess");
    const result = { title, price };
    dispatch(addBook(result));

  };

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col className="mx-auto" md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Book Title</Form.Label>
                <Form.Control
                  onChange={(e) => settitle(e.target.value)}
                  type="text"
                  placeholder="Enter the Title"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={(e) => setprice(e.target.value)}
                  type="text"
                  placeholder="Price"
                  required
                />
              </Form.Group>
              <Button variant="secondary" type="submit">
                Add Book
              </Button>

              <Link to={`/`}> <Button className="m-2" variant="secondary" type="submit">
                Back to Home
              </Button>
              </Link>
            </Form>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddBook;
