const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    document.getElementById("app").innerHTML = `
        <h1>Pergunta 1 ❤️</h1>

        <p>Qual é o meu maior motivo para sorrir?</p>

        <button>Você ❤️</button>
    `;
});