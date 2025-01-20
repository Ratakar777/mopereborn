// Social media script 
window.addEventListener('scroll', function() {
  const socialMedia = document.getElementById('socialMedia');

  if (window.scrollY > 50) {
    socialMedia.style.display = 'block';
  } else {
    socialMedia.style.display = 'none';
  }
});