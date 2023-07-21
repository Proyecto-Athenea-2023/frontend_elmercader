import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Form} from 'reactstrap';

const Register = () => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [identification, setIdentification] = useState('');
    const [monthBirthtDay, setMonthBirthtDay] = useState('');
    const [birthtDay, setBirthtDay] = useState('');
    const [address, setAddress] = useState('');
    const [cellPhone, setCellPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [zone, setZone] = useState('');
    const [type, setType] = useState('');

    const register = async(id, identification, birthtDay, monthBirthtDay, address, cellPhone, email, password, zone, type) => {
        await fetch('http://localhost:8080/api/user/new', {
            method: 'POST',
            body: JSON.stringify({
                "id": id,
                "identification": identification,
                "name": name,
                "birthtDay": birthtDay,
                "monthBirthtDay": monthBirthtDay,
                "address": address,
                "cellPhone": cellPhone,
                "email": email,
                "password": password,
                "zone": zone,
                "type": type,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }
        .then((response) => response.json )
        .then((data) => {
            
        })
        .catch((err) => {
            console.log(err.message);
        })
    )}


    const handleSubmit = (e) => {
        e.preventDefault();
        register(id, identification, birthtDay, monthBirthtDay, address, cellPhone, email, password, zone, type);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <label>ID de empleado</label>
                </Col>
                <Col>
                    <input type="number" id="txtId" value="id" onChange={(e) => setId(e.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>N&uacute;mero de Identificaci&oacute;n</label>
                </Col>
                <Col>
                    <input type="text" id="txtIdentification" value="{identification}" onChange={(e) => setIdentification(e.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>Nombre</label>
                </Col>
                <Col>
                    <input type="text" id="txtName" value={name} onChange={(e) => setName(e.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>Direcci&oacute;n de Residencia</label>
                </Col>
                <Col>
                    <input type="text" id="txtAddress" value={address} onChange={(e) => setAddress(e.target.value)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>N&uacute;mero(s) de Celular</label>
                </Col>
                <Col>
                    <input type="text" id="txtCellPhone" value={cellPhone} onChange={(e) => setCellPhone(e.target.value)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>Zona</label>
                </Col>
                <Col>
                    <input type="text" id="txtZone" value={zone} onChange={(e) => setZone(e.target.value)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>Tipo de Usuario</label>
                </Col>
                <Col>
                    <select id="cbxType" value={type} onChange={(e) => setType(e.target.value)} >
                        <option value="COORD">COORD - Coordinador de Zona</option>
                        <option value="ASE">ASE - Asesor Comercial</option>
                    </select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>Email</label>
                </Col>
                <Col>
                    <input type="email" id="txtEmail" value={email}  onChange={(e) => setEmail(e.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>Contrase&ntilde;a</label>
                </Col>
                <Col>
                    <input type="password" value="" id="txtPassword" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <span className="form-message"><br />La contrase&ntilde;a debe tener m&iacute;nimo 6 caracteres.<br /></span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>Confirma tu Contrase&ntilde;a</label>
                </Col>
                <Col>
                    <input type="password" value="" id="txtConfirmedPassword" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <button type="sunmit" className="button-form" id="btnLogin">Crear</button>
                </Col>
            </Row>
            </Form>
        </Container>
    );
};

export default Register;