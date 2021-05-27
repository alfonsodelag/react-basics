import React from 'react'

function Producto({ producto, productos, carrito, setCarrito }) {

    const { nombre, precio, id } = producto;
    console.log("carrito from Producto.js", carrito);

    // Agregar un producto al carrito
    const seleccionarProducto = (id) => {
        const producto = productos.filter(producto => producto.id === id)[0];
        setCarrito([
            ...carrito,
            producto
        ]);
    }

    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);
        setCarrito(productos)
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <h2>${precio}</h2>
            {/* Si Hay productos, muestra el botón de comprar, sino elimina el producto */}
            {productos
                ?
                (
                    <button
                        type="button"
                        onClick={() => seleccionarProducto(id)}
                    >Comprar</button>
                )
                :

                (
                    <button
                        onClick={() => eliminarProducto(id)}
                        type="button">Eliminar</button>
                )

            }
        </div>
    );
}

export default Producto
