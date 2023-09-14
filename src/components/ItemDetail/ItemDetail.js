import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../async-mocks/mocks';


const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        const selectedProduct = data.find((product) => product.id === parseInt(id));
        setProduct(selectedProduct);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar el producto:', error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="item-detail">
      {loading ? (
        <p>Cargando producto...</p>
      ) : product ? (
        <>
          <h2>{product.name}</h2>
          <p>Precio: ${product.price}</p>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetail;

