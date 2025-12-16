function mostrarCheckout() {
    let carrito = getCart()
    let grandtotal = 0;

    const container = document.getElementById("carrito-container");
    container.innerHTML = "";

    for(let id in carrito) {
        let producto = carrito[id]

        const card = document.createElement("div");
        card.classList.add("product-card");
        let total = producto.precio * producto.cantidad
        grandtotal += total

        card.innerHTML = `
            <div class="product-info">
                <h3>${producto.nombre}</h3>
                <div class="cantidad">${producto.cantidad} kg</div>
                <div class="price">${producto.precio}€/kg</div>
                <div class="price">${total}€/kg</div>
                <button onclick="removeCart(${producto.id}); mostrarCheckout()" class="buy-button">Remover</a>
            </div>
        `;

        container.appendChild(card);
    }

    const labelTotal = document.getElementById("total")
    labelTotal.innerHTML = "Total de la compra " + grandtotal.toFixed(2)
}

function realizarCompra() {
    window.localStorage.removeItem('carrito')
}