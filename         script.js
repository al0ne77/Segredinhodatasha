// ====== CONFIGURAÇÃO DAS MÚSICAS DO SPOTIFY ======
const musicas = {
    drake: "https://open.spotify.com/embed/track/578CwfxpfH2HxlENOCHc2n",
    timMaia: "https://open.spotify.com/embed/track/04h9o3gtRD7fvGafF7ukJj",
    dedicada: "https://open.spotify.com/embed/track/6AJwyS0aHhOAFDb6EbXlG5",
    luanSantana: "https://open.spotify.com/embed/track/0Fciu3fBg7fmWKeDboQpQV",
    jorgeMateus: "https://open.spotify.com/embed/track/6ccKu0LwJzOhLAxBwP2PTk",
    popSmoke: "https://open.spotify.com/embed/track/5MfVY0rINB7xdQDrg8buWr",
    travisScott: "https://open.spotify.com/embed/track/1i9lZvlaDdWDPyXEE95aiq"
};

const appContainer = document.getElementById("app");

// ====== TELA 1: INTRODUÇÃO ======
function telaIntro() {
    appContainer.innerHTML = `
        <h1>Olá, nobre donzela ❤️</h1>
        <p>Lembra que eu te falei que te contaria um segredo?</p>
        <div style="display: flex; gap: 15px; justify-content: center;">
            <button onclick="telaPronta()">Sim</button>
            <button onclick="telaPronta()">Claro!</button>
        </div>
    `;
}

// ====== TELA 2: PRONTA? (PEGADINHA DO NÃO) ======
function telaPronta() {
    appContainer.innerHTML = `
        <h1>Está pronta para descobrir esse segredo?</h1>
        <p>Pense bem... 😉</p>
        <div style="display: flex; gap: 15px; justify-content: center; position: relative;">
            <button onclick="perguntaSigno()">Sim</button>
            <button id="btnNao" onmouseover="fugaBotao()" onclick="perguntaSigno()">Não</button>
        </div>
    `;
}

function fugaBotao() {
    const btnNao = document.getElementById("btnNao");
    if (btnNao) {
        btnNao.innerText = "Sim";
        btnNao.style.background = "#ff4d88";
    }
}

// ====== SEGUNDA CHANCE ======
function segundaChance(mensagem, funcaoRetorno) {
    appContainer.innerHTML = `
        <h1>Poxa... 🥺</h1>
        <p>${mensagem}</p>
        <button onclick="${funcaoRetorno}">Tentar de Novo</button>
    `;
}

// ====== PERGUNTA 1: SIGNO ======
function perguntaSigno() {
    appContainer.innerHTML = `
        <h1>Pergunta 1</h1>
        <p>Então vamos lá… primeiramente, qual o meu signo?</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <button onclick="perguntaAniversario()">Sagitário</button>
            <button onclick="segundaChance('Errou feio! Quem é de Áries aqui? 😂', 'perguntaSigno()')">Áries</button>
            <button onclick="segundaChance('Escorpião? Tá querendo me arrumar problema? Hahaha', 'perguntaSigno()')">Escorpião</button>
            <button onclick="segundaChance('Libra não... Errou!', 'perguntaSigno()')">Libra</button>
        </div>
    `;
}

// ====== PERGUNTA 2: ANIVERSÁRIO ======
function perguntaAniversario() {
    appContainer.innerHTML = `
        <h1>Pergunta 2</h1>
        <p>Que dia eu faço aniversário?</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <button onclick="perguntaJogo()">8</button>
            <button onclick="segundaChance('Dia 27? Passou longe!', 'perguntaAniversario()')">27</button>
            <button onclick="segundaChance('Dia 30 não! Errou.', 'perguntaAniversario()')">30</button>
            <button onclick="segundaChance('Quase... mas não é dia 5!', 'perguntaAniversario()')">5</button>
        </div>
    `;
}

// ====== PERGUNTA 3: JOGO ======
function perguntaJogo() {
    appContainer.innerHTML = `
        <h1>Pergunta 3</h1>
        <p>Qual o jogo que eu mais jogo?</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <button onclick="perguntaAnimeFav()">FIFA</button>
            <button onclick="segundaChance('Roblox? Tá de brincadeira né? 😂', 'perguntaJogo()')">Roblox</button>
            <button onclick="segundaChance('GTA é bom, mas não é o que eu mais jogo!', 'perguntaJogo()')">GTA</button>
            <button onclick="segundaChance('Outro? Não, tem um específico sim!', 'perguntaJogo()')">Outro</button>
        </div>
    `;
}

// ====== PERGUNTA 4: ANIME FAVORITO ======
function perguntaAnimeFav() {
    appContainer.innerHTML = `
        <h1>Pergunta 4</h1>
        <p>Qual meu anime favorito?</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <button onclick="perguntaAnimeJuntos()">Naruto</button>
            <button onclick="segundaChance('dragon ball nao né', 'perguntaAnimeFav()')">Dragon Ball</button>
            <button onclick="segundaChance('jujutsu nao', 'perguntaAnimeFav()')">Jujutsu Kaisen</button>
            <button onclick="segundaChance('one piece muito longo nao', 'perguntaAnimeFav()')">One Piece</button>
        </div>
    `;
}

