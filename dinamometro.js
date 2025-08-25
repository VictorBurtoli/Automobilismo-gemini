document.getElementById("btn-iniciar").addEventListener("click", () => {
  let rpm = 0;
  const maxRPM = 8000;
  const maxTorque = 400;

  const interval = setInterval(() => {
    rpm += 200;
    if (rpm > maxRPM) {
      rpm = maxRPM;
      clearInterval(interval);
    }

    const torque = Math.round(maxTorque * Math.sin((Math.PI / 2) * (rpm / maxRPM)));
    const hp = ((rpm * torque) / 7127).toFixed(1);

    document.getElementById("rpm").innerText = rpm;
    document.getElementById("torque").innerText = torque;
    document.getElementById("hp").innerText = hp;
  }, 200);
});
