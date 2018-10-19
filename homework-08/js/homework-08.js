'use strict';

const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];

const gallery = document.querySelector('.js-image-gallery');
const full = document.querySelector('.fullview');
const preview = document.querySelector('.preview');

const buildGallery = (arrObj) => {
  arrObj.map(liEl => {
    const liItem = document.createElement('li');
    preview.appendChild(liItem);
  })

  const liItems = Array.from(document.querySelectorAll('li'));
  liItems.map((li, i) => {
    const liImg = document.createElement('img');
    liImg.setAttribute('src', arrObj[i].preview);
    liImg.setAttribute('alt', arrObj[i].alt);
    li.appendChild(liImg);
  })

  const fullImg = document.createElement('img');
  fullImg.setAttribute('src', arrObj[0].fullview);
  fullImg.setAttribute('alt', arrObj[0].alt);
  full.appendChild(fullImg);
  liItems[0].classList.add('preview_selected');

  const switcher = (e) => {

    const target = e.target;

    if (target.nodeName !== 'IMG') return;

    const liImgs = Array.from(document.querySelectorAll('li'));
    
    liImgs.map(li => li.classList.remove('preview_selected'));
    target.parentNode.classList.add('preview_selected');
    fullImg.setAttribute('src', arrObj.filter(imgs => imgs.preview == target.getAttribute('src'))[0].fullview);
    fullImg.setAttribute('alt', arrObj.filter(imgs => imgs.preview == target.getAttribute('src'))[0].alt);
  }

  preview.addEventListener('click', switcher);
}
buildGallery(galleryItems);

