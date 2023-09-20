const products = [
    {
      id: 1,
      name: 'Alisado Biomolecular',
      price: 1100,
      category: 'Productos con Formol',
      image: '/img/alisado-biomolecular.png',
      description: 'Descripcion del Alisado Biomolecular.',
    },
    {
      id: 2,
      name: 'Alisado con Botox',
      price: 1200,
      category: 'Productos con Formol',
      image: '/img/alisado-botox.png',
      description: 'Descripcion del Alisado con Botox.',
    },
    {
      id: 3,
      name: 'Alisado Cereza',
      price: 1300,
      category: 'Productos con Formol',
      image: '/img/alisado-cereza.png',
      description: 'Descripcion del Alisado Cereza.',
    },
    {
      id: 4,
      name: 'Nanoplastia',
      price: 1400,
      category: 'Productos sin Formol',
      image: '/img/nanoplastia.png',
      description: 'Descripción de la Nanoplastia.',
    },
    {
      id: 5,
      name: 'Nutrición Multivitaminica',
      price: 1500,
      category: 'Productos sin Formol',
      image: '/img/nutricion-multi.png',
      description: 'Descripcion de la Nutricion Multivitaminica.',
    },
  ];
  
  export const getProducts = () => {
    // Simula una llamada asincrónica a la API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000); // Simula un retraso de 1 segundo
    });
  };
  