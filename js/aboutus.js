function mostrarAboutUs() {
    const resultadosDiv = document.getElementById('granjas');

    fetch('data/granjas.xml')
        .then(response => response.text())
        .then(data => {
            // Parsear el XML
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'application/xml');
            // Obtener elementos <granja>
            const granjas = Array.from(xml.getElementsByTagName('granja'));
            // Generar contenido HTML
            resultadosDiv.innerHTML = `
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Ubicación</th>
                    </tr>
                    ${granjas.map(granja => `
                        <tr>
                            <td>${granja.getElementsByTagName('id')[0].textContent}</td>
                            <td>${granja.getElementsByTagName('nombre')[0].textContent}</td>
                            <td>${granja.getElementsByTagName('ubicacion')[0].textContent}</td>
                        </tr>
                    `).join('')}
                </table>
            `;
        })
        .catch(error => console.error('Error al cargar XML:', error));
    
}