import React, { useState, useEffect } from 'react';
import {Container} from 'reactsrap';


const ViewOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8080/api/order/all')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setOrders(data);
        })
        .catch((err) => {
          console.log(err.message);
          alert("Se ha tenido un problema obteniendo las ordenes. Intente de nuevo mas tarde.");
        })
    });
    // TODO 1. modal for details 2. format date

    return (
        <Container>
          <table>
            <tr>
              <th>Asesor Comercial</th>
              <th>ID Pedido</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Detalle</th>
              <th>Actualizar</th>
            </tr>
            {orders.map((order) => {
                return (
                  <tr>
                    <td>{order.salesMan.name}<br /><i>{order.salesMan.email}</i></td>
                    <td>{order.id}</td>
                    <td>{order.registerDay}</td>
                    <td>{order.status}</td>
                    <td>Ver detalle</td>
                    <td></td>
                  </tr>
                );
              })
            }
          </table>
        </Container>
    );
};

export default ViewOrders;