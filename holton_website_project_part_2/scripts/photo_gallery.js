// Select elements
const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeButton = document.querySelector('.close');

// Open lightbox
gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const src = e.target.getAttribute('src');
        const caption = e.target.closest('.photo').getAttribute('data-caption');

        lightboxImage.setAttribute('src', src);
        lightboxCaption.textContent = caption;

        lightbox.classList.add('visible');
    }
});

// Close lightbox
closeButton.addEventListener('click', () => {
    lightbox.classList.remove('visible');
});

// Close lightbox on outside click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('visible');
    }
});
