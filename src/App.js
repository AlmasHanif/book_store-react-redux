import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import React from 'react'
import { Container, Nav, Navbar} from "react-bootstrap";
// import ReactDOM from 'react-dom'
const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">My Book Store</Navbar.Brand>
            <Nav className="mx-auto">
              <Nav  className="m-2 fs-5">Home</Nav>
              <Link to={`/add`}><Nav className="m-2 fs-5 text-decoration-none">Add</Nav></Link>
              <Link to={`/list`}><Nav className="m-2 fs-5 text-decoration-none">List</Nav></Link>
              
            </Nav>
          </Container>
        </Navbar>
        {/* <Navbar>
          <NavbarBrand className="text-light fs-3">My Book Store</NavbarBrand>
          <Link to={`/add`}>Add</Link>
          <Link to={`/list`}>List</Link>
        </Navbar> */}
      </div>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/list" element={<BookList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
