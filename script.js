document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.querySelector('#booking-form form');
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you for booking with us!';


bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();
        bookingForm.parentElement.appendChild(thankYouMessage);
        gsap.to(bookingForm, { opacity: 0, duration: 0.5, onComplete: () => bookingForm.style.display = 'none' });
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


document.getElementById('screenshotBtn').addEventListener('click', function() {
    takeScreenshot();
});

function takeScreenshot() {
    // Create a temporary div for the section content
    var sectionContent = document.getElementById('home-section').cloneNode(true);
    var tempDiv = document.createElement('div');
    tempDiv.appendChild(sectionContent);

    // Append the temporary div to the document body
    document.body.appendChild(tempDiv);

    // Use html2canvas to capture the screenshot of the temporary div
    html2canvas(tempDiv).then(function(canvas) {
        // Convert canvas to data URL (JPEG format with quality set to 1)
        var dataURL = canvas.toDataURL('image/jpeg', 1.0);

        // Remove the temporary div from the document body
        document.body.removeChild(tempDiv);

        // Create a link element and trigger a download
        var link = document.createElement('a');
        link.href = dataURL;
        link.download = 'screenshot.jpg';
        link.click();
    });
}

document.getElementById('screenshotBtn').addEventListener('click', function() {
    takeScreenshot();
});

function takeScreenshot() {
    window.print();
}
