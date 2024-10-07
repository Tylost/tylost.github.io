// Variável que indica se o usuário está logado
const isLoggedIn = true; // Altere para true para simular um usuário logado

const profileMenu = document.getElementById('profile-menu');

// Verifica se o usuário está logado
if (isLoggedIn) {
    // Conteúdo para usuário logado
    profileMenu.innerHTML = `
        <span class="profile_option"><i class="fas fa-user"></i> <a href="/profile/">Perfil</a></span>
        <span class="profile_option"><i class="fas fa-sign-out-alt"></i> <a href="/apis/logout/">Logout</a></span>
    `;
} else {
    // Conteúdo para usuário não logado
    profileMenu.innerHTML = `
        <a href="/login/">Login</a>
        <a href="/register/">Registrar</a>
    `;
}
