/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
// import { Link } from 'react-router-dom'
import '../App.css'
import { Button, Container, InputGroup } from 'react-bootstrap';
const Home = () => {
    const [state, setstate] = useState()
    useEffect(() => {
        const fetchData = () => {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q${state}=search+terms`)
                .then(res => res.json)
                .then(result => {
                    setstate(result)
                    console.log(result)
                })
                .catch(err => console.log(err))
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleSearch = () => {
        console.log("search")

    }
    return (
        <div className=''>
            <Container fluid>
            <InputGroup size='lg' className='mx-auto'>
                    <input
                        placeholder='Book Search'
                        value={state}
                        onChange={e => setstate(e.target.value)}
                    />
                    <Button color='secondary' onClick={handleSearch}>
                        serach
                    </Button>
                </InputGroup>
                <img src="https://media.istockphoto.com/photos/books-on-display-in-the-corner-of-a-second-hand-bookstore-picture-id1129874863" class="img-fluid" alt="img" />
               
            </Container>
            home

        </div>
    )
}

export default Home
