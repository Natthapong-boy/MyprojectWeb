let images = []; // จะเก็บ array ที่ส่งมา
let currentIndex = 0;

function openLightbox(imageArray) {
    images = imageArray;
    currentIndex = 0;
    document.getElementById('lightbox-img').src = images[currentIndex];
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    images = []; 
    currentIndex = 0;
}

function nextImage() {
    if (images.length > 0) {
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById('lightbox-img').src = images[currentIndex];
    }
}

function prevImage() {
    if (images.length > 0) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        document.getElementById('lightbox-img').src = images[currentIndex];
    }
}

document.getElementById('lightbox-img').addEventListener('wheel', (e) => {
    if (e.deltaY < 0) { // เลื่อนขึ้น
        prevImage();
    } else { // เลื่อนลง
        nextImage();
    }
});
