

function animate() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  connectParticles();
  requestAnimationFrame(animate);
}
animate();

// Mostrar seção clicada
function mostrarSecao(id) {
  document.querySelectorAll('.card-box').forEach(secao => {
    secao.style.display = 'none';
  });
  const ativa = document.getElementById(id);
  if (ativa) {
    ativa.style.display = 'block';
  }
}
