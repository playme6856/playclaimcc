const url = window.location.href;

let bonus = "350";

if (
  url.includes("bonus500") ||
  new URLSearchParams(window.location.search).get("bonus") === "500"
) {
  bonus = "500";
}

document.getElementById("bonus-id").innerText =
  `Claim Your ${bonus}% Bonus`;

document.getElementById("deposit-id").innerText =
  `Deposit Bonus (${bonus}%)`;