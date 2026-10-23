
// ==========================================================================
// PLANTILLA - ESTA PARTE DEL CÓDIGO NO DEBES TOCARLA
// ==========================================================================



let carrito = [];

// 1. Función principal: Captura los datos del HTML y actualiza la lista del carrito
function anadirAlCarrito(idProducto) {
    const tarjeta = document.getElementById(idProducto);

    // Obtener datos del producto seleccionado en el HTML
    const nombre = tarjeta.querySelector('.producto-titulo').textContent;
    const precioTexto = tarjeta.querySelector('.producto-precio').textContent;
    const precio = parseFloat(precioTexto.replace(' €', ''));
    const cantidad = parseInt(tarjeta.querySelector('.producto-cantidad').value);

    // Comprobar si el producto ya existe en la lista para actualizarlo o añadirlo
    const indexExistente = carrito.findIndex(item => item.nombre === nombre);
    if (indexExistente !== -1) {
        carrito[indexExistente].cantidad = cantidad;
    } else {
        carrito.push({ nombre: nombre, precio: precio, cantidad: cantidad });
    }

    // Limpiar mensaje de compra anterior si existía
    document.getElementById('mensaje-compra').textContent = '';

    // Llamar a las funciones separadas para mostrar la lista y calcular costes
    mostrarListaCesta();
    calcularTotales();
}

// Función separada: Muestra la lista de productos en el HTML de la cesta
function mostrarListaCesta() {
    const contenedorLista = document.getElementById('lista-cesta');
    contenedorLista.innerHTML = ''; // Limpiar lista visual anterior

    // Recorrer la lista para pintar cada producto
    carrito.forEach(item => {
        const totalItem = item.precio * item.cantidad;
        const elemento = document.createElement('p');
        elemento.textContent = `${item.nombre} (x${item.cantidad}) - ${totalItem.toFixed(2)} €`;
        contenedorLista.appendChild(elemento);
    });
}

// Función para finalizar la compra y resetear el estado
function finalizarCompra() {

    // Mostrar mensaje de éxito con ID de seguimiento
    document.getElementById('mensaje-compra').textContent = '¡Gracias por tu compra! Tu id de seguimiento es TRACK2343.';

    // Vaciar la lista del carrito
    carrito = [];

    // Actualizar la interfaz limpiando la vista y recalculando a ceros
    mostrarListaCesta();
    calcularTotales();

    // Resetear los selectores de cantidad del HTML al valor inicial (0)
    const desplegables = document.querySelectorAll('.producto-cantidad');
    desplegables.forEach(select => select.value = '0');
}



// ==========================================================================
// PRÁCTICA - COMPLETA ESTA PARTE DEL CÓDIGO (EL INTERIOR DE LA FUNCIÓN)
// Debes usar la lista carrito que tendrá la siguiente estructura y estará ya rellena con los datos del carrito
// 
// carrito = [
//   { nombre: "Taza QA Tester", precio: 10.00, cantidad: 2 },
//   { nombre: "Camiseta Bug Free", precio: 15.00, cantidad: 1 }
// ]
// ==========================================================================


// FUNCIÓN CALCULAR CESTA (subtotal, IVA, envío y total)
function calcularTotales() {
    let subtotal = 0;
    let iva = 0;
    let envio = 0;
    let total = 0;

    // 1. CALCULA EL SUBTOTAL: Recorre la lista carrito y suma todos los precios.
    

    // 2. CALCULA EL IVA: Multiplica el subtotal por 0.21 (21% de IVA)


    // 3. CALCULA EL ENVIO: 3,95 y si el subtotal es mayor a 30 el envio seria 0.


    // 4. CALCULA EL TOTAL: Suma SUBTOTAL + IVA + ENVIO.


    // Actualizar los valores en el HTML - NO TOCAR, USA LAS MISMAS VARIABLES Y FUNCIONARÁ.
    document.getElementById('subtotal').textContent = subtotal.toFixed(2) + ' €';
    document.getElementById('iva').textContent = iva.toFixed(2) + ' €';
    document.getElementById('envio').textContent = envio.toFixed(2) + ' €';
    document.getElementById('total').textContent = total.toFixed(2) + ' €';
}

