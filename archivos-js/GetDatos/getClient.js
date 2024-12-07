function getClients(done) 
{
    fetch("http://localhost:8080/inicio/clients")
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getClients(data => 
{
    const tbody = document.querySelector("tbody");
    if (data.length === 0) 
    {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td colspan="6" style="text-align: center;">No hay autores registrados aún</td>
        `;
        tbody.appendChild(row)

    } else 
    {
        data.forEach(client => 
        {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${client.id}</td>
                <td>${client.name}</td>
                <td>${client.lastName}</td>
                <td>${client.age}</td>
                <td>${client.birthdate}</td>
                <td>${client.gender}</td>
                <td>${client.phoneNumber}</td>
                <td>${client.email}</td>
                <td>${client.address}</td>
            `;
            tbody.appendChild(row)
        
        });
    }      
});