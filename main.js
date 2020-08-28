'use strict';

// Detect click on share button
const footerLinks = document.querySelector('.footer-links');
const footerWriter = document.querySelector('.footer-writer');
function toggle() {
  footerLinks.classList.toggle('active');
  footerWriter.classList.toggle('active');
}
