const foneMagda = "5511992934616"; // Formato internacional
const mensagemDefault = encodeURIComponent("Olá Magda! Vi o anúncio do apartamento no Água Fria e gostaria de saber como funciona a entrada de 500 reais.");

function redirecionarWhatsApp() {
    const url = `https://wa.me/${foneMagda}?text=${mensagemDefault}`;
    window.open(url, '_blank');
}

// Vinculando aos botões
document.addEventListener('DOMContentLoaded', () => {
    const btnPrincipal = document.getElementById('btnZap');
    const btnFlutuante = document.getElementById('floatZap');

    btnPrincipal.onclick = redirecionarWhatsApp;
    btnFlutuante.onclick = (e) => {
        e.preventDefault();
        redirecionarWhatsApp();
    };
});
