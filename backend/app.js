/* =====================================================
   ELEMENTOS DO MATCH
   Responsável por capturar todos os elementos do DOM
   usados na tela principal de match (cards de livros)
===================================================== */

// Container principal do card de match
const box = document.getElementById("box_match");

// Imagem do livro exibido no card
const img = document.querySelector("#img_box img");

// Campos de texto com informações do livro
const titulo = document.getElementById("titulo_livro");
const autor = document.getElementById("autor_livro");
const ano = document.getElementById("ano_livro");
const genero = document.getElementById("genero_livro");
const categoria = document.getElementById("categoria_livro");
const descricao = document.getElementById("descricao_livro");

// Ícones visuais de like e dislike (feedback durante swipe)
const likeIcon = document.getElementById("like_icon");
const dontLikeIcon = document.getElementById("dontlike_icon");

// Container exibido quando não há mais livros
const boxEnd = document.getElementById("box_end");

/* =====================================================
   CONTROLE DE ESTADO
   Variáveis que controlam o funcionamento do swipe,
   posição atual e preferências do usuário
===================================================== */

// Índice do livro atual na lista disponível
let indexAtual = 0;

// Controle do movimento de swipe
let startX = 0;
let currentX = 0;
let dragging = false;

// Recupera likes e dislikes salvos no localStorage
let likes = JSON.parse(localStorage.getItem("likes")) || [];
let dislikes = JSON.parse(localStorage.getItem("dislikes")) || [];

// Gênero atualmente priorizado após um like
let generoAtivo = null;

/* =====================================================
   FILTRA LIVROS JÁ VISTOS
   Remove livros que já receberam like ou dislike
===================================================== */

let livrosDisponiveis = livros.filter(
    l => !likes.includes(l.id) && !dislikes.includes(l.id)
);

/* =====================================================
   CARREGAR LIVRO
   Renderiza os dados do livro atual na interface
===================================================== */

function carregarLivro() {
    // Se não houver mais livros disponíveis, exibe tela final
    if (indexAtual >= livrosDisponiveis.length) {
        mostrarFim();
        return;
    }

    const livro = livrosDisponiveis[indexAtual];

    // Atualiza imagem
    img.src = livro.imagem;
    img.alt = livro.titulo;

    // Atualiza textos
    titulo.textContent = livro.titulo;
    autor.textContent = livro.autor;
    ano.textContent = livro.ano;
    genero.textContent = livro.genero;
    categoria.textContent = livro.categoria;
    descricao.textContent = livro.descricao;

    // Reseta posição do card e ícones
    box.style.transform = "translateX(0)";
    likeIcon.style.opacity = 0;
    dontLikeIcon.style.opacity = 0;
}

/* =====================================================
   FIM DA LISTA
   Exibe a tela de encerramento quando não há mais livros
===================================================== */

function mostrarFim() {
    box.style.display = "none";
    boxEnd.style.display = "flex";

    likeIcon.style.opacity = 0;
    dontLikeIcon.style.opacity = 0;

    document.body.classList.add("fim-lista");
}

/* =====================================================
   RESETAR LISTA (LOCALSTORAGE)
   -----------------------------------------------------
   Remove apenas os dados utilizados pelo sistema
   de match e reinicia o estado da aplicação.
===================================================== */

function resetarLista() {
    localStorage.clear();
    location.reload();
}


/* Evento do botão */
document.getElementById("resetarlista").addEventListener("click", resetarLista);


/* =====================================================
   ENCONTRAR PRÓXIMO LIVRO DO MESMO GÊNERO
   Prioriza livros do mesmo gênero após um like
===================================================== */

function encontrarProximoPorGenero(genero) {
    return livrosDisponiveis.findIndex(
        (livro, index) => livro.genero === genero && index !== indexAtual
    );
}

/* =====================================================
   ATUALIZA BIBLIOTECA
   Recalcula listas, atualiza contadores e cards
===================================================== */

