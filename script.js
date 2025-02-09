let clickCount = 0;

function moveButton() {
    clickCount++;
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    if (clickCount < 3) {
        const x = Math.random() * (window.innerWidth - yesButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - yesButton.offsetHeight);
        yesButton.style.position = 'absolute';
        yesButton.style.left = `${x}px`;
        yesButton.style.top = `${y}px`;
    } else {
        unlockGallery();
    }
}

function unlockGallery() {
    const gallery = document.getElementById('gallery');
    const cat = document.getElementById('cat');
    gallery.classList.remove('hidden');
    cat.classList.remove('hidden');
    document.getElementById('question').classList.add('hidden');
}

document.getElementById('imageUpload').addEventListener('change', function(event) {
    const imageContainer = document.getElementById('imageContainer');
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            imageContainer.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
});