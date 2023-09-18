const checkboxes = document.querySelectorAll('.checkboxInput');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        const noteId = checkbox.getAttribute('data-no');
        const note = document.getElementById(noteId);
const paraContainer = document.querySelector(`[data-container-id="${noteId}"]`);
if (note && paraContainer) {
    note.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    paraContainer.style.backgroundColor = checkbox.checked ? '#ff0060' : '#e1ff01';
    
} 
    });
});
