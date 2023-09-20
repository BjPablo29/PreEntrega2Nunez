import React from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../async-mocks/mocks';
import { useState, useEffect } from 'react';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState ({})
  // Obtiene el parámetro de ruta ":id" para identificar el producto
  const { id } = useParams();
  useEffect (() => {
    getProducts ()
    .then(data => {
      setProduct(data.find((item) => item.id === Number(id)))
    })
  }, [id])

  // Busca el producto correspondiente en los mocks

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
};

export default ItemDetailContainer;
