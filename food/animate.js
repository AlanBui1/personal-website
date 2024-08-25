const observer = new IntersectionObserver(cards => {
    cards.forEach(card => {
        if (card.isIntersecting) {
            card.target.classList.add('card-animation');
            return;
        }

        card.target.classList.remove('card-animation');
    });
});

const cards = document.querySelectorAll('.card');

// Loop over the elements and add each one to the observer
cards.forEach((element) => observer.observe(element));