import React from 'react'
import { Nav } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Teste(){
    const logado = true
    return (
        <>
            { logado &&
                <div>
                    <Nav 
                        defaultActiveKey="/" 
                        className="flex-column" 
                        style={{float: "left", marginTop: "2rem", borderRight: "1px solid gray", padding: "2rem", maxHeight: "100%"}}>
                        <Nav.Link href="#matematica">Matemática</Nav.Link>
                        <Nav.Link href="#ciencias-da-natureza">Ciências da Natureza</Nav.Link>
                        <Nav.Link href="#ciencias-humanas">Ciências Humanas</Nav.Link>
                        <Nav.Link href="#linguagens">Linguagens</Nav.Link>
                    </Nav>

                    <div id="matematica" className={styles.container} style={{backgroundColor: "red"}}>bloco 1</div>
                    <div id="ciencias-da-natureza" className={styles.container} style={{backgroundColor: "green"}}>bloco 2</div>
                    <div id="ciencias-humanas" className={styles.container} style={{backgroundColor: "blue"}}>bloco 3</div>
                    <div id="linguagens" className={styles.container} style={{backgroundColor: "yellow"}}>bloco 4</div>
                    
                </div>

            }{!logado &&

                <div className="text-center">
                    <h1>Você não está cadastrado!</h1>
                </div>

            }
        </>
    )
}