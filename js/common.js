
function checkIsLogged() {
    let username = window.localStorage.getItem('username')
    if (username == null)
        window.location.href = 'login.html'
}

function logout() {
    window.localStorage.clear()
    window.location.href = 'login.html'
}

function getCart() {
    let carrito = JSON.parse(window.localStorage.getItem('carrito'))
    if (carrito == null) {
        carrito = {}
    }

    return carrito
}

function removeCart(idProducto){
    let carrito = getCart()

    if (carrito[idProducto] !== undefined) {
        if (carrito[idProducto]['cantidad'] > 1) {
            carrito[idProducto]['cantidad'] -= 1
        } else {
            delete carrito[idProducto]
        }

        window.localStorage.setItem('carrito', JSON.stringify(carrito));
    }
}

class Producto {
    constructor(id, nombre, descripcion, precio, imagen, tipo) {
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.tipo = tipo
        this.imagen = imagen
    }
}

class Carne extends Producto {
    constructor(id, nombre, descripcion, precio, imagen) {
        super(id, nombre, descripcion,precio, imagen, 'Carne')
    }
}

class Queso extends Producto {
    constructor(id, nombre, descripcion, precio, imagen) {
        super(id, nombre, descripcion,precio, imagen, 'Queso')
    }
}

class Embutido extends Producto {
    constructor(id, nombre, descripcion, precio, imagen) {
        super(id, nombre, descripcion, precio, imagen, 'Embutido')
    }
}