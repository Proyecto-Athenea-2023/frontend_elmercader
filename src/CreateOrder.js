import React, { useState, useEffect } from 'react';

const CreateOrder = () => {

    return (
        <div>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Marca</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Eliminar</th>
        </tr>
        <tr>
          <td>
            <select>
                <option value="id1">Nombre 1</option>
                <option value="id2">Nombre 2</option>
            </select>
          </td>
          <td></td>
          <td></td>
          <td><input type="number" /></td>
          <td></td>
        </tr>
      </table>
      <button>Agregar Producto</button>
      <button>Enviar Pedido</button>
    </div>
    );
};

export default CreateOrder;
