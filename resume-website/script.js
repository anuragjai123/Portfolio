
function openModal(id) {
  document.getElementById(id).style.display = "block";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}


document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});