
document.addEventListener('DOMContentLoaded', () => {
    const details = document.querySelectorAll('details');
    const openAllBtn = document.getElementById('open-all');
    const closeAllBtn = document.getElementById('close-all');
    const searchInput = document.getElementById('faq-search');

    // Smooth animation for details open/close
    details.forEach(detail => {
        detail.addEventListener('toggle', function() {
            if (this.open) {
                this.style.maxHeight = this.scrollHeight + 'px';
            } else {
                this.style.maxHeight = null;
            }
        });
    });

    // Open All button
    if(openAllBtn) {
        openAllBtn.addEventListener('click', () => {
            details.forEach(detail => {
                detail.open = true;
            });
        });
    }

    // Close All button
    if(closeAllBtn) {
        closeAllBtn.addEventListener('click', () => {
            details.forEach(detail => {
                detail.open = false;
            });
        });
    }

    // Search/Filter
    if(searchInput) {
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            details.forEach(detail => {
                const question = detail.querySelector('summary').textContent.toLowerCase();
                const answer = detail.querySelector('.faq-answer').textContent.toLowerCase();
                if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                    detail.style.display = 'block';
                } else {
                    detail.style.display = 'none';
                }
            });
        });
    }
});
