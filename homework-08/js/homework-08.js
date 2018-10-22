'use strict';

const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];

const galleryH = document.querySelector('.image-gallery');

galleryH.classList.add('js-image-gallery');

const gallery = document.querySelector('.js-image-gallery');

const buildGallery = (arrObj) => {
  
  const full = document.createElement('div');
  full.classList.add('fullview');
  gallery.prepend(full);

  const preview = document.createElement('ul');
  preview.classList.add('preview');
  gallery.appendChild(preview);

  (function(arrObj) {
    arrObj.forEach(liEl => {
      const liItem = document.createElement('li');
      preview.appendChild(liItem);
    });
    const liItems = Array.from(document.querySelectorAll('li'));
    liItems.forEach((li, i) => {
    const liImg = document.createElement('img');
    liImg.setAttribute('src', arrObj[i].preview);
    liImg.setAttribute('alt', arrObj[i].alt);
    liImg.dataset.fullview = arrObj[i].fullview;
    li.appendChild(liImg);
    });
  }(arrObj));

  const liImg = Array.from(document.querySelectorAll('img'));
  const fullImg = document.createElement('img');

  fullImg.setAttribute('src', liImg[0].dataset.fullview);
  fullImg.setAttribute('alt', liImg[0].alt);
  full.appendChild(fullImg);
  liImg[0].parentNode.classList.add('preview_selected');

  const switcher = (e) => {

    const target = e.target;

    if (target.nodeName !== 'IMG') return;

    const liImgs = Array.from(document.querySelectorAll('li'));
    
    liImgs.forEach(li => li.classList.remove('preview_selected'));
    target.parentNode.classList.add('preview_selected');
    fullImg.setAttribute('src', arrObj.find(imgs => imgs.preview == target.getAttribute('src')).fullview);
    fullImg.setAttribute('alt', arrObj.find(imgs => imgs.preview == target.getAttribute('src')).alt);
  }

  preview.addEventListener('click', switcher);
}

buildGallery(galleryItems);

