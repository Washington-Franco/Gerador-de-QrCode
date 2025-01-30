// Espera que o DOM esteja totalmente carregado antes de executar o código
document.addEventListener("DOMContentLoaded", () => {
    // Seleciona o contêiner principal
    const container = document.querySelector(".container");
    // Seleciona o botão de gerar QR Code
    const qrCodeBtn = document.querySelector("#generate-btn");
    // Seleciona o campo de entrada de texto
    const qrCodeInput = document.querySelector("#qr-form input");
    // Seleciona a imagem do QR Code
    const qrCodeImg = document.querySelector("#qr-code-img");

    // Função para gerar o QR Code
    function generateQrCode() { 
        // Obtém o valor inserido no campo de entrada
        const qrCodeInputValue = qrCodeInput.value;

        // Verifica se o campo está vazio
        if (!qrCodeInputValue) return;

        // Altera o texto do botão para indicar que o QR Code está sendo gerado
        qrCodeBtn.innerText = "Gerando código...";

        // Gera o código QR com base no valor inserido no campo de entrada
        qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

        // Aguarda o carregamento da imagem QR Code
        qrCodeImg.addEventListener("load", () => {
            // Quando a imagem é carregada, adiciona a classe "active" ao contêiner para mostrar o QR Code
            container.classList.add("active");
            // Restaura o texto original do botão
            qrCodeBtn.innerText = "QR Code pronto";
        });
    }

    // Adiciona um evento de clique ao botão de gerar QR Code
    qrCodeBtn.addEventListener("click", () => {
        // Chama a função para gerar o QR Code quando o botão é clicado
        generateQrCode();
    });

    // Adiciona um evento de pressionar tecla ao campo de entrada
    qrCodeInput.addEventListener("keydown", (e) => {
        // Se a tecla pressionada for Enter, gera o QR Code
        if (e.code === "Enter") {
            generateQrCode();
        }
    });

    // Adiciona um evento de soltar tecla ao campo de entrada
    qrCodeInput.addEventListener("keyup", () => {
        // Se o campo estiver vazio, remove a classe "active" do contêiner e restaura o texto do botão
        if (!qrCodeInput.value) {
            container.classList.remove("active");
            qrCodeBtn.innerText = "Gerar QR code";
        }
    });
});

