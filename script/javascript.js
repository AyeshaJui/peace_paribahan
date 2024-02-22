const allSeat = document.getElementsByClassName("add-btn");

for (const seat of allSeat) {
  seat.addEventListener("click", function (event) {
    if (event.target.classList.contains("disabled")) {
      return;
    }
    const name = event.target.parentNode.childNodes[1].innerText;

    const economy = event.target.parentNode.childNodes[3].innerText;

    const price = event.target.parentNode.childNodes[5].innerText;

    const selectedContainer = document.getElementById(
      "selected-seat-container"
    );

    event.target.classList.add("disabled");

    const seatCount = getConvertedValue("select-seat");
    if (seatCount + 1 > 8) {
      alert("Seat limit is over");
      return;
    }
    event.target.parentNode.style.backgroundColor = "#1DD100";

    const selectedSeat = getConvertedValue("select-seat");
    document.getElementById("select-seat").innerText = selectedSeat + 1;

    const leftSeat = getConvertedValue("seats-left");
    document.getElementById("seats-left").innerText = leftSeat - 1;

    const div = document.createElement("div");
    div.classList.add("selected-seats");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = name;
    p2.innerText = economy;
    p3.innerText = price;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    selectedContainer.appendChild(div);
    totalCost(price);
    updateGrandTotal();
  });
}

function updateGrandTotal(update) {
  const totalPrice = getConvertedValue("total-price");
  const couponCodeInput = document.getElementById("coupon-code");
  const applyCouponButton = document.getElementById("apply-btn");

  if (update == undefined) {
    document.getElementById("grand-total").innerText = totalPrice;
  } else {
    const couponCode = couponCodeInput.value;
    if (couponCode == "NEW15" || couponCode == "Couple 20") {
      const discountedPrice =
        couponCode == "NEW15" ? totalPrice * 0.15 : totalPrice * 0.2;
      document.getElementById("grand-total").innerText =
        totalPrice - discountedPrice;

      couponCodeInput.disabled = true;
      applyCouponButton.style.display = "none";
    } else {
      alert("Please enter valid coupon code");
    }
  }
}

const nameInput = document.getElementById("pname");
const numberInput = document.getElementById("pnumber");
const nextButton = document.getElementById("pbutton");

nameInput.addEventListener("input", checkInputs);
numberInput.addEventListener("input", checkInputs);

function checkInputs() {
  const name = nameInput.value.trim();
  const number = numberInput.value.trim();

  if (name !== "" && number !== "") {
    nextButton.disabled = false;
  } else {
    nextButton.disabled = true;
  }
}

function totalCost(value) {
  const totalPrice = getConvertedValue("total-price");
  const sum = totalPrice + parseInt(value);
  document.getElementById("total-price").innerText = sum;
}

function getConvertedValue(id) {
  const price = document.getElementById(id).innerText;
  const convertPrice = parseInt(price);
  return convertPrice;
}