function atualizarBiblioteca() {
    livrosCurtidos = livros.filter(l => likes.includes(l.id));
    livrosDislike = livros.filter(l => dislikes.includes(l.id));

    btnCurtidos.textContent = `Curtidos (${livrosCurtidos.length})`;
    btnDislikes.textContent = `Dislike (${livrosDislike.length})`;

    filtrarLista();          // Reaplica filtros da biblioteca
    atualizarCardsPerfil();  // Atualiza métricas do perfil
}

/* =====================================================
   VOTAÇÃO
   Registra like ou dislike e carrega próximo livro
===================================================== */

function votar(tipo) {
    const livroAtual = livrosDisponiveis[indexAtual];

    if (!livroAtual) {
        mostrarFim();
        return;
    }

    // Registra voto
    if (tipo === "like") {
        likes.push(livroAtual.id);
        generoAtivo = livroAtual.genero;
    } else {
        dislikes.push(livroAtual.id);
        generoAtivo = null;
    }

    // Persiste no localStorage
    localStorage.setItem("likes", JSON.stringify(likes));
    localStorage.setItem("dislikes", JSON.stringify(dislikes));

    // Atualiza lista disponível
    livrosDisponiveis = livros.filter(
        l => !likes.includes(l.id) && !dislikes.includes(l.id)
    );

    if (livrosDisponiveis.length === 0) {
        mostrarFim();
        return;
    }

    // Define próximo índice
    let proximoIndex = -1;

    if (generoAtivo) {
        proximoIndex = encontrarProximoPorGenero(generoAtivo);
    }

    if (proximoIndex === -1) {
        generoAtivo = null;
        proximoIndex = 0;
    }

    indexAtual = proximoIndex;

    carregarLivro();
    atualizarBiblioteca();
}

/* =====================================================
   SWIPE AVANÇADO (MOUSE + TOUCH)
   -----------------------------------------------------
   Implementa o comportamento de swipe do card,
   suportando mouse (desktop) e touch (mobile),
   com efeitos visuais, resistência elástica,
   rotação, escala e animação de saída.
===================================================== */


/* =====================================================
   CONFIGURAÇÕES DE MOVIMENTO E EFEITO
===================================================== */

/* Distância máxima antes de aplicar resistência elástica */
const MAX_DRAG = 160;

/* Fator que controla a intensidade da rotação do card */
const ROTATION_FACTOR = 18;

/* Redução máxima de escala durante o swipe */
const SCALE_REDUCTION = 0.05;


/* =====================================================
   LIMITES DE DECISÃO (THRESHOLDS)
   -----------------------------------------------------
   Define a distância mínima para considerar
   um swipe válido (like ou dislike).
===================================================== */

/* Threshold para desktop (mouse) */
const THRESHOLD_DESKTOP = 90;

/* Threshold menor para mobile (toque é menos preciso) */
const THRESHOLD_MOBILE = 70;


/* =====================================================
   FUNÇÕES UTILITÁRIAS
===================================================== */

/**
 * Retorna o threshold correto de acordo com o tipo
 * de interação (touch ou mouse).
 */
function getThreshold() {
    return isTouch ? THRESHOLD_MOBILE : THRESHOLD_DESKTOP;
}


/**
 * Aplica resistência elástica quando o usuário
 * ultrapassa o limite máximo de arraste.
 * Isso cria o efeito de "borracha".
 */
function applyElasticResistance(value) {
    const abs = Math.abs(value);

    /* Se ainda estiver dentro do limite, retorna o valor normal */
    if (abs < MAX_DRAG) return value;

    /* Calcula o excesso além do limite */
    const excess = abs - MAX_DRAG;

    /* Aplica resistência reduzindo a progressão */
    const resistance = excess * 0.3;

    /* Mantém o sinal (direção) original */
    return Math.sign(value) * (MAX_DRAG + resistance);
}


/**
 * Inicia o processo de arraste.
 * Armazena a posição inicial e identifica
 * se o evento é de touch ou mouse.
 */
