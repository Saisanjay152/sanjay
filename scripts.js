const seats = document.querySelectorAll('.seat');
const totalCostDisplay = document.getElementById('total-cost');
const selectedSeatsDisplay = document.getElementById('selected-seats');

let selectedSeats = [];
let totalCost = 0;

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        const seatPrice = parseInt(seat.getAttribute('data-price'));

        if (selectedSeats.includes(seat)) {
            seat.classList.remove('selected');
            selectedSeats = selectedSeats.filter(s => s !== seat);
            totalCost -= seatPrice;
        } else {
            seat.classList.add('selected');
            selectedSeats.push(seat);
            totalCost += seatPrice;
        }

        updateDisplay();
    });
});

function updateDisplay() {
    selectedSeatsDisplay.textContent = selectedSeats.length;
    totalCostDisplay.textContent = totalCost;
}
