import React, { Fragment, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  // Crear listado de productos
  // hacemos array destructuring
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Camisa REACT', precio: 50 },
    { id: 2, nombre: 'Camisa Vue', precio: 60 },
    { id: 3, nombre: 'Camisa Angular', precio: 25 },
    { id: 4, nombre: 'Camisa Laravel', precio: 90 },
  ]);

  // State para un carrito de compras
  const [carrito, setCarrito] = useState([]);

  // Obtener fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        titulo='Tienda Virtual'
      />

      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={productos}
          setCarrito={setCarrito}
        />
      ))}
      <Carrito
        carrito={carrito}
        setCarrito={setCarrito}
      />
      <Footer
        fecha={fecha}
      />
    </Fragment>
  )
}

export default App;
