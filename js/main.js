const pelota = document.getElementById('pelota');
const obstaculo = document.getElementById('obstaculo');

let pelotaPosY = 0;
let pelotaVelY = 0;
const gravedad = 0.1;

function actualizarPelota() {
  pelotaPosY += pelotaVelY;
  pelotaVelY += gravedad;
  
  if (pelotaPosY > 250) {
    pelotaPosY = 250;
    pelotaVelY = 0;
  }
  
  pelota.style.bottom = pelotaPosY + 'px';
}

function actualizarObstaculo() {
  const obstaculoPosX = parseInt(obstaculo.style.right);
  
  if (obstaculoPosX > 450) {
    obstaculo.style.right = '0px';
  } else {
    obstaculo.style.right = obstaculoPosX + 1 + 'px';
  }
}

function detenerJuego() {
  clearInterval(intervaloJuego);
}

function detectarColision() {
  const pelotaPosX = parseInt(pelota.style.left);
  const pelotaAncho = parseInt(pelota.style.width);
  const pelotaAltura = parseInt(pelota.style.height);
  const obstaculoPosY = parseInt(obstaculo.style.bottom);
  const obstaculoAncho = parseInt(obstaculo.style.width);
  const obstaculoAltura = parseInt(obstaculo.style.height);
  
  if (pelotaPosY <= obstaculoPosY + obstaculoAltura &&
      pelotaPosX + pelotaAncho >= 450 - obstaculoAncho &&
      pelotaPosX <= 450) {
    detenerJuego();
    alert('¡Perdiste!');
  }
}

document.addEventListener('keydown', (evento) => {
  if (evento.code === 'Space') {
    pelotaVelY = -3;
  }
});

let intervaloJuego = setInterval(() => {
  actualizarPelota();
  actualizarObstaculo();
  detectarColision();
}, 10);

