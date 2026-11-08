// ========================================
// FASTINK STUDIO
// SCROLL & INTERACTION
// ========================================


// ========================================
// 1. CUSTOM CURSOR
// ========================================

const cursor = document.querySelector('.cursor');

if (cursor && window.matchMedia('(pointer:fine)').matches) {

    window.addEventListener('mousemove', (e) => {

        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

    });

}


// ========================================
// 2. SCROLL REVEAL
// ========================================

const revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-zoom'
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add('show');

                // Animasi hanya sekali
                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


// ========================================
// 3. SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener('click', (e) => {

        const selector = link.getAttribute('href');
        const target = document.querySelector(selector);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    });

});


// ========================================
// 4. NAVBAR SCROLL EFFECT
// ========================================

const topbar = document.querySelector('.topbar');

function updateNavbar() {

    if (!topbar) return;

    if (window.scrollY > 50) {

        topbar.classList.add('scrolled');

    } else {

        topbar.classList.remove('scrolled');

    }

}

window.addEventListener(
    'scroll',
    updateNavbar,
    { passive: true }
);

updateNavbar();


// ========================================
// 5. HERO PARALLAX
// ========================================

const heroArt = document.querySelector('.hero-art');
const heroRing = document.querySelector('.hero-ring');

if (
    heroArt &&
    window.matchMedia('(pointer:fine)').matches
) {

    window.addEventListener('mousemove', (e) => {

        const x =
            (window.innerWidth / 2 - e.clientX) / 45;

        const y =
            (window.innerHeight / 2 - e.clientY) / 45;


        heroArt.style.transform =
            `translate3d(${x}px, ${y}px, 0)`;


        if (heroRing) {

            heroRing.style.transform =
                `translate3d(${-x * 0.7}px, ${-y * 0.7}px, 0)`;

        }

    });

}


// ========================================
// 6. PROJECT IMAGE TILT
// ========================================

const projectImages =
    document.querySelectorAll('.project-image');


if (window.matchMedia('(pointer:fine)').matches) {

    projectImages.forEach((image) => {

        image.addEventListener('mousemove', (e) => {

            const rect =
                image.getBoundingClientRect();


            const x =
                (e.clientX - rect.left) /
                rect.width - 0.5;


            const y =
                (e.clientY - rect.top) /
                rect.height - 0.5;


            image.style.transform =
                `perspective(900px)
                 rotateX(${y * -3}deg)
                 rotateY(${x * 3}deg)
                 scale(1.015)`;

        });


        image.addEventListener('mouseleave', () => {

            image.style.transform =
                'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';

        });

    });

}


// ========================================
// 7. ACTIVE NAVIGATION
// ========================================

const sections =
    document.querySelectorAll('section[id]');

const navLinks =
    document.querySelectorAll(
        '.topbar nav a[href^="#"]'
    );


const sectionObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;


                navLinks.forEach((link) => {

                    link.classList.remove('active');

                });


                const activeLink =
                    document.querySelector(
                        `.topbar nav a[href="#${entry.target.id}"]`
                    );


                if (activeLink) {

                    activeLink.classList.add('active');

                }

            });

        },

        {
            threshold: 0.4
        }

    );


sections.forEach((section) => {

    sectionObserver.observe(section);

});


// ========================================
// 8. PAGE LOADED
// ========================================

window.addEventListener('load', () => {

    document.body.classList.add('loaded');

});


// ========================================
// 9. REDUCED MOTION
// ========================================

const reducedMotion =
    window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;


if (reducedMotion) {

    revealElements.forEach((element) => {

        element.classList.add('show');

    });

}
