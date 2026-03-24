const formBox = document.querySelector(".form-box");

function showRegister() {
    formBox.classList.add("active");
}

function showLogin() {
    formBox.classList.remove("active");
}

// What We Offer Section Interactions
document.addEventListener('DOMContentLoaded', function() {
    const offerCards = document.querySelectorAll('.offer-card');

    offerCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            offerCards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            this.classList.add('active');
        });
    });
});
