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



function closeAboutPopup() {
  aboutPopupOverlay.style.display = 'none';
}

// Link the About section button to open the About pop-up
aboutPopupButton.addEventListener('click', () => {
  aboutPopupOverlay.style.display = 'flex';
});