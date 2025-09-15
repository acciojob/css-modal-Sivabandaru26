const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalBtn = document.querySelector('.close-modal');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';  // Corrected here
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