function startDrag(x, touch = false) {
    dragging = true;
    startX = x;
    isTouch = touch;

    /* Remove transições para movimento imediato */
    box.classList.add("dragging");
}


/**
 * Atualiza a posição do card enquanto o usuário arrasta.
 * Aplica:
 * - resistência elástica
 * - rotação proporcional
 * - redução de escala
 * - feedback visual de like / dislike
 */
function moveDrag(x) {
    if (!dragging) return;

    /* Calcula deslocamento horizontal */
    currentX = x - startX;

    /* Aplica resistência elástica */
    currentX = applyElasticResistance(currentX);

    /* Progresso normalizado (0 a 1) */
    const progress = Math.min(Math.abs(currentX) / MAX_DRAG, 1);

    /* Rotação proporcional ao deslocamento */
    const rotation = currentX / ROTATION_FACTOR;

    /* Redução suave da escala */
    const scale = 1 - progress * SCALE_REDUCTION;

    /* Aplica transformações visuais ao card */
    box.style.transform = `
        translateX(${currentX}px)
        rotate(${rotation}deg)
        scale(${scale})
    `;

    /* =================================================
       FEEDBACK VISUAL (LIKE / DISLIKE)
       -------------------------------------------------
       Sincroniza ícones com ângulo e progresso real
       do swipe.
    ================================================= */

    if (currentX > 0) {
        /* Swipe para direita (LIKE) */
        likeIcon.style.opacity = progress;
        likeIcon.style.transform = `rotate(${rotation}deg) scale(${1 + progress * 0.2})`;
        dontLikeIcon.style.opacity = 0;
    } else {
        /* Swipe para esquerda (DISLIKE) */
        dontLikeIcon.style.opacity = progress;
        dontLikeIcon.style.transform = `rotate(${rotation}deg) scale(${1 + progress * 0.2})`;
        likeIcon.style.opacity = 0;
    }
}


/**
 * Executa a animação de saída do card
 * após um voto confirmado.
 */
function animateExit(direction) {
    /* Define direção de saída */
    const exitX = direction === "like" ? window.innerWidth : -window.innerWidth;

    /* Inclinação final do card */
    const rotation = direction === "like" ? 25 : -25;

    /* Aplica animação suave de saída */
    box.style.transition = "transform 0.35s ease-out";
    box.style.transform = `
        translateX(${exitX}px)
        rotate(${rotation}deg)
        scale(0.95)
    `;

    /* Reset visual após a animação */
    setTimeout(() => {
        box.style.transition = "";
        box.style.transform = "translateX(0) rotate(0) scale(1)";
        likeIcon.style.opacity = 0;
        dontLikeIcon.style.opacity = 0;
    }, 350);
}


/**
 * Finaliza o arraste.
 * Verifica se o deslocamento ultrapassou o threshold
 * e decide entre:
 * - like
 * - dislike
 * - retorno ao centro
 */
function endDrag() {
    if (!dragging) return;

    dragging = false;
    box.classList.remove("dragging");

    /* Obtém o threshold adequado */
    const threshold = getThreshold();

    if (currentX > threshold) {
        /* Swipe suficiente para LIKE */
        animateExit("like");
        votar("like");

    } else if (currentX < -threshold) {
        /* Swipe suficiente para DISLIKE */
        animateExit("dislike");
        votar("dislike");

    } else {
        /* Swipe insuficiente → retorna ao centro */
        box.style.transform = "translateX(0) rotate(0) scale(1)";
        likeIcon.style.opacity = 0;
        dontLikeIcon.style.opacity = 0;
    }
}


/* =====================================================
   EVENTOS DE MOUSE (DESKTOP)
===================================================== */

/* Início do arraste com mouse */
box.addEventListener("mousedown", e => {
    startDrag(e.clientX, false);
});

/* Movimento do mouse durante o arraste */
document.addEventListener("mousemove", e => {
    moveDrag(e.clientX);
});

