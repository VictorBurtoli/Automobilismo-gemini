// Função para mudar a cor do carro
function changeColor(color) {
    const carImage = document.getElementById('carImage');
    // Adicionamos a lógica para a cor aqui
    // No futuro, você pode ter uma imagem para cada cor
    // Por exemplo: carImage.src = `images/carro-${color}.png`;
    
    // Para um exemplo simples, vamos apenas mudar a cor de fundo da imagem
    carImage.style.backgroundColor = color;
}

// Função para mudar as rodas
function changeWheels(wheels) {
    const carImage = document.getElementById('carImage');
    // A lógica para mudar as rodas
    // Por exemplo: carImage.src = `images/carro-com-rodas-${wheels}.png`;
    
    // Para um exemplo simples, vamos apenas exibir um alerta
    alert(`Rodas ${wheels} selecionadas!`);
}
