import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Navbar, Nav, Button, NavDropdown, Form, Image } from 'react-bootstrap'

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
            <Navbar expand="lg">
                <Navbar.Brand href="#home">
                    <Image src="/logo.png" style={{width: "50%"}}></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{margin: "auto!important"}}>
                        <Nav.Link className="navbar-link" href="/dashboard">Início</Nav.Link>
                        <Nav.Link className="navbar-link" href="/aulas-ao-vivo">Aulas Ao Vivo</Nav.Link>
                        <NavDropdown className="navbar-link" title="Materias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/matematica">Matemática</NavDropdown.Item>
                            <NavDropdown.Item href="/ciencias-humanas">Ciências Humanas</NavDropdown.Item>
                            <NavDropdown.Item href="/ciencias-da-natureza">Ciências da Natureza</NavDropdown.Item>
                            <NavDropdown.Item href="/linguagens">Linguagens</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/ingles">Inglês</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className="navbar-link" title="Perfil" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/perfil/[id].js">Perfil</NavDropdown.Item>
                            <NavDropdown.Item href="/materias-salvas/[id].js">Matérias Salvas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Minhas Anotações</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* <Form inline onSubmit={handleSubmit}>
                        <Form.Control 
                            type='text'
                            name='q'
                            value={query}
                            onChange={handleParam(setQuery)}
                            aria-label='Search' 
                            placeholder="Search" 
                            className="mr-0" />

                        <Button className="button-search" type="submit">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}