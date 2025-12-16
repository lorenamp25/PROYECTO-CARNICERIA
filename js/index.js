function addCart(idProducto, nombre, precio, cantidad) {
    let carrito = getCart()

    let producto = carrito[idProducto]
    if (producto == undefined) {
        producto = { 
            'id': idProducto, 
            'nombre': nombre,
            'precio': precio,
            'cantidad': cantidad
        }
    } else {
        producto['cantidad'] = producto['cantidad'] + cantidad
    }
    carrito[idProducto] = producto

    window.localStorage.setItem('carrito', JSON.stringify(carrito))

    updateHtmlCarrito()
}

function mostrarProductos() {
    fetch("data/productos.json")
    .then(response => {
        if (!response.ok){
            throw new Error("Error al cargar productos")
        }
        return response.json()
    })
    .then(data => {
        let productos = []
        
        data.forEach(item => {
            let producto
            if (item.tipo == 'Carne') {
                producto = new Carne(item.id, item.nombre, item.descripcion, item.precio, item.imagen)
            } else if (item.tipo == 'Queso') {
                producto = new Queso(item.id, item.nombre, item.descripcion, item.precio, item.imagen)
            } else if (item.tipo == 'Embutido') {
                producto = new Embutido(item.id, item.nombre, item.descripcion, item.precio, item.imagen)
            }
            productos.push(producto)
        })

        const container = document.getElementById("productos-container");
        container.innerHTML = "";

        productos.forEach(producto => {
            const card = document.createElement("div");
            card.classList.add("product-card");

            card.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="product-info">
                    <h2>${producto.nombre}</h2>
                    <p>${producto.descripcion}</p>
                    <div class="price">${producto.precio.toFixed(2)}€ /kg</div>
                    <button onclick="addCart(${producto.id}, '${producto.nombre}', '${producto.precio}', 1)" class="buy-button">Comprar Ahora</a>
                </div>
            `;

            container.appendChild(card);
        })
    })

    updateHtmlCarrito()
}

function updateHtmlCarrito() {
    let carrito = getCart()
    let cantidadItems = 0

    const container = document.getElementById("carrito-container")
    container.innerHTML = ""

    for(let id in carrito) {
        let producto = carrito[id]
        cantidadItems++

        const card = document.createElement("div")
        card.classList.add("product-card")
        let total = producto.precio * producto.cantidad

        card.innerHTML = `
            <div class="product-info">
                <h3>${producto.nombre}</h3>
                <div class="cantidad">${producto.cantidad} kg</div>
                <div class="price">${producto.precio}€/kg</div>
                <div class="price">${total}€/kg</div>
                <button onclick="removeCart(${producto.id}); updateHtmlCarrito();" class="buy-button">Remover</a>
            </div>
        `;

        container.appendChild(card);
    }
    
    const contador = document.getElementById("cart-count")
    contador.innerText = cantidadItems

}