import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'reactsrap';


const ViewProfile = () => {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
      let userId = localStorage.getItem('user_id');
      fetch(`http://localhost:8080/api/user/{userId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProfile(data);
        })
        .catch((err) => {
          alert("HUbo un problema trayendo la informacion del usuario.")
          console.log(err.message);
        });
    });

    return (
        <Container>
          <Row>
            <Col>Nombre: {profile.name}</Col>
            <Col>Telefono: {profile.phone}</Col>
            <Col>Zona: {profile.zone}</Col>
          </Row>
          <Row>
            <Col>Email: {profile.email}</Col>
            <Col>Direccion: {profile.address}</Col>
          </Row>
        </Container>
    );
}

export default ViewProfile;