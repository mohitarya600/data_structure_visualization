var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  const aboutPopupOverlay = document.getElementById('about-popup-overlay');
  const aboutPopupButton = document.getElementById('about-popup-button');

  // Function to open the About pop-up
  function openAboutPopup() {
    aboutPopupOverlay.style.display = 'flex';
  }

  // Function to close the About pop-up
  function closeAboutPopup() {
    aboutPopupOverlay.style.display = 'none';
  }

  // Link the About section button to open the About pop-up
  aboutPopupButton.addEventListener('click', openAboutPopup);