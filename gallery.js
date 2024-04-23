document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal');
    const modalImage = document.getElementById('modalImage');
    const galleryImages = document.querySelectorAll('.gallery-image');
    const closeButton = document.querySelector('.close');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentImageIndex = 0;

    // Fungsi untuk menampilkan modal dengan gambar yang diklik
    function openModal(imageSrc) {
        modal.style.display = 'block';
        modalImage.src = imageSrc;
    }

    // Fungsi untuk menutup modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Fungsi untuk menampilkan gambar berikutnya
    function nextImage() {
        currentImageIndex++;
        if (currentImageIndex >= galleryImages.length) {
            currentImageIndex = 0;
        }
        modalImage.src = galleryImages[currentImageIndex].src;
    }

    // Fungsi untuk menampilkan gambar sebelumnya
    function prevImage() {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = galleryImages.length - 1;
        }
        modalImage.src = galleryImages[currentImageIndex].src;
    }

    // Menutup modal saat tombol close diklik atau area di luar gambar di-klik
    modal.addEventListener('click', function(event) {
        if (event.target === modal || event.target.classList.contains('close')) {
            closeModal();
        }
    });

    // Menambahkan event listener untuk setiap gambar dalam galeri
    galleryImages.forEach((image, index) => {
        image.addEventListener('click', function() {
            openModal(image.src);
            currentImageIndex = index;
        });
    });

    // Event listener untuk tombol Next
    nextButton.addEventListener('click', nextImage);

    // Event listener untuk tombol Previous
    prevButton.addEventListener('click', prevImage);

    // Event listener untuk tombol Close
    closeButton.addEventListener('click', closeModal);

    // Event listener untuk menutup modal saat menekan tombol escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});
