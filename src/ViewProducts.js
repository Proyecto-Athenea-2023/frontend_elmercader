import React, { useState, useEffect } from 'react';
import {Container} from 'reactsrap';


const ViewProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8080/api/gadget/all')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProducts(data); // copy data(endpoint response) content into state.products
        })
        .catch((err) => {
          console.log(err.message);
          alert("Se ha tenido un problema obteniendo los productos. Intente de nuevo mas tarde.");
        });
    });

    const deleteProduct = async(productId) => {
      await fetch(`http://localhost:8080/api/gadget/{productId}`, {
        method: 'DELETE',
      })
      .then((response) => {
        if(response.status === 200){
          setProducts(
            products.filter((data) =>{
              return data.id !== productId;
            })
          );
        }
        else {
          alert("El producto no pudo ser eliminado. Intente de nuevo mas tarde.");
          return;
        }
      })
    };

    return (
        <Container>
          <table>
            <tr>
              <th>Producto</th>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Categoria</th>
              <th>Precio</th>
              <th>Disponibilidad</th>
              <th>Descripcion</th>
              <th>Actualizar</th>
              <th></th>
            </tr>
            <tr>
              {products.map((product) => {
                  let messageStock = ""
                  if(product.availability)
                    messageStock = <span>Cantidad disponible: {product.quantity}</span>;    
                  else
                    messageStock = <span>No hay disponibilidad</span>;

                  return(
                    <tr>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.brand}</td>
                      <td>{product.category}</td>
                      <td>{product.price}</td>
                      <td>{messageStock}</td>
                      <td><img src={product.photography} alt='Producto'/><br />{product.description}</td>
                      <td></td>
                      <td>
                        <div className="delete-btn" onClick={() => deleteProduct(product.id)}>
                          Borrar
                        </div>
                      </td>
                    </tr>
                  )
                }
              )}
            </tr>
          </table>
        </Container>
    );
};

export default ViewProducts;