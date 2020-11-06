import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Navbar, Nav, Button, NavDropdown, Form } from 'react-bootstrap'

const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }

export default function NavBar({ action = '/teste'}){
    const router = useRouter()
    const [query, setQuery] = useState('')

    const handleParam = setValue => e => setValue(e.target.value)

    const handleSubmit = preventDefault(() => {
        router.push({
        pathname: action,
        query: {q: query},
        })
    })

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline onSubmit={handleSubmit}>
                        <Form.Control type='text'
                        name='q'
                        value={query}
                        onChange={handleParam(setQuery)}
                        aria-label='Search' 
                        placeholder="Search" 
                        className="mr-sm-2" />

                        <Button variant="outline-success" type="submit">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}