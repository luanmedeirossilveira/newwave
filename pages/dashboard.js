import React, { useState } from 'react'
import { Nav, Button, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Teste(){
    const [show, setShow] = useState(false)
    const logado = true
    return (
        <>
            { logado &&
                <div>
                    {show && 
                    <Nav
                        defaultActiveKey="/" 
                        className="flex-column" 
                        style={{position: "fixed", float: "left", marginTop: "2rem", borderRight: "1px solid gray", padding: "2rem", maxHeight: "100%",
                                background: "white"}}>
                        <Button onClick={() => setShow(false)} style={{background: "transparent", color: "black"}}>X</Button>
                        <Nav.Link href="#matematica">Matemática</Nav.Link>
                        <Nav.Link href="#ciencias-da-natureza">Ciências da Natureza</Nav.Link>
                        <Nav.Link href="#ciencias-humanas">Ciências Humanas</Nav.Link>
                        <Nav.Link href="#linguagens">Linguagens</Nav.Link>
                    </Nav>
                    }{!show &&
                        <Button onClick={() => setShow(true)} style={{position: "fixed", float: "left", background: "transparent", color: "black"}}>X</Button>
                    }
                    
                    <div>
                        <div id="matematica" className="block">
                            Matemática<br></br>
                            {['1', '2', '3', '4', '5','6'].map((module) => (
                                <DropdownButton
                                    as={ButtonGroup}
                                    drop={'right'}
                                    variant="light"
                                    title={` Módulo ${module} `}
                                >
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton>
                            ))}
                        </div>
                        <div id="ciencias-da-natureza" className="block">
                            Ciências da Natureza<br></br>
                            {['1', '2', '3', '4', '5','6'].map((module) => (
                                <DropdownButton
                                    as={ButtonGroup}
                                    drop={'right'}
                                    variant="light"
                                    title={` Módulo ${module} `}
                                >
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton>
                            ))}
                        </div>
                        <div id="ciencias-humanas" className="block">
                            Ciências Humanas<br></br>
                            {['1', '2', '3', '4', '5','6'].map((module) => (
                                <DropdownButton
                                    as={ButtonGroup}
                                    drop={'right'}
                                    variant="light"
                                    title={` Módulo ${module} `}
                                >
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton>
                            ))}
                        </div>
                        <div id="linguagens" className="block">
                            Linguagens<br></br>
                            {['1', '2', '3', '4', '5','6'].map((module) => (
                                <DropdownButton
                                    as={ButtonGroup}
                                    key={module}
                                    drop={'right'}
                                    variant="light"
                                    title={` Módulo ${module} `}
                                >
                                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                </DropdownButton>
                            ))}
                        </div>
                    </div>
                </div>

            }{!logado &&

                <div className="text-center">
                    <h1>Você não está cadastrado!</h1>
                </div>

            }
        </>
    )
}