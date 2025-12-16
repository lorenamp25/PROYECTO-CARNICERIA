function login(event){
    // Evita que se ejecute el comportamiento por default del formulario
    event.preventDefault();

    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    fetch('http://localhost/login.php', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {"Content-Type": "application/json"}
    }).then(response => {
        if (!response.ok) {
            if (response.status == 403) {
                alert('Usuario/contraseña no válido.')
                throw new Error('Credenciales inválidas');
            } else {
                alert('Error en la solicitud: ' + response.statusText)
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
        }
        return response.json()
    }).then(data => {
        window.localStorage.setItem('username', username)
        window.localStorage.setItem('name', data['nombre'])
        window.localStorage.setItem('email', data['email'])
        window.location.href = 'index.html'
    }).catch(error => {
        console.log(error)
    })
}