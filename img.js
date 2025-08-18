// Exemplo de como mudar a cor do carro
function changeCarColor(color) {
    const carImage = document.getElementById('carImage');
    carImage.src = `images/carro-${color}.png`;
}
