document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    let currentIndex = 0;

    cards.forEach((card, index) => {
        if (index !== 0) {
            card.style.display = "none";
        }
    });

    cards.forEach((card, index) => {
        card.addEventListener("click", function () {
            card.style.display = "none";

            currentIndex++;
            if (currentIndex < cards.length) {
                cards[currentIndex].style.display = "block";
            } else {
                currentIndex = 0;
                cards.forEach((c, i) => {
                    c.style.display = i === 0 ? "block" : "none";
                });
            }
        });
    });
});