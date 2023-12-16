document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.querySelector('#booking-form form');
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you for booking with us!';


bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();
        bookingForm.parentElement.appendChild(thankYouMessage);
        gsap.to(bookingForm, { opacity: 0, duration: 0.5, onComplete: () => bookingForm.style.display = 'none' });
    });

document.getElementById('screenshotBtn').addEventListener('click', function() {
    takeScreenshot();
});

function takeScreenshot() {
    html2canvas(document.body).then(function(canvas) {
        // Convert canvas to data URL (JPEG format with quality set to 1)
        var dataURL = canvas.toDataURL('image/jpeg', 1.0);

        // Create a link element and trigger a download
        var link = document.createElement('a');
        link.href = dataURL;
        link.download = 'screenshot.jpg';
        link.click();
    });
}

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
