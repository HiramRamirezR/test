const ubicacion = document.querySelector('.ubicacion');
const whatsapp = document.querySelector('.whatsapp');

ubicacion.addEventListener('mouseenter', () => {
  const confirmar = confirm('¿Abrir la ubicación?');
  if (confirmar) {
    window.open('https://goo.gl/maps/WdJPf3yKkvCC2bSH7', '_blank');
  }
})

ubicacion.addEventListener('click', () => {
  const confirmar = confirm('¿Abrir la ubicación?');
  if (confirmar) {
    window.open('https://goo.gl/maps/WdJPf3yKkvCC2bSH7', '_blank');
  }
})

whatsapp.addEventListener('mouseenter', () => {
  const confirmar = confirm('¿Abrir Whatsapp?');
  if (confirmar) {
    window.open('https://api.whatsapp.com/send?phone=+522221033301', '_blank');
  }
});
