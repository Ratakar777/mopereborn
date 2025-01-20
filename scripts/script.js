document.addEventListener('DOMContentLoaded', function() {
  const featureImages = document.querySelectorAll('.features-container img');
  const textBoxImages = document.querySelectorAll('.text-box img');

  featureImages.forEach(img => {
    img.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');
      const targetImg = document.getElementById(targetId);

      if (targetImg) {
        textBoxImages.forEach(textImg => {
          textImg.style.display = 'none';
        });

        targetImg.style.display = 'block';
      } else {
        console.error(`Element with id ${targetId} not found.`);
      }
    });
  });

  const featureImagesMobile = document.querySelectorAll('.feature-img-mobile');
  const textBoxMobile = document.querySelector('.text-box-mobile');

  featureImagesMobile.forEach(img => {
    img.addEventListener('click', function() {
      document.querySelectorAll('.lore-img').forEach(loreImg => loreImg.classList.remove('active'));

      const loreToShow = this.getAttribute('data-text');
      document.getElementById(loreToShow).classList.add('active');

      textBoxMobile.style.display = 'flex'; 
    });
  });

  textBoxMobile.addEventListener('click', function() {
    textBoxMobile.style.display = 'none';
  });

  // Overlay verbergen bij het laden van de pagina
  textBoxMobile.style.display = 'none';
});
