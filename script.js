/* =========================================
   WHITE ROCK HOTEL & SUITES
   JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    const isOpen =
        navLinks.classList.toggle("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* Close menu after clicking a link */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });



/* =========================================
   SCROLL ANIMATIONS
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".section, .room-card, .amenity-card, .review-card"
    );


const animationObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    animationObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }
    );


animatedElements.forEach(element => {

    animationObserver.observe(element);

});



/* =========================================
   GALLERY LIGHTBOX
========================================= */

const galleryItems =
    document.querySelectorAll(".gallery-item");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image =
            item.dataset.image;

        lightboxImage.src = image;

        lightbox.classList.add("active");

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );

    });

});


function closeLightbox() {

    lightbox.classList.remove("active");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    lightboxImage.src = "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener(
    "click",
    event => {

        if (event.target === lightbox) {

            closeLightbox();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeLightbox();

        }

    }
);



/* =========================================
   BOOKING FORM
========================================= */

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const phone =
            document.getElementById("phone").value;

        const checkin =
            document.getElementById("checkin").value;

        const checkout =
            document.getElementById("checkout").value;

        const room =
            document.getElementById("room").value;

        const message =
            document.getElementById("message").value;


        const whatsappMessage =
`Hello White Rock Hotel & Suites.

I would like to make a reservation.

Name: ${name}

Phone: ${phone}

Room: ${room}

Check-in: ${checkin}

Check-out: ${checkout}

Additional request:
${message || "None"}

Thank you.`;


        const whatsappURL =
            "https://wa.me/2347057096428?text=" +
            encodeURIComponent(
                whatsappMessage
            );


        window.open(
            whatsappURL,
            "_blank"
        );

    }
);



/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* =========================================
   VIDEO FALLBACK
========================================= */

const videos =
    document.querySelectorAll("video");


videos.forEach(video => {

    video.addEventListener(
        "error",
        () => {

            console.log(
                "Video could not be loaded:",
                video.currentSrc
            );

        }
    );

});