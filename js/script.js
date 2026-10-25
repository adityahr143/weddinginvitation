/* =========================================
   WEDDING INVITATION JAVASCRIPT
========================================= */


/* =========================================
   CREATE FALLING PETALS
========================================= */

const petalsContainer = document.querySelector(".petals-container");

for (let i = 0; i < 25; i++) {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    // Random horizontal position
    petal.style.left = Math.random() * 100 + "%";

    // Random animation duration
    petal.style.animationDuration =
        (5 + Math.random() * 7) + "s";

    // Random delay
    petal.style.animationDelay =
        Math.random() * 5 + "s";

    // Random size
    const size = 7 + Math.random() * 8;

    petal.style.width = size + "px";
    petal.style.height = (size * 1.5) + "px";

    petalsContainer.appendChild(petal);
}


/* =========================================
   OPEN INVITATION
========================================= */

const openButton =
    document.getElementById("openInvitation");

const openingSection =
    document.getElementById("opening-section");

const mainInvitation =
    document.getElementById("main-invitation");


openButton.addEventListener("click", function () {

    openingSection.classList.add("hide");

    setTimeout(() => {

        mainInvitation.scrollIntoView({
            behavior: "smooth"
        });

    }, 600);

});

/* =========================================
   WEDDING COUNTDOWN
========================================= */

const weddingDate =
    new Date("January 29, 2027 00:00:00").getTime();


const countdownTimer =
    setInterval(function () {

        const now =
            new Date().getTime();

        const distance =
            weddingDate - now;


        if (distance <= 0) {

            clearInterval(countdownTimer);

            document.getElementById("countdown-days")
                .textContent = "00";

            document.getElementById("countdown-hours")
                .textContent = "00";

            document.getElementById("countdown-minutes")
                .textContent = "00";

            document.getElementById("countdown-seconds")
                .textContent = "00";

            return;
        }


        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (distance %
                    (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (distance %
                    (1000 * 60 * 60)) /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (distance %
                    (1000 * 60)) /
                1000
            );


        document.getElementById("countdown-days")
            .textContent =
            String(days).padStart(2, "0");


        document.getElementById("countdown-hours")
            .textContent =
            String(hours).padStart(2, "0");


        document.getElementById("countdown-minutes")
            .textContent =
            String(minutes).padStart(2, "0");


        document.getElementById("countdown-seconds")
            .textContent =
            String(seconds).padStart(2, "0");

    }, 1000);

/* =========================================
   KEEP PETALS ACTIVE ON ENTIRE WEBSITE
========================================= */

if (petalsContainer) {

    document.body.appendChild(
        petalsContainer
    );

}

/* =========================================
   EVENT PHOTOS + HINDI EVENT NAMES
========================================= */

const eventCards =
    document.querySelectorAll(".event-card");


const eventData = {

    Haldi: {
        image: "image/haldi.png",
        hindi: "हल्दी समारोह"
    },

    Mehndi: {
        image: "image/mehndiandsangeet.png",
        hindi: "मेहंदी-संगीत समारोह"
    },

    Wedding: {
        image: "image/wedding.png",
        hindi: "शुभ विवाह"
    }

};


/* Add photos to existing events */

eventCards.forEach(function (card) {

    const titleElement =
        card.querySelector(".event-content h3");

    if (!titleElement) {
        return;
    }


    const eventName =
        titleElement.textContent.trim();


    const data =
        eventData[eventName];


    if (!data) {
        return;
    }


    /* Photo */

    const photoWrapper =
        document.createElement("div");

    photoWrapper.className =
        "event-photo-wrapper";


    const photo =
        document.createElement("img");

    photo.src =
        data.image;

    photo.alt =
        eventName + " ceremony";

    photo.className =
        "event-photo";


    photoWrapper.appendChild(photo);


    card.insertBefore(
        photoWrapper,
        card.querySelector(".event-content")
    );


    /* Hindi name */

    const hindiName =
        document.createElement("p");

    hindiName.className =
        "event-hindi-name";

    hindiName.textContent =
        data.hindi;


    titleElement.insertAdjacentElement(
        "afterend",
        hindiName
    );

});

