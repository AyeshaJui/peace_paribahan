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

// const allBtn = document.getElementsByClassName("add-btn");
// let count = 0;
// let totalPrice = 0;
// let seatsLeft = 36;

// for (const btn of allBtn) {
//   btn.addEventListener("click", function (e) {
//     count = count + 1;
//     document.getElementById("seat-count").innerText = count;

//     const seatPrice = 550;
//     totalPrice += seatPrice;
//     document.getElementById("total-price").innerText = totalPrice;

//     seatsLeft -= 1;
//     document.getElementById("seats-left").innerText = seatsLeft;

//     applyDiscount();
//   });
// }

// function applyDiscount() {
//   const couponInput = document.getElementById("coupon-code").value;
//   let discountPercentage = 0;

//   if (couponInput === "NEW15") {
//     discountPercentage = 15;
//   } else if (couponInput === "Couple20") {
//     discountPercentage = 20;
//   }

//   const discountedPrice = totalPrice - (totalPrice * discountPercentage) / 100;
//   document.getElementById("discounted-price").innerText = discountedPrice;
// }