/* Final do arraste */
document.addEventListener("mouseup", endDrag);


/* =====================================================
   EVENTOS DE TOUCH (MOBILE)
===================================================== */

/* Início do toque */
box.addEventListener("touchstart", e => {
    startDrag(e.touches[0].clientX, true);
}, { passive: true });

/* Movimento do dedo */
box.addEventListener("touchmove", e => {
    moveDrag(e.touches[0].clientX);
}, { passive: true });

/* Final do toque */
box.addEventListener("touchend", endDrag);

/* =====================================================
   BOTÕES DE MATCH
   Like e dislike via clique
===================================================== */

document.getElementById("like").onclick = () => votar("like");
document.getElementById("notlike").onclick = () => votar("dislike");

/* =====================================================
   MODAL
   Modal de confirmação reutilizável
===================================================== */

const modalOverlay = document.getElementById("modalConfirmacao");
const modalMensagem = document.getElementById("modalMensagem");
const modalCancelar = document.getElementById("modalCancelar");
const modalConfirmar = document.getElementById("modalConfirmar");

function abrirModal(mensagem, acaoConfirmar) {
    modalMensagem.textContent = mensagem;
    modalOverlay.classList.add("mostrar_modal");

    modalConfirmar.onclick = () => {
        acaoConfirmar();
        modalOverlay.classList.remove("mostrar_modal");
    };

    modalCancelar.onclick = () => {
        modalOverlay.classList.remove("mostrar_modal");
    };
}

/* =====================================================
   BOTÕES DE RESET E EXCLUIR
===================================================== */

// Reseta histórico de likes e dislikes
document.getElementById("resetarInfo").addEventListener("click", () => {
    abrirModal("Deseja realmente resetar todas as visualizações?", () => {
        localStorage.removeItem("likes");
        localStorage.removeItem("dislikes");
        localStorage.removeItem("pesoCategorias");

        likes = [];
        dislikes = [];
        livrosDisponiveis = livros;
        indexAtual = 0;

        document.body.classList.remove("fim-lista");
        box.style.display = "flex";
        boxEnd.style.display = "none";

        carregarLivro();
        atualizarBiblioteca();
    });
});

// Exclui todos os dados e redireciona
document.getElementById("excluirConta").addEventListener("click", () => {
    abrirModal("Deseja realmente excluir a conta?", () => {
        localStorage.clear();
        window.location.href = "../index.html";
    });
});

/* =====================================================
   NAVEGAÇÃO ENTRE TELAS
   Controla exibição de Match, Biblioteca e Perfil
===================================================== */

const navItems = document.querySelectorAll(".itens_nav li");
const containerMatch = document.getElementById("containerMatch");
const containerBiblioteca = document.getElementById("containerBiblioteca");
const containerPerfil = document.getElementById("containerPerfil");

function esconderContainers() {
    containerMatch.classList.remove("exibida");
    containerBiblioteca.classList.remove("exibida");
    containerPerfil.classList.remove("exibida");
}

function removerSelecionado() {
    navItems.forEach(item => {
        item.classList.remove("ativo");

        const icon = item.querySelector("i");
        if (item.id === "Match") icon.className = "fa-solid fa-house";
        if (item.id === "Biblioteca") icon.className = "fa-solid fa-book";
        if (item.id === "Perfil") icon.className = "fa-regular fa-user";
    });
}

navItems.forEach(item => {
    item.addEventListener("click", () => {
        removerSelecionado();
        item.classList.add("ativo");

        const icon = item.querySelector("i");
        if (item.id === "Match") icon.className = "fa-solid fa-house";
        if (item.id === "Biblioteca") icon.className = "fa-solid fa-book";
        if (item.id === "Perfil") icon.className = "fa-solid fa-user";

        esconderContainers();
        if (item.id === "Match") containerMatch.classList.add("exibida");
        if (item.id === "Biblioteca") containerBiblioteca.classList.add("exibida");
        if (item.id === "Perfil") containerPerfil.classList.add("exibida");
    });
});

