import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Navigate, Route, Link } from 'react-router-dom'
import { Home } from './Home/Home';
import { Profile } from './Profile/Profile';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card'
import { appStore } from '../store/appStore';

export const AfterLogin = React.memo(() => {

  let uid = localStorage.getItem('uid')
  const [selMenuIndex, setSelMenuIndex] = useState(0)
  /*
    //invoked when logout button is clicked
    const fnLogout = () => {
      //clearing the localStorage will remove the id, token, uid that will redirect it to login page.
      localStorage.clear()
    }
  */

  const handleClick = (eve) => {
    let index = eve.target.name
    if (index == 2) {
      localStorage.clear();
      appStore.dispatch({ type: 'AUTH', payload: false })
    }
    setSelMenuIndex(Number(index));
  };
  return (
    <div className='mb-5'>

      {/* 
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">KRTiles</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/login" onClick={fnLogout}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    */}
      <BrowserRouter>
        <Card className='text-end'>
          <b className='float-left loggedin-user'>{uid}</b>
          <Tabs value={selMenuIndex} onClick={handleClick}>
            <Link to='/home'><Tab name='0' label="Home" /></Link>
            <Link to='/profile'><Tab name='1' label="Profile" /></Link>
            <Link to='/login'><Tab name='2' label="Logout" /></Link>
          </Tabs>
        </Card>

        {/* For loading component/page based on the path */}

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
})
