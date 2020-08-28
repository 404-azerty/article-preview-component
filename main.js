function toggle() {
  'use strict';

  // get footers
  const footerLinks = document.querySelector('.footer-links');
  const footerWriter = document.querySelector('.footer-writer');

  // get icon for big screen
  const specialButton = document.querySelector('#special-button');
  const specialImg = document.querySelector('#special-button img');

  // togle class atice for footers
  footerLinks.classList.toggle('active');
  footerWriter.classList.toggle('active');

  // if bigger screen, don't hide the first header and change share icon
  if (window.innerWidth >= 1440) {
    footerWriter.classList.toggle('active');
    if (footerLinks.classList.contains('active')) {
      specialImg.src = './images/icon-share-active.svg';
      specialButton.style.backgroundColor = '#6d7f97';
    } else {
      specialImg.src = './images/icon-share.svg';
      specialButton.style.backgroundColor = '#ecf2f8';
    }
  }
}
