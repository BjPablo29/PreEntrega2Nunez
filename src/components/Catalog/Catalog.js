import React from 'react';
import { Link } from 'react-router-dom';

const Catalog = () => {
  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <ul>
        <li>
          <Link to="/item/1">Alisado Biomolecular</Link>
        </li>
        <li>
          <Link to="/item/2">Alisado con Bótox</Link>
        </li>
        <li>
          <Link to="/item/3">Alisado Cereza</Link>
        </li>
        <li>
          <Link to="/item/4">Nanoplastía</Link>
        </li>
        <li>
          <Link to="/item/5">Nutrición Multivitamínica</Link>
        </li>
      </ul>
    </div>
  );
};

export default Catalog;

