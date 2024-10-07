function getCSRF(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const csrfToken = getCSRF('csrftoken');

    fetch('/apis/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Falha na autenticação')
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        window.location.href = '/'; // Exemplo de redirecionamento
    })
    .catch(error => {
        // console.error('Error:', error);
        document.getElementById('message').textContent = 'Usuário ou senha inválidos. Tente novamente.';
    });
});
