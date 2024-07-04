document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const answer = item.nextElementSibling;
        const isActive = item.classList.contains('active');
        if (!isActive) {
            answer.style.display = 'block';
            item.classList.add('active');
        } else {
            answer.style.display = 'none';
            item.classList.remove('active');
        }
    });
});