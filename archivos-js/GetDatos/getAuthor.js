function getAuthors(done) 
{
    fetch("http://localhost:8080/inicio/author")
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getAuthors(data => 
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
        data.forEach(author => 
        {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${author.id}</td>
                <td>${author.name}</td>
                <td>${author.lastName}</td>
                <td>${author.age}</td>
                <td>${author.birthdate}</td>
                <td>${author.gender}</td>
            `;
            tbody.appendChild(row);
        });
    }      
});