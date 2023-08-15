const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        const label = checkbox.nextElementSibling;
        if (checkbox.checked) {
            label.classList.add('completed');
        } else {
            label.classList.remove('completed');
        }
    });
});