document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.querySelector('#booking-form form');
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you for booking with us!';


bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();
        bookingForm.parentElement.appendChild(thankYouMessage);
        gsap.to(bookingForm, { opacity: 0, duration: 0.5, onComplete: () => bookingForm.style.display = 'none' });
    });

    const screenshotBtn = document.getElementById('screenshot-btn');
    const bookNowLink = document.querySelector('nav a');

    gsap.to(screenshotBtn, { scale: 1.1, yoyo: true, repeat: -1, duration: 1 });

    screenshotBtn.addEventListener('click', function () {
        gsap.to(screenshotBtn, { scale: 1.2, duration: 0.3, yoyo: true, repeat: 1 });
        html2canvas(document.body).then(function (canvas) {
            const screenshotImage = document.createElement('img');
            screenshotImage.src = canvas.toDataURL();
            screenshotSection.appendChild(screenshotImage);
        });
    });

    gsap.to(bookNowLink, { scale: 1.1, yoyo: true, repeat: -1, duration: 1 });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                gsap.to(window, { duration: 1, scrollTo: { y: targetSection, autoKill: false } });
            }
        });
    });

    document.addEventListener('scroll', function () {
        gsap.to('body', { backgroundColor: getRandomColor(), duration: 0.2 });
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
