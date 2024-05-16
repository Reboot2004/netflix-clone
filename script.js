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

