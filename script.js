const reviewForm = document.getElementById('reviewForm');
const reviewList = document.getElementById('reviewList');

reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const foodSpot = document.getElementById('foodSpot').value;
    const review = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;

    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
    reviewItem.innerHTML = `
        <h3>${foodSpot} - ${rating} ⭐</h3>
        <p>${review}</p>
        <small>Reviewed by: ${name}</small>
    `;

    reviewList.appendChild(reviewItem);

    reviewForm.reset();
});
