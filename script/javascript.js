const allBtn = document.getElementsByClassName("add-btn");
let count = 0;

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count = count + 1;
    document.getElementById("seat-count").innerText = count;

    const seatTicket = e.target.parentNode.childNode[1].innerText;

    setInnerTex("seat-count", count);
  });
}

function setInnerTex(id, value) {
  document.getElementById(id).innerText = value;
}

for (const seat of seatsAll) {
  seat.addEventListener("click", function () {
    const selectSeats = document.getElementById("title-seats");
    const li = document.createElement("li");
    const seatsDetails = allSeat.children[0].children[1].children.innerText;
    li.innerText = seatsDetails;
    selectSeats.appendChild(li);
  });
}

countedPrice = totalPrice - (totalPrice * discountPercentage) / 100;
