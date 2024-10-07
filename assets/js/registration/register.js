function register(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");

    successMessage.style.display = "none";
    errorMessage.style.display = "none";

    // Realizando a autenticação na API
    fetch('/apis/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(response => {
        if (response.ok) {
            successMessage.textContent = 'Registro realizado com sucesso! Redirecionando...';
            successMessage.style.display = 'block';

            // Redirecionar após 2 segundos
            setTimeout(() => {
                window.location.href = '/login';
            }, 2000);
        } else {
            return response.json().then(data => {
                if (data.errors && data.errors.email) {
                    errorMessage.textContent = 'Esse email já está sendo usado. Tente outro.';
                } else {
                    // Mensagem de erro genérica
                    errorMessage.textContent = 'Erro ao registrar. Tente novamente.';
                }
                errorMessage.style.display = 'block';
            });
        }
    }).catch(error => {
        console.error('Erro na requisição:', error);
        errorMessage.textContent = 'Ocorreu um erro. Tente novamente.';
        errorMessage.style.display = 'block';
    });
}
