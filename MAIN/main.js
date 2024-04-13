const modal = document.querySelector('#modal-id'); // Replace with your modal ID
const iframe = `<iframe src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>`;

function showModal() {
    modal.innerHTML = iframe;
}

function hideModal() {
    modal.innerHTML = '';
}
