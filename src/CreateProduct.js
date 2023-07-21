import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Form} from 'reactstrap';


const CreateProduct = () => {


    return (
      <Container>
        <Row>
          <Col>
            <label>Id del Producto</label>  
          </Col>
          <Col>
            <input type="number" id="txtId" value="" />
          </Col>
        </Row> 
        <Row>
          <Col>
            <label>Marca</label>
          </Col>
          <Col>
            <input type="text" id="txtBrand" value="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Categoria</label>
          </Col>
          <Col>
            <input type="text" id="txtCategory" value="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Nombre</label>
          </Col>
          <Col>
            <input type="text" id="txtName" value="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Precio</label>
          </Col>
          <Col>
            <input type="number" id="txtPrecio" value="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Disponibilidad</label>
          </Col>
          <Col>
            <select id="cbxAvailability">
              <option value="true">Si</option>
              <option value="false">No</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Cantidad</label>
          </Col>
          <Col>
            <input type="number" id="txtQuantity" value="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Descripci&oacute;n</label>
          </Col>
          <Col>
            <textarea id="txtDescription" rows="3"></textarea>
          </Col>
        </Row>
        <Row>
          <Col>
            <label>Fotograf&iacute;a</label>
          </Col>
          <Col>
            <input type="text" id="txtPhotography" value="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <button id="btnCreate" onclick="">Crear Producto</button>
          </Col>
        </Row>
      </Container>
    );
};

export default CreateProduct;