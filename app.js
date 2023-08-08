const link = document.querySelector('.link');

link.addEventListener('mouseenter', () => {
  console.log('clicked');
  window.open('https://goo.gl/maps/WdJPf3yKkvCC2bSH7', '_blank');
})
