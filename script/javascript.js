const allSeat = document.getElementsByClassName("add-btn");

for (const seat of allSeat) {
  seat.addEventListener("click", function (event) {
    const name = event.target.parentNode.childNodes[1].innerText;

    const economy = event.target.parentNode.childNodes[3].innerText;

    const price = event.target.parentNode.childNodes[5].innerText;

    console.log(event.target.parentNode.childNodes);

    const selectedContainer = document.getElementById(
      "selected-seat-container"
    );

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
  if (update == undefined) {
    document.getElementById("grand-total").innerText = totalPrice;
  } else {
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode == "NEW15") {
      const discountedPrice = totalPrice * 0.15;
      document.getElementById("grand-total").innerText =
        totalPrice - discountedPrice;
    } else if (couponCode == "Couple 20") {
      const discountedPrice = totalPrice * 0.2;
      document.getElementById("grand-total").innerText =
        totalPrice - discountedPrice;
    } else {
      alert("Please enter valid coupon code");
    }
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
