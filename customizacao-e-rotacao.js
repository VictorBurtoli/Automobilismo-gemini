const imgCarro = document.getElementById("imagem-carro");

// Atualiza imagem com base em cor e rodas
function updateImage(angulo = "frente") {
  const cor = document.getElementById("select-cor").value;
  const rodas = document.getElementById("select-rodas").value;
  imgCarro.src = `img/carro-${cor}-${rodas}-${angulo}.png`;
}

// Eventos de troca de cor/rodas
document.getElementById("select-cor").addEventListener("change", () => updateImage());
document.getElementById("select-rodas").addEventListener("change", () => updateImage());

// Sequência 1: frente → lado direito → costa → lado esquerdo → frente...
const sequencia1 = ["frente", "lado direito", "costa", "lado esquerdo"];
let indexSeq1 = 0;

document.getElementById("btn-sequencia1").addEventListener("click", () => {
  indexSeq1 = (indexSeq1 + 1) % sequencia1.length;
  updateImage(sequencia1[indexSeq1]);
});

// Sequência 2: frente → lado esquerdo → costa → lado direito → frente...
const sequencia2 = ["frente", "lado esquerdo", "costa", "lado direito"];
let indexSeq2 = 0;

document.getElementById("btn-sequencia2").addEventListener("click", () => {
  indexSeq2 = (indexSeq2 + 1) % sequencia2.length;
  updateImage(sequencia2[indexSeq2]);
});
