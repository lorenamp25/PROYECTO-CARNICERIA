* Eventos
- Por en `login.html` el onclick, desde HTML
- Desde JS: `index.html` se agregan con el 
    `document.addEventListener('DOMContentLoaded', checkIsLogged);`

    Donde `DOMContentLoaded` es el evento a escuchar, puede ser (onclick, onmouseover, onkeydown, onmouseout)

    Donde `checkIsLogged` es cualquier function JS, incluso puede ser definida ahi mismo (una function anonima)
    ```
    document.addEventListener('DOMContentLoaded', () => {
        // codigo JS
    });
    ```
    O si se necesita el evento como parametro
    ```
    document.addEventListener('DOMContentLoaded', (event) => {
        // codigo JS que hace algo con event
    });
    ```
- window.onload = mostrarProductos; Al evento `onload` se lo atiende con la funcion `mostrarProductos`

* ajax (fetch)
- JSON: Ver `index.js:22` donde se cargan los productos
```
function mostrarProductos() {
    fetch("data/productos.json")
    .then(response => {
        return response.json()
    ....
```
- XML: Ver `aboutus.js:4` donde se cargan las granjas
```
fetch('data/granjas.xml')
        .then(response => {
            response.text())
        })
        .then(data => {
```

* DOM
- Ver `index.js:45`, y `aboutus.js:11`

* JSON manipulacion
- JSON: Ver `index.js:35` donde se cargan los productos. Para cada item json se usa como un objeto normal


* XML Manipulacion
- XML: Ver `aboutus.js:8` donde se manipulan los elementos del xml


* map
- Se aplica a colecciones, a cada elemento de la coleccion le aplica una funcion.
```
a = [1,2,3,4,5]
a.map(e => "Hola numero " + e)

=====> ['Hola numero 1', 'Hola numero 2', 'Hola numero 3', 'Hola numero 4', 'Hola numero 5']
```