// ====== PERGUNTA 5: ANIME JUNTOS ======
function perguntaAnimeJuntos() {
    appContainer.innerHTML = `
        <h1>Pergunta 5</h1>
        <p>Qual é o anime que quero assistir contigo?</p>
        <div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">
            <button onclick="respostaAnimeJuntos()">Naruto</button>
            <button onclick="respostaAnimeJuntos()">Unnamed memory</button>
            <button onclick="respostaAnimeJuntos()">jujutsu</button>
            <button onclick="respostaAnimeJuntos()">dragon ball</button>
            <button onclick="respostaAnimeJuntos()">Yu Yu Hakusho</button>
        </div>
    `;
}

function respostaAnimeJuntos() {
    appContainer.innerHTML = `
        <h1>Todos meu amor😍</h1>
        <p>A verdade é que eu quero maratonar todos eles grudadinho com você!</p>
        <button onclick="perguntaArtista()">Avançar ✨</button>
    `;
}

// ====== PERGUNTA 6: ARTISTA ======
function perguntaArtista() {
    appContainer.innerHTML = `
        <h1>Pergunta 6</h1>
        <p>Qual artista eu mais escuto?</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <button onclick="premioDrake()">Drake</button>
            <button onclick="segundaChance('Gosto, mas não é o número 1!', 'perguntaArtista()')">Xxxtentacion</button>
            <button onclick="segundaChance('Central Cee é brabo, mas não o que mais ouço.', 'perguntaArtista()')">Central Cee</button>
            <button onclick="segundaChance('Juice Wrld errou!', 'perguntaArtista()')">Juice Wrld</button>
            <button onclick="segundaChance('Kanye West não!', 'perguntaArtista()')">Kanye West</button>
        </div>
    `;
}

function premioDrake() {
    appContainer.innerHTML = `
        <h1>Acertou! 🎶</h1>
        <p>É o Drake! Escuta esse som dele enquanto escolhe o nosso grande final:</p>
        <iframe src="${musicas.drake}" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" style="margin-bottom: 20px; border-radius: 8px;"></iframe>
        <button onclick="perguntaFotoMusica()">Escolher nossa música 📸</button>
    `;
}

// ====== PERGUNTA 7: MÚSICA DA FOTO ======
function perguntaFotoMusica() {
    appContainer.innerHTML = `
        <h1>A Escolha é Sua ✨</h1>
        <p>Qual a música que a gente vai usar na nossa primeira foto juntos?</p>
        <div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">
            <button onclick="telaFimPegadinha('${musicas.timMaia}')">Eu amo você - Tim Maia</button>
            <button onclick="telaFimPegadinha('${musicas.dedicada}')">A música que eu te dediquei</button>
            <button onclick="telaFimPegadinha('${musicas.luanSantana}')">Te esperando - Luan Santana</button>
            <button onclick="telaFimPegadinha('${musicas.jorgeMateus}')">Os anjos cantam - Jorge & Mateus</button>
            <button onclick="telaFimPegadinha('${musicas.popSmoke}')">Pop smoke imperfections</button>
            <button onclick="telaFimPegadinha('${musicas.travisScott}')">Telekinesis - Travis Scott</button>
        </div>
    `;
}

// ====== SUSTO DA TELA PRETA + DECLARAÇÃO FINAL ======
function telaFimPegadinha(musicaEscolhida) {
    document.body.style.background = "#000";
    appContainer.innerHTML = `
        <h1 style="color: #000; font-family: monospace;">FIM DO JOGO.</h1>
        <p style="color: #000;">Erro crítico no sistema...</p>
    `;
    
    setTimeout(() => {
        document.body.style.background = "linear-gradient(135deg, #111 0%, #2b0b1f 50%, #4a1231 100%)";
        appContainer.innerHTML = `
            <h1 style="color: #ff4d88; font-size: 2.2rem; margin-bottom: 20px;">Pegadinha! Hahaha 😝</h1>
            <p style="font-size: 1.2rem; line-height: 1.6; margin-bottom: 25px;">
                O grande segredo é que eu sou a pessoa mais sortuda do mundo inteiro por ter você na minha vida. 
                Cada momento com você se torna único, e eu mal posso esperar para postar a nossa primeira foto juntos com essa música tocando de fundo! 
                Você é o meu amor e o meu melhor motivo para sorrir. Eu amo muito você! 😘🌹
            </p>
            <iframe src="${musicaEscolhida}" width="100%" height="352" frameborder="0" allowtransparency="true" allow="encrypted-media" style="border-radius: 12px; box-shadow: 0px 4px 15px rgba(0,0,0,0.5);"></iframe>
        `;
    }, 3000);
}

// Inicializa a primeira tela
window.onload = telaIntro;
