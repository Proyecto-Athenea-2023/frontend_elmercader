import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Form} from 'reactsrap';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const validateLogin = async(email, password) => {
        await fetch(`http://localhost:8080/api/user/{email}/{password}`, {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('userid', data.id);
                setEmail('');
                setPassword('');
            })
            .catch((err) => {
                console.log(err.message);
            })
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        validateLogin(email, password);
    };


    return (
        
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <label>Email</label>
                    </Col>
                    <Col>
                        <input type="email" id="txtEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Contrase&ntilde;a</label>
                    </Col>
                    <Col>
                        <input type="password" id="txtPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button className="button-form" id="btnLogin" type='submit'>Ingresar</button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default Login;