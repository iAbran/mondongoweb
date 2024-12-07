const formElemento = document.getElementById("saveAuthor");

formElemento.addEventListener("submit", (event) => {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let birthdate = document.getElementById("birthdate").value;
    let gender = document.getElementById("gender").value;
    let uniqueCode = document.getElementById("uniqueCode").value;

    // Crear el objeto con los valores
    let transaction = {
        name: name,
        lastName: lastName,
        birthdate: birthdate,
        gender: gender,
        uniqueCode: uniqueCode
    };
    let transactionJson = JSON.stringify(transaction);

    fetch("http://localhost:8080/inicio/author/api", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: transactionJson
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Éxito:', data);
        alert('Autor guardado con éxito');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al guardar el autor');
    });
});
