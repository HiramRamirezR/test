const ubicacion = document.querySelector('.ubicacion');

ubicacion.addEventListener('mouseenter', () => {
  const confirmar = confirm('¿Abrir la ubicación?');
  if (confirmar) {
    window.open('https://goo.gl/maps/WdJPf3yKkvCC2bSH7', '_blank');
  }
})
