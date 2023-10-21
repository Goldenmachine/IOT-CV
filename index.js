document.getElementById('facebook-icon').addEventListener('click', function() {
  window.location.href = 'https://www.facebook.com/kantapongsurachit/';
});
document.getElementById('ig-icon').addEventListener('click', function() {
  window.location.href = 'https://www.instagram.com/ksr_yuu/';
});
document.getElementById('github-icon').addEventListener('click', function() {
  window.location.href = 'https://github.com/Goldenmachine';
});
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const image = document.querySelector('.header img');
  const scrollPosition = window.scrollY;

  const imageMove = scrollPosition / 2; 

  image.style.transform = `translateY(-${imageMove}px)`}); 
