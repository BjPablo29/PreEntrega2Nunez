import React, { useEffect, useState } from 'react';
import { getProducts } from '../../async-mocks/mocks';
import { Link, useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {categoryId}=useParams()

  useEffect(() => {
    getProducts()
      .then((data) => {
        const items= categoryId ? data.filter(e=>e.category===categoryId): data;
        setProducts(items);
      })
      .catch((error) => {
        console.error('Error al cargar los productos:', error);
      });
  }, [categoryId]);

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
              <Link to={'/item/${product.id}'}>Ver Detalles</Link>
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

