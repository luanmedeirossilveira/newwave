import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Form, Button, Image } from 'react-bootstrap'

const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }

export default function Login({action = '/dashboard'}){
    //Controle de rota
    const router = useRouter()
    //busca o query para entrar ao clicar no botão
    const [query, setQuery] = useState('')

    //Lida com o parâmtro através do seu valor
    const handleParam = setValue => e => setValue(e.target.value)

    //Busca o query para ir ao página que está a procura
    const handleSubmit = preventDefault(() => {
        router.push({
          pathname: action,
          query: {q: query},
        })
      })

    return (
        <Form className="text-center" style={{ width: "25rem" }} onSubmit={handleSubmit}>
            <Image src="/logo.png" style={{margin: "1rem"}}></Image>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Senha" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Lembrar senha" />
            </Form.Group>

            <Button variant="dark" type="submit">
                Entrar
            </Button>
      </Form>
    )
}