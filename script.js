console.log("Script.js loaded!");
document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.createElement('div');
    cookieBanner.className = 'cookie-banner';
    cookieBanner.innerHTML = `
        <style>
            .cookie-banner {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                color: #fff;
                text-align: center;
                padding: 1rem;
                z-index: 1000;
            }

            .cookie-banner button {
                background-color: #000;
                color: #fff;
                border: 1px solid #fff;
                padding: 0.5rem 1rem;
                cursor: pointer;
                border-radius: 3px;
                transition: background-color 0.3s;
            }

            .cookie-banner button:hover {
                background-color: #555;
            }
        </style>
        <p>We use cookies to give you the best experience. <button class="accept-cookies">Accept cookies</button></p>
    `;
    document.body.appendChild(cookieBanner);

    document.querySelector('.accept-cookies').addEventListener('click', () => {
        cookieBanner.style.display = 'none';
    });
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Function to toggle full-screen mode
function toggleFullScreen() {
    var video = document.getElementById('bg-video');
    if (!document.fullscreenElement && !document.webkitFullscreenElement &&
        !document.mozFullScreenElement && !document.msFullscreenElement) {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

document.getElementById('bg-video').addEventListener('play', function () {
    this.classList.add('playing');
});

document.getElementById('bg-video').addEventListener('pause', function () {
    this.classList.remove('playing');
});

function initializePage() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

}

document.addEventListener('DOMContentLoaded', initializePage);
