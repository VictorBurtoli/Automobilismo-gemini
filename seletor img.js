// Estado atual do carro
let currentColor = "vermelho";   // cor inicial
let currentWheels = "normal"; // rodas iniciais

// Função para definir cor
function setColor(color) {
  currentColor = color;
  updateCarImage(carros-preto-normal-lado esquerdo.png,
                 carros-preto-normal-frente.png,
                 carros-preto-normal-costas.png,
                 carro-vermelho-normal-lado esquerdo.png,
                 carro-vermelho-normal-costas.png,
                 carro-azul-normal-lado esquerdo.png,
                 carro-azul-normal-frente.png,
                 carro-azul-normal-costas.png,
                 carro-azul-normal-lado-direito.png,
                 carro-preto-normal-lado-direito.png,
                 carro-vermelho-normal-frente.png,
                 carro-vermelho-normal-lado direito.png,
                 carro-azul-espotivo-lado esquerdo.png,
                 carros-preto-esportivo-lado esquerdo.png,
                 carro-azul-espotivo-lado direito.png,
                 carro-preto-esportivo-lado-direito.png,
                 carro-vermelho-esportivo-lado direito.png,
                 carro-vermelho-esportivo-lado esquerdo.png);
}

// Função para definir rodas
function setWheels(wheels) {
  currentWheels = wheels;
  updateCarImage(carros-preto-normal-lado esquerdo.png,
                 carros-preto-normal-frente.png,
                 carros-preto-normal-costas.png,
                 carro-vermelho-normal-lado esquerdo.png,
                 carro-vermelho-normal-costas.png,
                 carro-azul-normal-lado esquerdo.png,
                 carro-azul-normal-frente.png,
                 carro-azul-normal-costas.png,
                 carro-azul-normal-lado-direito.png,
                 carro-preto-normal-lado-direito.png,
                 carro-vermelho-normal-frente.png,
                 carro-vermelho-normal-lado direito.png,
                 carro-azul-espotivo-lado esquerdo.png,
                 carros-preto-esportivo-lado esquerdo.png,
                 carro-azul-espotivo-lado direito.png,
                 carro-preto-esportivo-lado-direito.png,
                 carro-vermelho-esportivo-lado direito.png,
                 carro-vermelho-esportivo-lado esquerdo.png);
}

// Atualiza a imagem do carro conforme a escolha
function updateCarImage() {
  const carImage = document.getElementById("carImage");
  carImage.src = `img/carro-${currentColor}-${currentWheels}.png`;
}

// Simulador de dinamômetro
let rpm = 0;
let interval;

function startTest() {
    rpm = 0;
    clearInterval(interval);

    interval = setInterval(() => {
        if (rpm >= 8000) {
            clearInterval(interval);
        } else {
            rpm += 250; 
            let torque = (300 - (rpm / 50)) > 0 ? (300 - (rpm / 50)) : 50;
            let power = (torque * rpm) / 7127;

            document.getElementById("rpm").innerText = rpm;
            document.getElementById("torque").innerText = torque.toFixed(1);
            document.getElementById("power").innerText = power.toFixed(1);

            document.getElementById("powerBar").style.width = (power * 2) + "px";
        }
    }, 200);
}
