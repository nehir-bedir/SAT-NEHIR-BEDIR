

document.addEventListener("DOMContentLoaded", () => {
    const periodButtons = document.querySelectorAll('.period-button');
    const periodContents = document.querySelectorAll('.period-content');

    periodButtons.forEach(button => {
        button.addEventListener('click', function() {
            periodButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            periodContents.forEach(content => {
                content.style.display = 'none';
            });

            const period = this.getAttribute('data-period');
            const contentToShow = document.getElementById(`${period}-detail`);

            if (contentToShow) {
                contentToShow.style.display = 'block';
                contentToShow.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});