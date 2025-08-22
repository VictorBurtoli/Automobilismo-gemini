// Trocar cor do carro
function changeCarColor(color) {
    const carImage = document.getElementById('carImage');
    carImage.src = `img/carro-${color}.png`;
}

// Trocar rodas
function changeWheels(wheels) {
    alert(`Rodas ${wheels} selecionadas! (aqui poderia trocar a imagem no futuro)`);
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
