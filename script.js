let currentIndex = 0;

function moverCarrossel(direction) {
    const container = document.querySelector('.carrossel-container');
    const items = document.querySelectorAll('.carrossel-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex >= totalItems) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    }

    const offset = -currentIndex * 100;
    container.style.transform = `translateX(${offset}%)`;
}