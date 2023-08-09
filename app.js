const ubicacion = document.querySelector('.ubicacion');
const whatsapp = document.querySelector('.whatsapp');
const listo = document.querySelector('.listo');
const musica = new Audio('/audio/moana.mp3');

ubicacion.addEventListener('mouseenter', () => {
  const confirmar = confirm('¿Abrir la ubicación?');
  if (confirmar) {
    window.open('https://goo.gl/maps/WdJPf3yKkvCC2bSH7', '_blank');
  }
})

whatsapp.addEventListener('mouseenter', () => {
  const confirmar = confirm('¿Abrir Whatsapp?');
  if (confirmar) {
    window.open('https://api.whatsapp.com/send?phone=+522221033301&text=Quiero%20una%20invitaci%C3%B3n,%20me%20das%20informaci%C3%B3n%20por%20favor?%20', '_blank');
  }
});

listo.addEventListener('click', () => {
  document.querySelector('.black').classList.add('hide');
  document.querySelector('.invitacion').classList.remove('hide');
  musica.play();
});
