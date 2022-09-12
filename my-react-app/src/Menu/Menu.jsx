import "./Menu.css";
import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../Home';
import { About } from '../About';
import { Contact } from '../Contact';

function template() {
  return (
    <div className="menu">
      <Navbar variant="dark">
        <Container>
          <Nav className="">
            <Nav.Link href="#/home">Home</Nav.Link>
            <Nav.Link href="#/about">About</Nav.Link>
            <Nav.Link href="#/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <HashRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default template;
