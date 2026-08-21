// =========================
// BIRTHDAY PAGE
// =========================

const openButton = document.getElementById("openButton");
const messageSection = document.getElementById("message");


// =========================
// OPEN BUTTON
// =========================

openButton.addEventListener("click", () => {

    messageSection.scrollIntoView({
        behavior: "smooth"
    });

});


// =========================
// REVEAL ANIMATIONS
// =========================

const revealElements = document.querySelectorAll(
    ".message-card, .section-heading, .photo-placeholder, .final-content"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


// =========================
// LITTLE STAR PARTICLES
// =========================

const starsContainer = document.querySelector(".stars");

for (let i = 0; i < 45; i++) {

    const star = document.createElement("span");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 4 + "s";

    star.style.animationDuration =
        2 + Math.random() * 4 + "s";

    starsContainer.appendChild(star);
}


// =========================
// PARALLAX GLOW
// =========================

document.addEventListener("mousemove", (event) => {

    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    const glow1 = document.querySelector(".glow-1");
    const glow2 = document.querySelector(".glow-2");

    glow1.style.transform =
        `translate(${x * 30}px, ${y * 30}px)`;

    glow2.style.transform =
        `translate(${-x * 25}px, ${-y * 25}px)`;

});

const loveButton = document.getElementById("loveButton");
const loveText = document.getElementById("loveText");

loveButton.addEventListener("click", () => {
    loveText.textContent = " я тебя люблю ♡";

    loveText.classList.add("show");

    loveButton.textContent = "♥";
});