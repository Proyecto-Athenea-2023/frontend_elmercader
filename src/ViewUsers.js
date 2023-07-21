import React, { useState, useEffect } from 'react';
import {Container} from 'reactsrap';


const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/user/all')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => {
        console.log(err.message);
        alert("Se ha tenido un problema obteniendo los usuarios. Intente de nuevo mas tarde.");
      });
  });

  const deleteUser = async(userId) => {
    fetch(`http://localhost:8080/api/user/{userId}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if(response.status === 200){
        setUsers(
          users.filter((user) => {
            return user.id !== userId;
          })
        )
      }
      else{
        alert("No se pudo eliminar el usuario. Intente de nuevo mas tarde.")
        return;
      }
    });
  };

  return (
    <Container>
      <table>
        <tr>
          <th>ID de Usuario</th>
          <th>Identificacion</th>
          <th>Nombre</th>
          <th>Fecha de Nacimiento</th>
          <th>Mes de Cumpleanios</th>
          <th>Direccion</th>
          <th>Telefono</th>
          <th>Email</th>
          <th>Zona</th>
          <th>Tipo de Usuario</th>
          <th>Actualizar</th>
          <th>Eliminar</th>
        </tr>
          {users.map((user) => {
            return(
              <tr>
                <td>{user.id}</td>
                <td>{user.identification}</td>
                <td>{user.name}</td>
                <td>{user.birthtDay}</td>
                <td>{user.monthBirthtDay}</td>
                <td>{user.address}</td>
                <td>{user.cellPhone}</td>
                <td>{user.email}</td>
                <td>{user.zone}</td>
                <td>{user.type}</td>
                <td></td>
                <td>
                  <div className="delete-btn" onClick={() => deleteUser(user.id)}>
                    Borrar
                  </div>
                </td>
              </tr>
            );
          })
        }
      </table>
    </Container>
  );
};

export default ViewUsers;