/* =====================================================
   BIBLIOTECA
   Busca, filtros e renderização de cards
===================================================== */

const searchInput = document.getElementById("search_input");
const btnCurtidos = document.getElementById("filter_curtidos");
const btnDislikes = document.getElementById("filter_naocurtidos");
const cardsContainer = document.getElementById("cards_resultados");

let filtroAtivo = "curtidos";
let livrosCurtidos = livros.filter(l => likes.includes(l.id));
let livrosDislike = livros.filter(l => dislikes.includes(l.id));

btnCurtidos.textContent = `Curtidos (${livrosCurtidos.length})`;
btnDislikes.textContent = `Dislike (${livrosDislike.length})`;

function renderizarCards(lista) {
    cardsContainer.innerHTML = "";

    if (lista.length === 0) {
        cardsContainer.innerHTML = "<p>Nenhum livro encontrado</p>";
        return;
    }

    lista.forEach(livro => {
        const card = document.createElement("div");
        card.classList.add("card_historico");
        card.id = `card_${livro.id}`;

        card.innerHTML = `
            <div class="categoria_card">${livro.categoria}</div>
            <div class="imagem_card">
                <img src="${livro.imagem}" alt="${livro.titulo}">
            </div>
            <div class="main_info">
                <p class="titulo_livro_card">${livro.titulo}</p>
                <p class="autor_card">${livro.autor}</p>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}

function filtrarLista() {
    const termo = searchInput.value.toLowerCase();
    const base = filtroAtivo === "curtidos" ? livrosCurtidos : livrosDislike;

    const filtrados = base.filter(l =>
        l.titulo.toLowerCase().includes(termo) ||
        l.autor.toLowerCase().includes(termo) ||
        l.categoria.toLowerCase().includes(termo)
    );

    renderizarCards(filtrados);
}

btnCurtidos.addEventListener("click", () => {
    filtroAtivo = "curtidos";
    btnCurtidos.classList.add("selecionado");
    btnDislikes.classList.remove("selecionado");
    filtrarLista();
});

btnDislikes.addEventListener("click", () => {
    filtroAtivo = "dislikes";
    btnDislikes.classList.add("selecionado");
    btnCurtidos.classList.remove("selecionado");
    filtrarLista();
});

searchInput.addEventListener("input", filtrarLista);

/* =====================================================
   CARDS DE PERFIL
   Estatísticas do usuário
===================================================== */

const categoriaFavorita = document.getElementById("Categoriafavorita");
const totalCurtidas = document.getElementById("Totalcurtidas");
const categoriaMenosCurtida = document.getElementById("categoriaMenoscurtida");
const totalDislike = document.getElementById("Totaldedislike");

function atualizarCardsPerfil() {
    if (likes.length === 0) {
        categoriaFavorita.textContent = "-";
        totalCurtidas.textContent = "0";
        categoriaMenosCurtida.textContent = "-";
    } else {
        const categoriasCurtidas = livros
            .filter(l => likes.includes(l.id))
            .map(l => l.categoria);

        const contagemCurtidas = {};
        categoriasCurtidas.forEach(c => {
            contagemCurtidas[c] = (contagemCurtidas[c] || 0) + 1;
        });

        const categoriasOrdenadas = Object.entries(contagemCurtidas)
            .sort((a, b) => b[1] - a[1]);

        categoriaFavorita.textContent = categoriasOrdenadas[0][0];
        totalCurtidas.textContent = likes.length;
        categoriaMenosCurtida.textContent =
            categoriasOrdenadas[categoriasOrdenadas.length - 1][0];
    }

    totalDislike.textContent = dislikes.length || "0";
}

/* =====================================================
   INIT
   Inicialização da aplicação
===================================================== */

carregarLivro();
atualizarBiblioteca();
renderizarCards(livrosCurtidos);
atualizarCardsPerfil();
