import React, { useEffect, useState } from 'react';
import { getProducts } from '../../async-mocks/mocks';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error al cargar los productos:', error);
      });
  }, []);

  return (
    <div className="item-list-container">
      <h2>Lista de Productos</h2>
      {Array.isArray(products) ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Precio: ${product.price}</p>
              <img src={product.image} alt={product.name} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No se han encontrado productos.</p>
      )}
    </div>
  );
};

export default ItemListContainer;

