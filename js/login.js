/* 
   ELEMENTOS GERAIS
 */
const formLogin = document.getElementById("formulario_login");
const formCadastro = document.getElementById("formulario_cadastro");
const btnCadastro = document.getElementById("btnCadastro");
const btnLogin = document.getElementById("btnEntrar");
const redesSociais = document.querySelectorAll(".redes_continuar");


/* 
   ALTERNAR ENTRE LOGIN E CADASTRO
*/
if (btnCadastro) {
    btnCadastro.addEventListener("click", (e) => {
        e.preventDefault();
        formLogin.style.display = "none";
        formCadastro.style.display = "flex";

        document.body.style.minHeight = "105vh";
    });
}

if (btnLogin) {
    btnLogin.addEventListener("click", (e) => {
        e.preventDefault();
        formCadastro.style.display = "none";
        formLogin.style.display = "flex";

        document.body.style.minHeight = "100vh";
    });
}


/* 
   MOSTRAR / OCULTAR SENHA (LOGIN)
 */
const inputSenhaLogin = document.getElementById("senha");
const toggleSenhaLogin = document.getElementById("toggleSenha");

if (toggleSenhaLogin && inputSenhaLogin) {
    toggleSenhaLogin.addEventListener("click", () => {
        const isPassword = inputSenhaLogin.type === "password";

        inputSenhaLogin.type = isPassword ? "text" : "password";
        toggleSenhaLogin.src = isPassword
            ? "./icon/eye-off.svg"
            : "./icon/eye.svg";
        toggleSenhaLogin.alt = isPassword
            ? "Ocultar senha"
            : "Mostrar senha";
    });
}

/* 
   MOSTRAR / OCULTAR SENHA (CADASTRO)
 */
const inputSenhaCadastro = document.getElementById("senha_cadastro");
const toggleSenhaCadastro = document.getElementById("toggleSenhaCadastro");

if (toggleSenhaCadastro && inputSenhaCadastro) {
    toggleSenhaCadastro.addEventListener("click", () => {
        const isPassword = inputSenhaCadastro.type === "password";

        inputSenhaCadastro.type = isPassword ? "text" : "password";
        toggleSenhaCadastro.src = isPassword
            ? "./icon/eye-off.svg"
            : "./icon/eye.svg";
        toggleSenhaCadastro.alt = isPassword
            ? "Ocultar senha"
            : "Mostrar senha";
    });
}

/*
   ALERTA PERSONALIZADO
*/
const alertBox = document.getElementById("alert");
const alertText = alertBox.querySelector("span");

function showAlert(message, time = 3000) {
    alertText.textContent = message;
    alertBox.classList.add("show");

    setTimeout(() => {
        alertBox.classList.remove("show");
    }, time);
}

/* 
   VALIDAÇÃO - FORMULÁRIO DE LOGIN
*/
if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email_input").value.trim();
        const senha = inputSenhaLogin.value.trim();

        if (!email || !senha) {
            showAlert("Preencha todos os campos para continuar.");
            return;
        }

        // Login válido
        window.location.href = "./View/home.html";
    });
}

/* 
   VALIDAÇÃO - FORMULÁRIO DE CADASTRO
*/
if (formCadastro) {
    formCadastro.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const emailCadastro = document.getElementById("email_input_cadastro").value.trim();
        const senhaCadastro = inputSenhaCadastro.value.trim();

        if (!nome || !emailCadastro || !senhaCadastro) {
            showAlert("Preencha todos os campos para se cadastrar.");
            return;
        }

        // Cadastro válido
        window.location.href = "./View/home.html";
    });
}

/* 
   LOGIN VIA REDES SOCIAIS
*/
if (redesSociais.length > 0) {
    redesSociais.forEach((botao) => {
        botao.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "./View/home.html";
        });
    });
}
