// const showalertmessage = document.getElementById("showalertmessage");
const showalertbtn1 = document.getElementById("show-copied-11");
const showalertbtn2 = document.getElementById("show-copied-alert");

const openBtn = document.getElementById("openModalBtn");
const openbtn2 = document.getElementById("openModalBtn2");
const closeBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");
const claim = document.getElementById("claim");
const claimBtn = document.getElementById("claim-bonus-btn");
const closeClaimBtn = document.getElementById("claim-btn-close");
const claimModelContent = document.getElementById("claim-bonus-content");
const loadinganimation = document.getElementById("loading-claim");
const currenyPops1 = document.getElementById("currencyPopup1");
const currenyPops2 = document.getElementById("currencyPopup2");
const currenyPops3 = document.getElementById("currencyPopup3");
const currenyPops4 = document.getElementById("currencyPopup4");
const currencyPops5 = document.getElementById("coin-toggle-button-pops");
const currencyPops6 = document.getElementById("browse-model");
const bodyHiddenscroll = document.getElementById("body-scroll");
const confirmationSpan = document.querySelector(".confirmation-coin");
const reset_button = document.querySelector(".reset-button");
const chevrown_down = document.getElementsByClassName("chevrown-down");
const chevrown_down2 = document.getElementsByClassName("chevrown-down2");

// imprt img

// Open modal on button click
openBtn.addEventListener("click", () => {
  bodyHiddenscroll.classList.add("body-scroll-hidden");
  modal.style.display = "flex";
});

openbtn2.addEventListener("click", () => {
  modal.style.display = "flex";
  bodyHiddenscroll.classList.add("body-scroll-hidden");
});

currenyPops1.addEventListener("click", () => {
  modal.style.display = "flex";
  bodyHiddenscroll.classList.add("body-scroll-hidden");
});
currenyPops2.addEventListener("click", () => {
  modal.style.display = "flex";
  bodyHiddenscroll.classList.add("body-scroll-hidden");
});
currenyPops3.addEventListener("click", () => {
  modal.style.display = "flex";
  bodyHiddenscroll.classList.add("body-scroll-hidden");
});
currenyPops4.addEventListener("click", () => {
  modal.style.display = "flex";
  bodyHiddenscroll.classList.add("body-scroll-hidden");
});
currencyPops5.addEventListener("click", () => {
  modal.style.display = "flex";
  bodyHiddenscroll.classList.add("body-scroll-hidden");
});
// Mobile bottom nav "Browse" button opens the dedicated mobile sidebar
// (Casino/Sports + browse menu), not the wallet deposit modal - it was
// previously wired to the same handler as the wallet-opening buttons above.
const mobileBrowseSidebar = document.getElementById("mobile-browse-sidebar");
currencyPops6.addEventListener("click", () => {
  if (mobileBrowseSidebar) {
    mobileBrowseSidebar.classList.add("active");
    bodyHiddenscroll.classList.add("body-scroll-hidden");
  }
});
if (mobileBrowseSidebar) {
  const mobileBrowseSidebarClose = mobileBrowseSidebar.querySelector(
    '[aria-label="Close sidebar"]',
  );
  if (mobileBrowseSidebarClose) {
    mobileBrowseSidebarClose.addEventListener("click", () => {
      mobileBrowseSidebar.classList.remove("active");
      bodyHiddenscroll.classList.remove("body-scroll-hidden");
    });
  }
}
// Close modal on close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  bodyHiddenscroll.classList.remove("body-scroll-hidden");
});
let timeerid;
// showalertmessage.addEventListener("click", () => {
//   clearTimeout(timeerid); // clears previous timer if any

//   showalertbtn1.classList.remove("hide-alert");
//   showalertbtn2.classList.remove("hide-alert");

//   timeerid = setTimeout(() => {
//     showalertbtn1.classList.add("hide-alert");
//     showalertbtn2.classList.add("hide-alert");
//   }, 2000);
// });

// Optional: close modal if user clicks outside the content

// 🔥 Open modal automatically when page loads

window.addEventListener("load", () => {
  // show pre loader
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none"; // Hide preloader after loading
  modal.style.display = "none";
  // show model of claim
  claim.style.display = "flex";
});

// Claim button functionality
claimBtn.addEventListener("click", () => {
  claimModelContent.style.display = "none"; // Hide claim content
  loadinganimation.style.display = "inline-flex";

  // after 4 seconds
  setTimeout(() => {
    // Hide claim modal
    claim.style.display = "none";
    // Show modal
    modal.style.display = "flex";
    bodyHiddenscroll.classList.add("body-scroll-hidden");
  }, 3000);
});

// Close claim modal
closeClaimBtn.addEventListener("click", () => {
  // Hide modal
  claim.style.display = "none";
});

const coins = [
  {
    confirmations: 2,
    deposit: "Deposit",
    currency: "USDT",
    name: "USD Tether",
    icon: `
        <svg data-ds-icon="USDT" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#26a17b" d="M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0"></path><path fill="#fff" d="M11.08 10.78a17 17 0 0 1-2.2 0c-2.19-.1-3.82-.48-3.82-.93S6.7 9 8.88 8.9v1.49a17 17 0 0 0 2.2 0V8.91c2.18.1 3.81.48 3.81.94s-1.63.83-3.8.93m0-2.02V7.43h3.05V5.4h-8.3v2.03h3.05v1.33c-2.47.11-4.34.6-4.34 1.19s1.87 1.08 4.34 1.2v4.26h2.2v-4.27c2.47-.11 4.33-.6 4.33-1.2 0-.58-1.86-1.07-4.33-1.18"></path></svg>
        `,
    address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
    reset: false,

    networks: [
      {
        name: "ETH",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/eth.png",
        reset: true,
        fullname: "ETH &nbsp;- Ethereum (ERC20)",
      },
      {
        name: "BSC",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/bsc.png",
        reset: true,
        fullname: "BSC &nbsp;- BNB Smart Chain (BEP20)",
      },
      {
        name: "POLYGON",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/pol.png",
        reset: true,
        fullname: "POL &nbsp;- Polygon",
      },
      {
        name: "TRX",
        address: "TAVmmS6eEoy6RrtUuQg2gDx3ezRfPo24yD",
        qrcode: "/images/qrcodes/trx.png",
        reset: true,
        fullname: "TRX &nbsp;- Tron (TRC20)",
      },

      {
        name: "SOL",
        address: "6KAqsJpGqp1SZ4zXkYBSpCuaMfC8C98zCBUvfKznAAKn",
        qrcode: "/images/qrcodes/sol.png",
        reset: true,
        fullname: "SOL &nbsp;- Solana",
      },
    ],
  },

  {
    confirmations: 1,
    deposit: "Deposit",
    currency: "BTC",
    name: "Bitcoin",
    icon: `
        <svg data-ds-icon="BTC" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#f7931a" d="M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0"></path><path fill="#fff" d="M14.04 8.89c.18-1.18-.72-1.82-1.95-2.24l.4-1.6-.97-.24-.4 1.56-.77-.19.4-1.56-.98-.24-.4 1.6-.62-.15-1.34-.33-.25 1.03s.72.17.7.18a.5.5 0 0 1 .45.56L7.86 9.1l.1.04-.1-.03-.64 2.53a.35.35 0 0 1-.44.24l-.7-.18-.5 1.1 1.27.32.7.18-.4 1.62.97.24.4-1.6.77.2-.4 1.6.97.24.4-1.62c1.67.32 2.91.19 3.44-1.3.42-1.22-.02-1.91-.9-2.37.64-.13 1.12-.55 1.24-1.41M11.82 12c-.3 1.21-2.33.56-2.99.4l.53-2.14c.66.16 2.78.48 2.46 1.74m.3-3.13c-.28 1.1-1.97.54-2.51.4l.48-1.94c.55.14 2.32.4 2.03 1.54"></path></svg>
        `,
    address: "bc1q2nle4hr36t4wd4tgwd20ljtapz2dlz7wrpcdye",
    networks: null,
    qrcode: "/images/qrcodes/btc.png",
    reset: true,
  },
  {
    confirmations: 2,
    deposit: "Deposit",
    currency: "ETH",
    name: "Ethereum",
    icon: `
        <svg data-ds-icon="ETH" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#627eea" d="M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0"></path><path fill="#fff" d="M10.28 3.25v4.99l4.22 1.88zm0 0-4.22 6.87 4.22-1.88zm0 10.11v3.39l4.22-5.84zm0 3.39v-3.4l-4.22-2.44zm0-4.18 4.22-2.45-4.22-1.88z"></path><path fill="#fff" d="m6.06 10.12 4.22 2.45V8.24z"></path></svg>
        `,
    address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
    reset: false,
    networks: [
      {
        name: "ETH",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/eth.png",
        reset: true,
        fullname: "ETH &nbsp;- Ethereum (ERC20)",
      },
      {
        name: "BSC",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/bsc.png",
        reset: true,
        fullname: "BSC &nbsp;- BNB Smart Chain (BEP20)",
      },
    ],
  },

  {
    confirmations: 1,
    deposit: "Deposit",
    currency: "LTC",
    name: "Litecoin",
    icon: `
        <svg data-ds-icon="LTC" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#3c649b" d="M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0"></path><path fill="#fff" d="m6.86 11.8-.8.32.4-1.56.8-.32L8.43 5.5h2.89l-.85 3.48.8-.32-.39 1.55-.8.32-.48 1.97h4.34l-.5 2H6.2z"></path></svg>
        `,
    address: "ltc1qy6hlknvh08yepgae4vrlg2m6pepg03h06qnj3v",
    networks: null,
    qrcode: "/images/qrcodes/ltc.png",
    reset: true,
  },
  // he

  {
    confirmations: 2,
    deposit: "Deposit",
    currency: "SOL",
    name: "Solana",
    icon: `
       <svg data-ds-icon="SOL" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#fff" d="M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0"></path><path fill="url(#SOL__a)" d="m13.74 7.76-.11.07-.13.03H5.16c-.3 0-.44-.37-.24-.6L6.3 5.82l.11-.07.13-.03h8.37c.3 0 .45.37.24.6zm0 6.5a.3.3 0 0 1-.24.1H5.16c-.3 0-.44-.36-.24-.58l1.37-1.42.11-.07.13-.03h8.37c.3 0 .45.37.24.58zm0-5.17a.3.3 0 0 0-.24-.1H5.16c-.3 0-.44.36-.24.57l1.37 1.42q.05.06.11.08l.13.02h8.37c.3 0 .45-.36.24-.58z"></path><defs><linearGradient id="SOL__a" x1="5.46" x2="14.57" y1="14.47" y2="5.6" gradientUnits="userSpaceOnUse"><stop stop-color="#cf41e8"></stop><stop offset="1" stop-color="#10f2b0"></stop></linearGradient></defs></svg>
        `,
    address: "6KAqsJpGqp1SZ4zXkYBSpCuaMfC8C98zCBUvfKznAAKn",
    networks: null,
    qrcode: "/images/qrcodes/sol.png",
    reset: false,
  },
  {
    confirmations: 1,
    deposit: "Deposit",
    currency: "DOGE",
    name: "Dogecoin",
    icon: `
 <svg data-ds-icon="DOGE" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#c2a633" d="M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0"></path><path fill="#fff" d="M9.78 4.62h-3.1v4.8H5.4v1.17h1.27v4.8h3.6s5.08.42 5.08-5.3c0-5.63-4.85-5.47-5.58-5.47m.43 8.79H8.7v-2.82h2.26V9.42H8.7V6.6h1.41c.53 0 3.21.21 3.22 3.52 0 3.31-2.75 3.27-3.13 3.27z"></path></svg>
    `,
    address: "DMg3ghoaUxqYyogGxF7PLQZvs9ZyhPks42",
    networks: null,
    qrcode: "/images/qrcodes/doge.png",
    reset: true,
  },
  {
    confirmations: 1,
    deposit: "Deposit",
    currency: "BCH",
    name: "Bitcoin Cash",
    icon: `
  <svg data-ds-icon="BCH" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#8dc351" d="M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0"></path><path fill="#fff" d="M12.42 6.48c-.6-1.03-1.69-.95-2.92-.51l-.7-1.5-.9.42.67 1.45-.72.35-.66-1.47-.91.42.7 1.5-.59.27L5.14 8l.45.97s.66-.32.66-.3a.5.5 0 0 1 .7.15l.8 1.7.1-.03-.1.04 1.1 2.39q.03.05.03.13c0 .15-.1.29-.24.33l-.66.31.32 1.17 1.18-.55.65-.3.71 1.51.91-.42-.69-1.5.73-.32.69 1.48.9-.42-.7-1.52c1.49-.8 2.38-1.69 1.85-3.17-.43-1.2-1.22-1.47-2.18-1.28.4-.5.51-1.12.07-1.88m.22 3.82c.53 1.13-1.46 1.9-2.08 2.19l-.93-2c.62-.29 2.47-1.36 3.01-.19m-1.73-2.62c.48 1.02-1.19 1.65-1.7 1.89l-.84-1.82c.5-.24 2.05-1.14 2.54-.07"></path></svg>
    `,
    address: "bitcoincash:qrggcvljt95ek9ngu9e4j8d70amacfjm0v0kwxe5ev",
    networks: null,
    qrcode: "/images/qrcodes/bch.png",
    reset: true,
  },
  {
    confirmations: 1,
    deposit: "Deposit",
    currency: "XRP",
    name: "Ripple",
    icon: `
        <svg data-ds-icon="XRP" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#5e5e5e" d="M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0"></path><path fill="#fff" d="m14.08 14.92-1.4-1.4-1.3-1.27a2.1 2.1 0 0 0-2.96 0l-2.7 2.67H4.03l.25-.25.84-.85 1.94-1.91q.34-.36.7-.68a3 3 0 0 1 1.7-.76h.02q.2-.04.44-.04c.82 0 1.57.3 2.14.81q.29.26.56.54l2.3 2.28.8.8.04.05zM5.75 5.19l.96.95 1.31 1.3q.3.3.6.55l.01.01a2.1 2.1 0 0 0 2.75-.17L13.24 6l.82-.8h1.69l-.2.2-1.79 1.77-1.56 1.55c-.48.47-1.1.8-1.8.89h-.02q-.23.04-.5.04a3.2 3.2 0 0 1-2.21-.89q-.46-.43-.9-.89L4.1 5.23l-.04-.05z"></path></svg>

        `,
    address: "rLPXM5pFCzb7RKbhdQT9y3Ehyg3USaFZYj",
    networks: null,
    qrcode: "/images/qrcodes/xrp.png",
    reset: false,
  },
  {
    confirmations: 1,
    deposit: "Deposit",
    currency: "TRX",
    name: "Tron",
    icon: `
   <svg data-ds-icon="TRX" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#eb0a29" d="M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0"></path><path fill="#fff" d="M4.56 4.9q.19.06.42.1h.01l8.58 1.56a.2.2 0 0 1 .11.06l2.27 2.15q.06.05 0 .1l-1.89 2.3-3.53 4.31-1.17 1.41-.03.04-.2-.47zM9.3 15.16h.02l.1-.85.19-1.56q.07-.72.17-1.44l.17-1.44v-.03a.1.1 0 0 0-.05-.1L5.83 6.36h-.01zm.65.03 4.82-5.87h-.07l-1.88.35-2.2.4q-.07 0-.07.08-.01.23-.06.46l-.19 1.56-.17 1.45zM6.3 5.88v.02l.48.42 3.42 2.81a.1.1 0 0 0 .13 0l2.17-1.8.3-.26zm4.8 3.44c.1 0 3.67-.65 3.77-.68l-.02-.03-1.29-1.22q-.06-.08-.14 0L11.8 8.74z"></path></svg>
    `,
    address: "TAVmmS6eEoy6RrtUuQg2gDx3ezRfPo24yD",
    // udn
    networks: null,
    qrcode: "/images/qrcodes/trx.png",
    reset: true,
  },

  {
    confirmations: 2,
    deposit: "Deposit",
    currency: "BNB",
    name: "Binance Coin",
    icon: `
<svg data-ds-icon="BNB" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#f0b90b" fill-rule="evenodd" d="M10 1a9 9 0 1 1 0 18 9 9 0 0 1 0-18" clip-rule="evenodd"></path><path fill="#fff" d="M5.95 10v2.38l2.02 1.19v1.4l-3.2-1.89V9.3zm0-2.38v1.39l-1.18-.7V6.92l1.18-.7 1.18.7zm2.87-.7 1.18-.7 1.18.7-1.18.7z"></path><path fill="#fff" d="M6.8 11.89v-1.4l1.17.7v1.39zm2.02 2.18 1.18.7 1.18-.7v1.39l-1.18.7-1.18-.7zm4.05-7.15 1.18-.7 1.18.7v1.39l-1.18.7V7.62zm1.18 5.46V10l1.18-.7v3.78l-3.2 1.88v-1.4z"></path><path fill="#fff" d="m13.2 11.89-1.17.69v-1.39l1.17-.7z"></path><path fill="#fff" d="M13.2 8.11v1.4l-2.02 1.19v2.38l-1.18.7-1.17-.7V10.7L6.8 9.5V8.12l1.18-.7L10 8.62l2.02-1.2zM6.8 5.73 10 3.85l3.2 1.88-1.17.7L10 5.23l-2.03 1.2z"></path></svg>

    `,
    address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
    reset: false,
    networks: [
      {
        name: "BSC",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/bsc.png",
        reset: true,
        fullname: "BNB &nbsp;- Smart Chain (BEP20)",
      },
    ],
  },
  {
    confirmations: 2,
    deposit: "Deposit",
    currency: "USDC",
    name: "USD Coin",
    icon: `
  <svg data-ds-icon="USDC" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#0f97f8" d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18"></path><path fill="#fff" d="M8.08 17.12c0 .24-.2.37-.42.3a7.68 7.68 0 0 1 0-14.66c.23-.07.42.07.42.31v.6c0 .16-.12.34-.27.4a6.41 6.41 0 0 0 0 12.04c.15.05.27.23.27.4z"></path><path fill="#fff" d="M10.64 14.9c0 .18-.14.32-.32.32h-.64a.3.3 0 0 1-.32-.32v-1.02c-1.4-.19-2.09-.96-2.27-2.03a.3.3 0 0 1 .3-.35h.73q.24.02.31.26c.14.63.5 1.12 1.63 1.12.83 0 1.42-.47 1.42-1.16s-.35-.95-1.56-1.15c-1.8-.24-2.65-.79-2.65-2.19 0-1.08.83-1.94 2.1-2.1v-1c0-.18.14-.32.32-.32h.63c.18 0 .33.14.33.32V6.3q1.56.29 1.9 1.75c.04.19-.1.35-.3.35h-.67a.3.3 0 0 1-.31-.23c-.19-.62-.62-.9-1.4-.9-.84 0-1.29.41-1.29.99 0 .6.25.92 1.56 1.1 1.76.24 2.67.74 2.67 2.24 0 1.14-.84 2.06-2.17 2.26z"></path><path fill="#fff" d="M12.34 17.43c-.23.07-.42-.07-.42-.31v-.6c0-.18.1-.35.27-.4a6.41 6.41 0 0 0 0-12.03c-.15-.05-.27-.24-.27-.4v-.6c0-.24.2-.37.42-.3a7.7 7.7 0 0 1 0 14.66z"></path></svg>

        `,
    address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
    reset: false,
    networks: [
      {
        name: "ETH",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/eth.png",
        reset: true,
        fullname: "ETH &nbsp;- Ethereum (ERC20)",
      },
      {
        name: "BSC",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/bsc.png",
        reset: true,
        fullname: "BSC &nbsp;- BNB Smart Chain  (BEP20)",
      },
      {
        name: "POLYGON",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/pol.png",
        reset: true,
        fullname: "POL &nbsp;- Ploygon",
      },

      {
        name: "SOL",
        address: "6KAqsJpGqp1SZ4zXkYBSpCuaMfC8C98zCBUvfKznAAKn",
        qrcode: "/images/qrcodes/sol.png",
        reset: true,
        fullname: "SOL &nbsp;- Solana",
      },
    ],
  },
  {
    confirmations: 2,
    deposit: "Deposit",
    currency: "APE",
    reset: false,
    name: "Apecoin",
    icon: `
  <svg data-ds-icon="APE" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#024ad6" d="M19 10q0 .68-.1 1.34l-.05.31q-.14.74-.4 1.44l-.01.02q-.11.32-.25.63a9 9 0 0 1-1.82 2.62l-.42.4a9 9 0 0 1-4.68 2.15l-.12.02Q10.6 19 10 19q-1.4 0-2.68-.4h-.01l-.44-.16a9 9 0 0 1-2.58-1.47l-.03-.02a10 10 0 0 1-1.8-2.04l-.01-.01a8.8 8.8 0 0 1-1.42-5.54l.01-.25a9 9 0 0 1 1.8-4.55l.24-.3A8.96 8.96 0 0 1 14.2 2.04l.38.2a9 9 0 0 1 4.34 6.57l.04.33q.03.42.04.86"></path><path fill="#6fc0ff" d="m18.23 13.52-.04.21q.14-.3.25-.62a.7.7 0 0 0-.21.4m.34-1.66q-.36.51-.84.94a1 1 0 0 0-.28.55l-.05.42c-.22 1.14-.73 1.93-.92 2.23l-.53.77.42-.4.2-.3c.21-.3.73-1.12.95-2.28l.06-.43q.03-.29.24-.47.48-.45.85-.97l.18-.26.05-.31q-.14.27-.33.5M2.82 4.6q-.23.62-.31 1.26l-.04.12-.05.08c-.23.35-.72 1.09-.91 2.14q-.04.18-.13.33l-.33.56-.02.26.08-.13.38-.62q.1-.18.14-.37a5.4 5.4 0 0 1 .9-2.1l.02-.05.08-.2q.09-.63.3-1.24l.04-.11.04-.1.07-.19-.24.3zm16.1 4.2-.05.13v.05q-.07.51-.22.99a5 5 0 0 1-1.65 2.4 1 1 0 0 0-.23.27 1 1 0 0 0-.09.34q0 .3-.07.63a5 5 0 0 1-.82 1.97l-.43.65a4.6 4.6 0 0 1-2.34 1.7l-.18.06-.2.04q-.4.06-.8.06h-.28l-.3.02q-.25 0-.49.08a7 7 0 0 1-2.36.32q-.84-.01-1.54-.07l.44.15h.01l1.09.03c.98 0 1.74-.1 2.4-.32q.22-.08.44-.09l.32-.01h.26q.42 0 .82-.07l.21-.04.2-.06q1.41-.42 2.4-1.75l.43-.64a5.4 5.4 0 0 0 .91-2.67q0-.15.08-.29a1 1 0 0 1 .19-.23q.54-.43.95-1.02a5 5 0 0 0 .94-2.3zM7.72 1.78h.19q.48 0 .95.12.45.12.86-.09a5 5 0 0 1 1.67-.5l.36-.03.31-.02-.4-.08-.29.03-.11.01q-.8.1-1.6.49-.37.18-.78.08a4 4 0 0 0-.97-.12h-.27q-.58.05-1.13.2-.97.3-1.72.97L4.6 3l-.17.2c-.5.6-.68 1.17-.78 1.47l-.05.13-.03.08q-.2.59-.28 1.17l-.05.15-.02.07-.05.13-.09.12c-.2.32-.66 1-.8 1.94q-.03.22-.14.41l-.23.42-.02.03-.08.1-.11.16q-.47.66-.66 1.3l.03.3q.18-.74.72-1.54l.1-.14.1-.12.25-.45q.12-.22.15-.45c.15-.92.58-1.58.8-1.9l.08-.13.06-.14.02-.07.06-.16q.07-.6.27-1.15l.03-.09.05-.13c.1-.3.28-.84.76-1.44l.16-.2.17-.15a4.4 4.4 0 0 1 2.79-1.14z"></path><path fill="#6fc0ff" d="M18.48 7q-.02.41-.08.67v.03q-.09.51-.3.98v.07l-.02.09v.04q-.06.42-.2.83-.2.65-.6 1.2t-.89.91q-.23.19-.37.43-.12.25-.13.55 0 .33-.07.66c-.15.84-.52 1.4-.72 1.72l-.32.47a3.8 3.8 0 0 1-2 1.51l-.04.02-.2.04-.05.02q-.33.05-.65.05h-.47q-.14.03-.29.02-.26.01-.5.1c-.57.2-1.26.3-2.17.3q-.88-.01-1.62-.07l-.14-.02-.31-.04a5 5 0 0 1-1.69-.42l-.16-.08-.2-.12.49.38c.6.25 1.15.31 1.55.36l.3.03.15.01q.74.07 1.63.08 1.36 0 2.21-.3.23-.1.47-.1l.29-.01h.46q.34 0 .66-.07h.06l.21-.06.04-.01q1.23-.37 2.06-1.56l.32-.48c.2-.31.58-.89.74-1.75q.06-.33.06-.68.01-.27.13-.5.12-.24.34-.39a4.5 4.5 0 0 0 1.73-3.02v-.13l.02-.04q.2-.49.3-1v-.03l.06-.44zM4.46 5.13l.07-.18c.08-.26.23-.7.62-1.18l.12-.15.13-.12c.92-.83 1.96-.9 2.3-.92h.06l.14-.01q.62 0 1.2.24.1.06.22.04.13 0 .23-.06h.01c.35-.2 1-.58 1.83-.68h.1q.11-.03.33-.04.4-.05 1.03-.06 1.01 0 1.72.24l-.37-.21q-.6-.15-1.35-.14c-.4 0-.79.03-1.04.05l-.33.04-.1.01c-.85.11-1.5.48-1.86.69a.4.4 0 0 1-.2.05q-.1 0-.19-.03-.59-.25-1.23-.25h-.2c-.36.03-1.42.1-2.37.96l-.14.13-.13.15c-.4.5-.54.94-.63 1.22l-.06.17-.03.07q-.19.52-.24 1.05l-.01.02-.1.3-.11.27-.07.1-.03.04-.01.02c-.2.31-.63.96-.7 1.83q-.02.14-.08.27l-.08.22-.1.18-.2.25-.01.02-.09.1-.14.2a3.6 3.6 0 0 0-.52 3.4l.03.07q.12.4.32.84l.09.2.02.04.14.31v.01q.24.37.5.7a8 8 0 0 1-.54-1.06l-.02-.05-.1-.2a6 6 0 0 1-.3-.82l-.03-.07a3.5 3.5 0 0 1 .5-3.31l.14-.19.08-.1.01-.03.2-.24q.08-.1.12-.21l.09-.22q.06-.15.07-.3c.07-.85.48-1.47.69-1.78L3.87 7l.04-.04.06-.11c.03-.04.07-.16.13-.28l.1-.31v-.02q.06-.56.24-1.05z"></path><path fill="#6fc0ff" d="m17.53 5.7-.03-.07-.04-.06c-.25-.41-.54-.63-.71-.77l-.1-.09-.1-.08c-.17-.16-.25-.26-.37-.41a3.5 3.5 0 0 0-1.75-1.28l-.04-.01a5 5 0 0 0-1.54-.22c-.37 0-.73.03-.97.04l-.31.04-.1.02c-.68.08-1.24.4-1.57.59q-.22.12-.46.2l-.18.03-.18-.04a3 3 0 0 0-1.18-.32h-.15c-.49.02-1.22.14-1.88.74l-.1.09-.08.1c-.31.38-.42.73-.5.96l-.07.21-.02.05q-.16.42-.2.89l-.03.12c-.05.12-.09.28-.11.35-.07.19-.17.38-.2.44l-.07.1-.03.05-.03.04c-.19.29-.55.83-.57 1.55v.18l-.02.26q0 .1-.07.16c-.22.24-.37.44-.54.65l-.14.2-.06.07c-.6.88-.71 1.6-.4 2.72l.02.06q.1.33.28.71.05.14.12.27c.32.72.72 1.63 1.79 2.22l.1.06a4 4 0 0 0 1.48.36l.32.04h.1q.73.08 1.57.08a5 5 0 0 0 2.25-.37c.09-.02.43-.03.76-.04h.41q.27 0 .54-.05l.11-.02.1-.03c.9-.28 1.88-1.61 1.92-1.67.2-.32.5-.8.64-1.5.07-.41.05-.81.03-1.17v-.11a.6.6 0 0 1 .35-.52q.7-.31 1.18-1.03a4 4 0 0 0 .68-1.7v-.04l.02-.14.06-.2v-.02q.18-.4.24-.81v-.03c.08-.41.2-1.11-.17-1.85m.08 1.84v.02q-.07.42-.24.81l-.07.23-.02.14v.04a3.6 3.6 0 0 1-1.8 2.65.6.6 0 0 0-.29.25 1 1 0 0 0-.13.37v.12c.03.34.05.74-.03 1.14a4 4 0 0 1-.61 1.45c-.02.02-1 1.38-1.87 1.64l-.1.03-.1.02q-.25.05-.51.05l-.12-.01h-.31l-.77.05q-.07 0-.15.05-.73.32-2.08.32c-.55 0-1.1-.04-1.56-.07l-.09-.02-.33-.03c-.4-.05-.9-.1-1.44-.36l-.1-.05a4 4 0 0 1-1.75-2.16l-.12-.28q-.17-.37-.27-.7l-.02-.06c-.3-1.09-.2-1.78.38-2.63l.06-.08.15-.2q.2-.29.53-.63a.4.4 0 0 0 .1-.23l.01-.27v-.16c.02-.7.37-1.22.56-1.52l.02-.03.04-.05.06-.1a4 4 0 0 0 .33-.81l.02-.14q.05-.45.2-.87l.02-.04a7 7 0 0 1 .56-1.15l.08-.1.08-.07c.65-.59 1.35-.7 1.83-.73h.14c.4 0 .88.2 1.14.3a.6.6 0 0 0 .43.02 3 3 0 0 0 .48-.2c.33-.2.87-.5 1.54-.59l.1-.01.3-.03c.23-.02.58-.05.96-.05q.9 0 1.5.2l.04.02c.96.36 1.35.78 1.72 1.26.12.14.2.26.38.42l.08.07s.08.08.12.1c.16.13.44.34.68.74l.04.06.03.07c.35.71.24 1.38.17 1.79"></path><path fill="#6fc0ff" d="m16.81 6.06-.04-.07a2 2 0 0 0-.5-.55q-.1-.07-.2-.17l-.05-.04a4 4 0 0 1-.47-.52 2.7 2.7 0 0 0-1.41-1.02h-.02a4 4 0 0 0-1.27-.18q-.41 0-.88.05l-.29.03h-.02l-.08.01c-.53.06-.98.32-1.28.5-.29.16-.7.31-.95.38a.5.5 0 0 1-.36-.04l-.15-.08-.04-.02c-.2-.1-.5-.27-.9-.27h-.09c-.4.03-.92.12-1.4.55l-.05.04-.04.05c-.22.27-.3.5-.36.71l-.1.26v.02q-.13.35-.17.71-.02.15-.06.28l-.1.3v.06a4 4 0 0 1-.32.65l-.03.05-.05.07-.02.04c-.17.26-.44.64-.45 1.14v.12l.04.22.08.22v.1q0 .06-.05.1c-.43.4-.63.65-.85.95l-.16.2-.03.04c-.47.69-.54 1.14-.28 2.04v.03q.09.3.24.62l.12.26v.03c.31.68.63 1.37 1.46 1.84l.06.03c.43.2.83.25 1.21.29l.36.04h.05c.44.04.97.08 1.5.08a5 5 0 0 0 2.1-.36q.21-.04.86-.05h.05l.22-.01h.19q.2 0 .4-.04h.06l.05-.02c.7-.21 1.44-1.28 1.47-1.33.2-.3.43-.67.54-1.22.06-.31.04-.64.02-.97-.02-.25-.06-.76.05-.87l.07-.1q.19-.27.48-.36c.44-.15.77-.4 1.08-.85a2.7 2.7 0 0 0 .54-1.34v-.04l.02-.18.11-.36q.15-.31.2-.66v-.03c.06-.36.14-.85-.11-1.37m.02 1.38q-.07.32-.2.62-.08.2-.11.39l-.03.19v.04q-.04.26-.12.53-.14.41-.4.76c-.3.43-.6.67-1.03.81a1 1 0 0 0-.53.4l-.07.1c-.12.12-.1.54-.07.95.01.3.04.63-.03.93-.1.54-.33.9-.51 1.19 0 0-.76 1.08-1.42 1.28h-.04l-.05.02q-.2.04-.39.04h-.46a7 7 0 0 0-.87.05q-.17.04-.32.1-.59.27-1.77.26-.81-.01-1.5-.07h-.04l-.35-.05a4 4 0 0 1-1.2-.28l-.04-.02c-.8-.46-1.1-1.14-1.4-1.8v-.03l-.14-.26q-.15-.32-.23-.61v-.03c-.25-.86-.19-1.3.27-1.95l.02-.04.15-.2c.23-.3.42-.54.85-.94l.08-.14v-.16l-.09-.22-.03-.2V9c.02-.47.27-.85.43-1.1l.02-.03.06-.07.03-.05c.1-.13.24-.47.31-.67L5.63 7l.1-.3q.04-.14.06-.3.03-.35.16-.7h.01l.1-.26c.05-.2.13-.43.34-.68l.04-.04.03-.04c.46-.42.96-.5 1.35-.53h.08c.37 0 .66.16.85.26l.05.02.15.08a.6.6 0 0 0 .43.05c.25-.08.67-.23.98-.4.29-.16.73-.42 1.24-.48h.09l.28-.04q.48-.04.88-.04.77 0 1.25.17l.01-.06v.05c.77.3 1.05.6 1.37 1 .12.16.24.32.47.53l.05.04.2.17c.14.11.32.25.49.52l.03.06a2 2 0 0 1 .1 1.3z"></path><path fill="#fff" d="M16 7.24a2 2 0 0 1-.12.44c-.05.14-.12.28-.17.58l-.05.29a1.7 1.7 0 0 1-.34.9c-.14.17-.36.46-.65.5h-.1c-.83-.43-1.55-.74-1.8-.81-.28-.09-.25-.71-.21-1.27q.03-.38.01-.68c-.04-.7-.16-1.47-.77-1.85a2.6 2.6 0 0 0-1.28-.29l.28-.15a2.3 2.3 0 0 1 1.23-.41 4 4 0 0 1 1.83.06c.27.1.83.41.97.7.1.2.27.36.62.68l.38.33c.12.1.14.12.18.2.11.22.06.46.01.79zm-3.05 2.88q.08.04.04.12-.13.2-.3.53-.1.16-.16.29c-.17.28-.18.5-.19.7 0 .19-.02.28-.14.36-.1.07-.19.1-.88.19q-.16.02-.22.06h-.02q-.09.03-.09-.07v-.72c0-.17 0-.24.04-.32q.08-.12.18-.16c.1-.07.24-.15.45-.45a1 1 0 0 0 .15-.3c0-.04 0-.04.1-.11a1 1 0 0 1 .71-.22q.15.03.34.1m-2.72 3.18-.06.02q-.1 0-.16-.05c-.06-.08-.06-.26-.04-.36l.29-.07c.02.15.03.37-.03.46m.02-1.06v.36q-.13.04-.28.03v-.25c0-.06 0-.15.02-.18l.08-.01.19-.02zm-.54.96c-.01.15-.06.33-.2.36q-.09.02-.11-.02c-.1-.09-.12-.35-.1-.54l.24-.03.16-.04zm-.06-.53-.32.11.05-.41.03-.11h.01l.2-.01v.43zm-.51-.1-.05.28-.4-.01q.04-.19.1-.35.05-.15.1-.2a.2.2 0 0 1 .18.02q.13.11.07.25zM9 13.78l-.1.07q-.07 0-.1-.03c-.14-.12-.12-.49-.12-.67.16-.04.34-.07.43-.08.01.15.01.54-.1.71m-.52-.96-.06.14a1 1 0 0 1-.33-.03l.1-.62c.17-.04.35-.06.4 0s-.06.38-.11.51m-.19 1.05q-.1.15-.35.14-.15-.02-.17-.08c-.09-.14 0-.47.08-.68l.54.03.01.13c0 .15-.01.34-.11.46"></path><path fill="#fff" d="M14.16 9.93a8 8 0 0 0-1.43-.56c-.49-.14-.44-.85-.4-1.52l.02-.66c-.04-.63-.15-1.33-.66-1.65-.55-.33-1.46-.26-2.01-.18q-.3.09-.51.1h-.03a2 2 0 0 1-.81-.28q-.26-.16-.48-.18h-.02c-.43.03-.63.13-.8.29-.05.04-.11.16-.3.68-.08.27-.1.4-.11.55q-.01.18-.1.45l-.12.37c-.09.3-.16.53-.37.81l-.1.14-.18.28a1 1 0 0 0-.18.45c.02.14.06.22.11.33q.09.13.13.37v.02c.01.24-.02.37-.49.79q-.44.42-.65.71-.02.04.02.04h.09q.18.02.3.15.03.02.06.01l.24-.02q.16.01.26.1a.1.1 0 0 0 .1.03.4.4 0 0 1 .22.01q.08.02.13.08.07.06.14.02l.06-.03a.5.5 0 0 1 .31.03q.08.02.14.06.11.08.15.2.07.08.16.04.1-.08.17-.03l.05.04q.06.07.16.07a.7.7 0 0 1 .47.06q.08.03.13.13v-.03l.03-.02h.03c.09-.04.48-.15.63.01h.03l.05-.04c.1-.06.28-.07.39.03q.04.03.08-.01 0-.03.03-.04.08-.05.15-.05h.22c.06-.02.22-.03.28-.04h.01l.08-.01c.11-.03.23-.06.33-.01s.08.16.07.25l-.01.12v.05l-.01.21v.05q.04.07.1.04.13-.07.18-.13l.02-.07c.01-.09.03-.25.03-.59v-.34c-.02-.2-.02-.33.07-.48q.13-.2.25-.25c.1-.06.2-.12.38-.37.1-.12.11-.17.12-.21.01-.1.04-.15.18-.26.11-.08.45-.33.91-.26.15.03.4.1.63.2l.03.01h.01q.33.14.55.26.05.02.11-.03.06-.07.13-.1.04-.01.06-.04c.04-.04.03-.12-.02-.15m-6.02-.42c-.15.65-1.16 1.38-1.62 1.38l-.03-.01h-.03l-.02-.01a1 1 0 0 1-.28-.18.4.4 0 0 1-.12-.2v-.04a.6.6 0 0 1 .04-.47l.03-.1.01-.02.03-.06.04-.1v-.02q.05-.1.04-.14l.02-.1.06-.31q.01-.24.13-.44.02-.04.05-.06l.02-.02.02-.01.07-.05h.02l.06-.02a1 1 0 0 1 .3-.01l.33.05.22.08.02.01.03.01.05.03.06.02h.01l.18.11.07.06.02.02.03.02c.2.2.18.44.15.58zm.46-2.46-.01.12c-.05.26-.15.63-.53.71-.38.1-.46.12-.72.13H7.3c-.18 0-.55-.12-.62-.42-.04-.2.05-.33.18-.57l.08-.12q.25-.46.32-.73c.06-.17.1-.32.22-.44l.1-.08.08-.04.11-.05.27-.04q.28 0 .49.15c.05.05.13.14.18.42.03.13-.02.38-.12.96m2.74.75c-.13.23-.2.35-.31.44-.24.2-.5.24-.72.24q-.23-.01-.36-.04c-.23-.04-.64-.11-.78-.44l-.03-.17c0-.05 0-.13-.03-.34v-.02q-.02-.13.01-.33v-.02c.08-.4.1-.46.12-.5a.15.15 0 0 1 .21-.06q.12.08.08.2l-.1.42v.27q.04.32.03.38v.04q.04.08.13.14c.06.03.11-.03.1-.09-.07-.35-.06-.75.07-1l.2-.35.02-.04.02-.03.1-.15v-.02l.02-.04.01-.02v-.01l.06-.08c.05-.06 0-.14-.07-.11q-.18.09-.2.12a.16.16 0 1 1-.2-.25 1.2 1.2 0 0 1 1.04-.23c.38.1.58.39.66.5.06.1.24.36.23.73 0 .28-.12.49-.34.86z"></path><path fill="#fff" d="m7.94 5.85-.1.23c-.07.2-.16.43-.21.52q-.1.2-.18.3-.08.11-.13.24a1 1 0 0 0-.03.54c-.1 0-.26-.08-.28-.16s.03-.14.14-.33l.08-.13c.2-.34.28-.6.34-.79.07-.2.1-.28.2-.36q.07-.05.17-.06m-.2 7.2c-.11.23-.25.44-.34.54a3 3 0 0 1-.16-.99v-.03a1 1 0 0 1 .1-.29q.05-.08.24-.08.12 0 .24.06c.03.02.1.06.1.19 0 .17-.08.4-.19.6z"></path><path fill="#fff" d="m13.83 10.51.01.03q-.05.1-.12.17-.09.1-.18.26a2 2 0 0 0-.13.72c-.01.47 0 .73.02.92.01.19.02.3-.02.47-.07.36-.22.6-.42.91-.25.38-.5.77-.92.9h-.15l-.56.02c-.54.03-.82.03-1.05.08-.25.04-.38.1-.5.15s-.22.09-.43.13c-.12.02-.3.05-.92.05-.64 0-1.03 0-1.54-.06-.7-.08-1.06-.12-1.3-.25-.56-.3-.79-.82-1.18-1.71l.02-.02.06.04.06.01h.14q.04.11.13.16.1.05.21.04l.23-.01q.06 0 .1.05c.06.16.15.29.28.3h.03l.11-.03a.2.2 0 0 1 .2.04l.09.07c.13.14.45.2.72.2q.24 0 .35-.05c.11-.06.11-.14.1-.18l-.02-.18h.02q.01.06.09.1h.02c.08 0 .2.02.21.09q.01.06.05.1c.04.08.13.16.31.16h.02q.3 0 .48-.2l.02-.03c.04-.05.16-.06.2-.02q.09.09.2.08h.04q.14-.01.23-.14l.1-.2q.01-.04.05-.01.05.07.2.07h.07c.18-.04.27-.2.31-.36h.02c.04.05.12.12.27.12h.03q.1 0 .2-.1a.5.5 0 0 0 .07-.28q0-.06.07-.09c.15-.07.34-.2.4-.3l.07-.05.2-.07.16-.04c.7-.11.84-.13.99-.24.22-.15.24-.36.24-.55.01-.17.03-.36.15-.59l.17-.29c.1-.19.24-.44.34-.59q.05-.04.11-.03c.23.1.43.2.48.24z"></path><path fill="#fff" d="M7.07 12.58q-.06.36 0 .98l.04.37a1 1 0 0 1-.3.04c-.26 0-.5-.07-.58-.15h-.01q-.1-.08-.1-.18 0-.04.03-.1l.06-.08.15-.22c.16-.27.22-.35.3-.45l.02-.02.33-.47.14-.17-.02.15-.05.3zm-.12-3.74-.12.2c-.12.26-.12.41-.12.53q0 .1-.03.17l-.05.14c-.07.16-.16.38-.12.66a.4.4 0 0 1-.16-.13v-.04a.4.4 0 0 1 .02-.28c.15-.35.16-.43.18-.52v-.06l.07-.34q.02-.21.08-.31.03-.04.13-.04h.11zm-.2 3.4-.05-.25-.01-.03-.02-.03-.02-.02h-.03l-.15-.05h-.08l-.02.02h-.01l-.02.02v.01l-.07.1-.14.2-.13.19-.08.1-.01.02q.05 0 .08.02l.2.03.4.02h.02l.12-.18.08-.12-.03-.06zm-.48.55c-.01.1-.12.38-.3.63-.15.22-.25.26-.27.27-.07 0-.14-.2-.2-.37l-.06-.21c-.04-.14-.04-.33-.04-.44a2 2 0 0 0 .8.11zM6 11.94l-.2.29-.09.15-.07.09-.15-.04-.13-.04-.02-.01q0-.03-.03-.04l.04-.1.09-.17q.08-.16.23-.26l.01-.01.12-.04h.11l.03.03.02.02q.04.05.04.13m-.52-.27q-.17.16-.27.36l-.12.24-.02.02-.1-.03-.12-.05-.05-.02.12-.2.19-.26.09-.09q.06-.02.12-.01l.13.02zm-.18 1.61-.02.01H5q-.05 0-.07-.02-.04-.06-.04-.13-.06-.3-.02-.63l.33.1c-.02.18.02.46.05.54zm-.35-1.68q-.14.18-.26.37l-.09.16-.1-.04-.09-.06-.03-.03h-.01l.03-.06q.03-.08.07-.13.06-.12.15-.23.02-.05.07-.06h.09a.3.3 0 0 1 .17.1zm-.73.5q.04.06.1.09l.05.04q-.05.24-.06.5H4.3a2 2 0 0 1-.08-.63m.46.35q-.03.22-.02.43l.02.23h-.06l-.04-.01-.06-.06q-.05-.11-.05-.22 0-.23.03-.44l.08.03z"></path></svg>
    `,
    address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
    networks: [
      {
        name: "ETH",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/eth.png",
        reset: true,
        fullname: "ETH &nbsp;- Ethereum (ERC20)",
      },
    ],
  },
  // update
  {
    confirmations: 2,
    deposit: "Deposit",
    currency: "BUSD",
    reset: false,
    name: "Binance USD",
    icon: `
        <svg data-ds-icon="BUSD" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#f0b90b" d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18"></path><path fill="#473800" d="m10 3.36 1.64 1.68-4.13 4.14-1.64-1.65zm2.49 2.49 1.64 1.68-6.61 6.62-1.65-1.64zM5.02 8.34l1.64 1.68-1.64 1.64-1.64-1.64zm9.96 0 1.64 1.68-6.61 6.62-1.65-1.65z"></path></svg>

        `,
    address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
    networks: [
      {
        name: "ETH",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/eth.png",
        reset: true,
        fullname: "ETH &nbsp;- Ethereum (ERC20)",
      },
    ],
  },
  {
    confirmations: 2,
    deposit: "Deposit",
    currency: "DAI",
    name: "DAI",
    icon: `
<svg data-ds-icon="DAI" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#f5ac37" d="M10 1a9 9 0 1 1 0 18 9 9 0 0 1 0-18"></path><path fill="#fefefd" d="M10.33 10.64h3.42c.07 0 .1 0 .11-.1q.04-.52 0-1.04 0-.1-.1-.1H6.95q-.12 0-.1.1v1q0 .13.13.13zm3.15-2.41v-.08l-.2-.35a3 3 0 0 0-.42-.52 4 4 0 0 0-2.9-1.21H6.93q-.11-.01-.1.1v2c0 .07 0 .1.1.1h6.5s.05-.02.06-.05zm0 3.58H6.95c-.08 0-.1 0-.1.11v1.95c0 .09 0 .11.1.11h2.88q.21.01.42-.03a4 4 0 0 0 1.63-.46h.04q1.03-.54 1.57-1.58s.03-.08 0-.1zm-7.77.07c0-.07 0-.08-.09-.08H4.4c-.07 0-.1 0-.1-.09v-1.07h1.3c.08 0 .11 0 .11-.1V9.48c0-.07 0-.08-.09-.08H4.4c-.07 0-.1 0-.1-.09v-.99c0-.06 0-.08.09-.08h1.2c.09 0 .11 0 .11-.1V5.11c0-.09 0-.11.11-.11h4.22q.45.01.91.1a5.5 5.5 0 0 1 2.76 1.42 5 5 0 0 1 1.04 1.61q.04.14.16.12h1.01q.13 0 .13.13v.92q0 .13-.12.11h-.78c-.08 0-.1 0-.1.11q.04.52 0 1.03c0 .1 0 .1.1.1h.89c.04.05 0 .1 0 .15v.88q0 .14-.11.13h-1.07q-.12-.02-.16.1a4.6 4.6 0 0 1-1.79 2.2q-.33.2-.67.38a6 6 0 0 1-2.65.53H5.71z"></path></svg>
        `,
    address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
    reset: false,
    networks: [
      {
        name: "ETH",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/eth.png",
        reset: true,
        fullname: "ETH - Ethereum (ERC20)",
      },
      {
        name: "BSC",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/bsc.png",
        reset: true,
        fullname: "BSC - BNB Smart Chain  (BEP20)",
      },
      {
        name: "POLYGON",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/pol.png",
        reset: true,
        fullname: "POL - Ploygon",
      },
    ],
  },
  {
    confirmations: 2,
    deposit: "Deposit",
    currency: "LINK",
    name: "Chainlink",
    icon: `
  <svg data-ds-icon="LINK" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#3b55d8" d="M10 1a9 9 0 1 1 0 18 9 9 0 0 1 0-18"></path><path fill="#fff" d="m10 6.28 3.23 1.86v3.72l-3.21 1.87-3.24-1.84V8.15zm0-2.74L4.4 6.8v6.46l1.19.68 3.23 1.85 1.19.68 5.59-3.25V6.75L11.18 4.2z"></path></svg>

    `,
    address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
    reset: false,
    networks: [
      {
        name: "ETH",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/eth.png",
        reset: true,
        fullname: "ETH &nbsp;- Ethereum (ERC20)",
      },
      {
        name: "BSC",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/bsc.png",
        reset: true,
        fullname: "BSC &nbsp;- BNB Smart Chain  (BEP20)",
      },
    ],
  },
  {
    confirmations: 2,
    deposit: "Deposit",
    currency: "SAND",
    name: "Sandbox",
    icon: `
   <svg data-ds-icon="SAND" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#0f94f8" d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18"></path><path fill="#fff" d="M6.98 5.25 6 6.22v3.85l.98.98h3.85v1.94h-1.9v-.97H6v1.94l.97.97h5.8l.98-.97v-3.89l-.98-.97H8.93V7.16h1.94v.97h2.92V6.2l-.98-.98H6.98z"></path></svg>
    `,
    address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
    reset: false,
    networks: [
      {
        name: "ETH",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/eth.png",
        reset: true,
        fullname: "ETH &nbsp;- Ethereum (ERC20)",
      },
    ],
  },
  {
    confirmations: 2,
    deposit: "Deposit",
    currency: "SHIB",
    name: "Shiba Inu",
    icon: `
 <svg data-ds-icon="SHIB" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#eb0a29" d="M10 1a9 9 0 1 1 0 18 9 9 0 0 1 0-18"></path><path fill="#000" d="M13.5 10.27s-.1.13-.2.2a3.3 3.3 0 0 1-1.92.49q-.07-.03-.04-.12a1 1 0 0 1 .39-.46c.1-.08.54-.35.74-.46q.5-.27.79-.31h.15q.05.04.09.25zm-4.7.66s-.07.05-.13.06h-.4a4 4 0 0 1-1.19-.35 2 2 0 0 1-.41-.28l-.05-.06v-.08a2 2 0 0 1 0-.4q0-.1.06-.18l.09-.02q.12 0 .28.05a5 5 0 0 1 1.65 1c.08.09.12.21.1.26m2.82 2.77-.05.21-.05.21h-.12l-.1.22c-.04.1-.08.21-.1.23v.03l-.1-.14v-.55h-.01l-.38.06q-.65.07-1.31-.03l-.13-.02v.57l-.03.05-.03.06-.08-.12q-.07-.15-.11-.3L9 14.12h-.12l-.01-.07-.02-.14v-.05l-.06-.05-.07-.05-.02-.04v-.02h.5v.02l.01.02h.09l.33.02h.25l.06-.1.07-.09h.08v-.42l-.11-.04q-.52-.23-.64-.55l-.02-.26.01-.25q.05-.16.2-.2l.6-.01h.55l.06.03c.08.04.1.06.15.12s.06.11.06.23q0 .27-.03.38l-.11.23c-.1.13-.28.25-.44.31l-.05.02v.42h.09l.12.19h.56q.02.01.04-.04l.03-.03z"></path><path fill="#000" d="m10.57 14.27-.07.03-.06-.05-.05-.04-.05.06c-.12.13-.13.13-.16.14-.05 0-.07 0-.13-.1l-.06-.1h-.11l-.02.04-.02.05-.05-.01-.1-.04-.06-.04v-.1h1.06v.04c0 .06 0 .06-.08.12z"></path><path fill="#fff" d="M15.54 11.85v-.05a4.2 4.2 0 0 0-3.1.96s-.4-1.87-2.32-1.87c-1.91 0-2.62 1.87-2.62 1.87a3.4 3.4 0 0 0-3.01-.99v.04c-.02.28-.01.42.03.6.15.57.61 1.2 1.33 1.8a7.6 7.6 0 0 0 4 1.81c1.25.09 3.12-.65 4.36-1.73a6 6 0 0 0 .84-.94l.01-.02h.01v-.02h.02v-.03l.01-.01q0-.03.03-.05l.16-.3q.18-.37.22-.7c.02-.12.03-.32.02-.37zm-4.97 2.42-.07.03-.06-.05-.05-.04-.05.06c-.12.13-.13.13-.16.14-.05 0-.07 0-.13-.1l-.06-.1h-.11l-.02.04-.02.05-.05-.01-.1-.04-.06-.04v-.1h1.06v.04c0 .06 0 .06-.08.12zm1-.36-.05.2h-.13l-.08.22-.1.23-.01.03-.09-.13v-.55h-.01l-.39.05q-.65.07-1.3-.03l-.13-.02v.58l-.03.05-.04.05-.07-.12q-.08-.15-.12-.3l-.01-.06h-.12l-.02-.07-.02-.13v-.06l-.06-.05-.07-.05-.01-.04v-.02h.5v.02l.01.02h.08l.34.02h.25l.06-.09.07-.1h.08v-.42l-.12-.04q-.52-.23-.63-.55c-.02-.04-.02-.06-.03-.26 0-.19 0-.21.02-.25q.05-.16.2-.2l.6-.01h.55l.06.03q.09.04.15.12c.04.06.06.11.06.23q0 .27-.03.38l-.11.23c-.1.13-.28.25-.45.31l-.04.02v.42h.09l.12.19h.56q.02 0 .04-.03l.02-.04h.45l-.06.22z"></path><path fill="#ffa409" d="m15.53 11.64-.02-.28a6 6 0 0 0-.75-2.42l-.04-.08-.01-.01c.06-.2.32-.96.52-1.85.27-1.2.44-2.6-.08-3.02 0 0-.92-.07-2.14 1.13q-.5.5-.91 1.07l-.08-.03a6 6 0 0 0-2.44-.29c-.57.04-1 .12-1.5.3l-.06.01q-.43-.58-.94-1.06c-1.27-1.2-2.22-1.14-2.22-1.14-.56.44-.36 1.9-.08 3.14.19.82.43 1.55.51 1.8l-.02.05a7 7 0 0 0-.77 2.8 3.5 3.5 0 0 1 3.02 1s.7-1.87 2.62-1.87c1.9 0 2.31 1.86 2.31 1.86a4.2 4.2 0 0 1 3.1-.96v-.15zM5.65 8.17s-.74-1.86-.55-2.92a1 1 0 0 1 .18-.46s.84.09 2.2 1.6c0 0-.25.13-.6.4a5 5 0 0 0-1.23 1.38m3.16 2.76s-.08.05-.14.06h-.4a4 4 0 0 1-1.19-.35 2 2 0 0 1-.41-.28l-.05-.06v-.08a2 2 0 0 1 0-.4q0-.1.06-.18l.09-.02q.12 0 .28.05a5 5 0 0 1 1.65 1c.08.09.12.21.1.26m4.68-.66s-.1.13-.2.2a3.3 3.3 0 0 1-1.92.49q-.07-.03-.04-.12a1 1 0 0 1 .39-.46c.1-.08.54-.35.74-.46q.5-.27.79-.31h.15q.06.04.09.25zm-.33-3.5c-.34-.26-.59-.38-.59-.38 1.32-1.51 2.13-1.6 2.13-1.6q.14.19.18.46c.19 1.06-.53 2.92-.53 2.92q-.46-.8-1.18-1.39z"></path><path fill="#ff9300" d="M14.88 5.25c-.15-.03-.88-.03-1.72 1.53-.33-.28-.58-.4-.58-.4 1.31-1.5 2.13-1.6 2.13-1.6q.14.2.18.46"></path><path fill="#ff8300" d="M14.35 8.17q-.46-.8-1.18-1.39c.83-1.56 1.55-1.55 1.71-1.53.19 1.07-.53 2.93-.53 2.93zm.56-2.92h-.03z"></path><path fill="#ff9300" d="M7.49 6.39s-.26.12-.61.39C6.02 5.2 5.26 5.22 5.1 5.25a1 1 0 0 1 .19-.46s.85.08 2.2 1.6"></path><path fill="#ff8300" d="M6.88 6.78c-.38.29-.86.74-1.23 1.38 0 0-.74-1.86-.56-2.92.16-.03.93-.03 1.78 1.53zM5.1 5.25h-.03z"></path><path fill="#fff" d="M12.34 9.2s-.64.04-.55-.46.57-.55.7-.54c.14.02.7.22.6.64s-.23.34-.3.36c-.08.02-.44 0-.44 0zm-4.69 0s-.64.04-.56-.46.58-.55.71-.54c.14.02.7.22.6.64s-.24.34-.31.36-.44 0-.44 0"></path></svg>

        `,
    address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
    networks: [
      {
        name: "ETH",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/eth.png",
        reset: true,
        fullname: "ETH &nbsp;- Ethereum (ERC20)",
      },
      {
        name: "BSC",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/bsc.png",
        reset: true,
        fullname: "BSC &nbsp;- BNB Smart Chain  (BEP20)",
      },
    ],
  },
  {
    confirmations: 2,
    deposit: "Deposit",
    currency: "UNI",
    name: "Uniswap",
    icon: `
<svg data-ds-icon="UNI" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#ff007a" d="M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0"></path><path fill="#fff" d="M7.95 4.17q-.24-.04-.1-.05c.16-.02.53 0 .78.07.6.14 1.14.5 1.71 1.14l.15.18.22-.03a4.7 4.7 0 0 1 3.26.67l.06.23q.1.6-.1.9c-.06.13-.06.16-.02.27.03.08.14.14.23.14.2 0 .4-.32.5-.76l.05-.17.07.08c.42.48.76 1.13.8 1.6l.02.12-.08-.1a1.4 1.4 0 0 0-.4-.43c-.28-.18-.57-.24-1.36-.29a6 6 0 0 1-1.51-.23c-.69-.22-1.03-.52-1.83-1.58a8 8 0 0 0-.8-.95 2.8 2.8 0 0 0-1.62-.82z"></path><path fill="#fff" d="M14.12 5.22a2 2 0 0 1 .23-.85l-.03.13a1.4 1.4 0 0 0-.03.72c.06.38.08.42.48.84.18.18.4.42.48.53l.14.18-.14-.14a6 6 0 0 0-.66-.52q-.07-.05-.1 0c-.04.03-.05.09-.05.33 0 .37-.06.6-.18.84q-.1.18-.02-.04c.05-.1.06-.16.06-.52 0-.72-.09-.89-.59-1.18a7 7 0 0 0-.69-.35c.02-.01.5.13.7.21.3.11.34.13.37.11s.05-.08.06-.3zM8.29 6.45a3 3 0 0 1-.53-1.78l.02-.17.08.01a2 2 0 0 1 .53.2c.33.2.48.47.63 1.16l.12.5c.05.13.2.41.33.6q.14.21-.17.18c-.31-.03-.73-.32-1.01-.7m5.41 3.61c-1.64-.66-2.21-1.24-2.21-2.2V7.6l.14.1c.33.27.71.39 1.74.54.61.09.96.15 1.27.26 1 .33 1.63 1.01 1.77 1.93.05.26.02.77-.05 1.03-.06.21-.22.59-.26.6q-.02 0-.03-.1a1.3 1.3 0 0 0-.47-.94 6 6 0 0 0-1.9-.96m-1.16.27-.08-.35-.05-.12.08.09q.15.18.26.48c.06.16.06.2.06.46a1 1 0 0 1-.06.45c-.08.23-.18.38-.34.56a2 2 0 0 1-1.25.54l-.63.06a5 5 0 0 0-1.4.23l-.11.02c-.02-.01.24-.16.45-.26.29-.14.58-.22 1.24-.33.32-.05.65-.11.74-.15.81-.25 1.23-.9 1.1-1.67z"></path><path fill="#fff" d="M13.3 11.67a2 2 0 0 1-.15-1.35q.03-.07.05-.08.05 0 .12.06c.1.07.3.18.84.47.67.37 1.05.65 1.32.97q.34.42.44 1c.04.23.01.77-.05 1a2.4 2.4 0 0 1-1.37 1.67s.02-.09.08-.18q.3-.62.07-1.28a5 5 0 0 0-.66-1.2 8 8 0 0 1-.68-1.08zM7.12 14.2a4.5 4.5 0 0 1 2.06-1 3 3 0 0 1 1.08.05c.44.11.84.37 1.04.67s.29.56.38 1.13l.08.5q.11.46.37.65c.26.19.7.2 1.15.03l.14-.04c.02.01-.21.16-.36.24-.21.1-.37.14-.6.14q-.6 0-1.01-.62a4 4 0 0 1-.27-.55c-.3-.68-.44-.87-.78-1.1-.3-.18-.68-.23-.97-.09-.38.18-.48.68-.22.97.1.13.31.23.48.25.3.04.57-.2.57-.5q0-.29-.27-.4c-.27-.12-.56 0-.55.26q0 .15.16.23.06.03.01.02c-.24-.05-.3-.34-.1-.54.23-.23.72-.13.88.19.07.13.08.4.02.56-.15.37-.54.55-.95.45-.27-.07-.39-.15-.72-.49-.58-.6-.8-.71-1.63-.84l-.16-.02z"></path><path fill="#fff" fill-rule="evenodd" d="M8.29 6.89c-.22-.26-2.13-2.36-3.7-4.08l-.14.1 3.37 4.14q.18.26-.13.45a1 1 0 0 1-.47.13.6.6 0 0 1-.4-.17c-.07-.08-.4-.55-1.13-1.69l-1.04-1.6.99 1.8c.63 1.13.84 1.53.84 1.59 0 .1-.03.16-.17.31-.22.25-.32.53-.4 1.12-.08.65-.3 1.12-.94 1.9a4 4 0 0 0-.52.74c-.12.23-.15.36-.16.66a2.5 2.5 0 0 0 .5 1.6q.3.46.3.6c0 .07.02.07.32 0a3 3 0 0 0 1.62-.8c.2-.21.26-.33.26-.62 0-.2 0-.23-.06-.36-.09-.18-.24-.33-.58-.56-.45-.3-.65-.55-.7-.88-.04-.29.02-.47.26-1 .26-.54.33-.76.37-1.3.02-.36.07-.5.17-.6.1-.12.19-.16.45-.2q.61-.06.91-.37c.2-.17.28-.34.29-.6V7zm-2.98 5.76c-.08.15-.24.2-.36.11q-.1-.1-.01-.23.09-.14-.02-.17-.08-.05-.07-.09c0-.12.2-.17.35-.07s.2.29.11.45m3.87-4.31a1 1 0 0 0-.52-.05.7.7 0 0 0-.44.49c-.04.13-.02.37.04.45.09.11.17.15.4.15.46 0 .85-.2.89-.45.04-.19-.13-.47-.37-.59m.02.36a.5.5 0 0 1-.31.14c-.17 0-.34-.12-.34-.23 0-.2.34-.33.56-.18q.18.12.09.27" clip-rule="evenodd"></path></svg>

        `,
    address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
    reset: false,
    networks: [
      {
        name: "ETH",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/eth.png",
        reset: true,
        fullname: "ETH &nbsp;- Ethereum (ERC20)",
      },
      {
        name: "BSC",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/bsc.png",
        reset: true,
        fullname: "BSC &nbsp;- BNB Smart Chain  (BEP20)",
      },
    ],
  },
  {
    confirmations: 2,
    deposit: "Deposit",
    currency: "POL",
    name: "Polygon",
    icon: `
    
<svg data-ds-icon="POL" width="28" height="28" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><!----><path fill="#914fff" d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18"></path><path fill="#fff" d="M13.3 7.81a.8.8 0 0 0-.81 0l-1.87 1.1-1.28.7-1.84 1.11a.8.8 0 0 1-.8 0l-1.44-.87a.8.8 0 0 1-.4-.7V7.47q0-.42.4-.7l1.44-.84a.8.8 0 0 1 .8 0l1.44.87c.24.13.4.4.4.7v1.1l1.28-.73V6.73a.8.8 0 0 0-.4-.7L7.54 4.45a.8.8 0 0 0-.8 0l-2.75 1.6a.8.8 0 0 0-.4.67v3.15q0 .42.4.7l2.71 1.57c.23.14.53.14.8 0l1.84-1.07 1.28-.73 1.83-1.07a.8.8 0 0 1 .8 0l1.45.84c.23.13.4.4.4.7v1.67a.8.8 0 0 1-.4.7l-1.4.85a.8.8 0 0 1-.81 0l-1.44-.84a.8.8 0 0 1-.4-.7V11.4l-1.28.73v1.1q0 .44.4.71l2.71 1.58c.24.13.54.13.8 0L16 13.95a.8.8 0 0 0 .4-.7v-3.18a.8.8 0 0 0-.4-.7l-2.7-1.58z"></path></svg>
 `,
    address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
    reset: false,
    networks: [
      {
        name: "ETH",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/eth.png",
        reset: true,
        fullname: "ETH &nbsp;- Ethereum (ERC20)",
      },
      {
        name: "POLYGON",
        address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
        qrcode: "/images/qrcodes/pol.png",
        reset: true,
        fullname: "POL &nbsp;- Ploygon",
      },
    ],
  },
  {
    confirmations: 1,
    deposit: "Deposit",
    currency: "TRUMP",
    name: "TRUMP Coin",
    reset: true,
    icon: `
<img data-ds-icon="TrumpCoin" src="/_app/immutable/assets/trumpCoin.CN_uDPSO.webp" alt="Trump Coin Icon" class="inline-block shrink-0 rounded-full" style="width: 28px; height: 28px;">
        `,
    address: "0x83b139be9CBECAF5AD01C198952D764021a49f96",
    networks: [
      {
        name: "SOL",
        address: "6KAqsJpGqp1SZ4zXkYBSpCuaMfC8C98zCBUvfKznAAKn",
        qrcode: "/images/qrcodes/sol.png",
        reset: true,
        fullname: "SOL &nbsp;- Solana",
      },
    ],
  },
];


let __iconUidCounter = 0;
function uniqueIcon(svg) {
  const uid = `icon-${__iconUidCounter++}`;
  return svg.replace(/\bid="([^"]+)"/g, (_m, id) => `id="${id}-${uid}"`).replace(
    /url\(#([^)]+)\)/g,
    (_m, id) => `url(#${id}-${uid})`,
  );
}

class CryptoDepositForm {
  constructor() {
    this.selectedCoin = null;
    this.selectedNetwork = null;

    try {
      this.init();
    } catch (error) {
      console.error("Failed to initialize CryptoDepositForm:", error);
    }
  }

  init() {
    this.setupElements();
    if (!this.currencySelect) {
      throw new Error("Required DOM elements not found");
    }
    this.searchInput.addEventListener("input", () => {
      const searchTerm = this.searchInput.value;
      this.populateCurrencyOptions(searchTerm);
    });
    this.populateCurrencyOptions();
    this.setupEventListeners();
    this.loadFirstCurrencyWhenModalVisible();
  }

  // The wallet modal is still display:none at page load, so loading the
  // first address/QR here (instead of waiting) would run its loading-pulse
  // animation off-screen and finish before the user ever opens the modal.
  // Waits for the modal to actually become visible first so that animation
  // plays where it can be seen, same as a later currency switch.
  loadFirstCurrencyWhenModalVisible() {
    const walletModal = document.getElementById("myModal");
    if (!walletModal || getComputedStyle(walletModal).display !== "none") {
      this.selectFirstCurrency();
      return;
    }
    const observer = new MutationObserver(() => {
      if (getComputedStyle(walletModal).display !== "none") {
        observer.disconnect();
        this.selectFirstCurrency();
      }
    });
    observer.observe(walletModal, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });
  }

  setupElements() {
    this.currency_arrow = document.querySelector(".currency-arrow");
    this.network_arrow = document.querySelector(".network-arrow");
    this.currencySelect = document.getElementById("currency-select");
    this.currencyOptions = document.getElementById("currency-options");
    this.networkGroup = document.getElementById("network-group");
    this.networkSelect = document.getElementById("network-select");
    this.networkOptions = document.getElementById("network-options");
    this.addressInput = document.getElementById("address-input");
    this.addressColorOverlay = document.getElementById("address-color-overlay");
    this.qrcodeimg = document.getElementById("qrcode-img");
    this.qrcodePlaceholder = document.getElementById("qrcode-placeholder");
    this.copyBtn = document.getElementById("copy-btn-tooltip");
    this.depositInfo = document.getElementById("deposit-info");
    this.selectedCurrencySpan = document.getElementById("selected-currency");
    this.selectedNetworkSpan = document.getElementById("selected-network");
    this.networkInfo = document.getElementById("network-info");
    this.showCopied = document.getElementById("show-copied-1");
    this.showCopied2 = document.getElementById("show-copied-22");
    this.resetbutton = document.getElementById("reset-address-button");
    this.searchinputcontainer = document.getElementById(
      "search-input-container",
    );
    this.searchInput = document.getElementById("input-input-search");
    this.confirmation_code =
      document.getElementsByClassName("confirmation-coin");

    // Add ARIA attributes for accessibility
    if (this.currencySelect) {
      this.currencySelect.setAttribute("aria-haspopup", "listbox");
      this.currencySelect.setAttribute("aria-expanded", "false");
    }
    if (this.networkSelect) {
      this.networkSelect.setAttribute("aria-haspopup", "listbox");
      this.networkSelect.setAttribute("aria-expanded", "false");
    }

    // Keep the color overlay's size matching the real textarea's rendered
    // size whenever it changes for any reason - including the modal going
    // from display:none to visible, which offsetWidth/offsetHeight-based
    // syncs run before can't catch since hidden elements report 0.
    if (this.addressInput && this.addressColorOverlay && window.ResizeObserver) {
      this._addressResizeObserver = new ResizeObserver(() =>
        this.syncAddressOverlaySize(),
      );
      this._addressResizeObserver.observe(this.addressInput);
    }
  }

  populateCurrencyOptions(searchTerm = "") {
    this.currencyOptions.innerHTML = "";

    const filteredCoins = coins.filter((coin) => {
      const lowerSearch = searchTerm.toLowerCase();
      return (
        coin.currency.toLowerCase().includes(lowerSearch) ||
        coin.name.toLowerCase().includes(lowerSearch)
      );
    });

    filteredCoins.forEach((coin) => {
      const option = this.createCurrencyOption(coin);
      this.currencyOptions.appendChild(option);
    });
  }

  createCurrencyOption(coin) {
    const option = document.createElement("button");
    option.className =
      "coins-custom option font-family:var(--ds-font-family-default)] [font-variant-numeric:var(--ds-font-variant-numeric,lining-nums_tabular-nums)] [font-feature-settings:var(--ds-font-feature-settings,&quot;salt&quot;_on)] [font-weight:var(--ds-font-weight-thick)] inline-flex relative items-center gap-2 whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-(--ds-opacity-disabled,0.5) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ds-color-focus-ring-outer,var(--color-white)) active:scale-[0.98] not-prime-active:bg-transparent not-prime-active:text-grey-400 not-prime-active:hover:bg-grey-200 not-prime-active:hover:text-neutral-black not-prime-active:focus-visible:outline-grey-300 prime-active:state-layer-surface prime-active:bg-overlay-surface-default prime-active:text-on-surface prime-active:focus-visible:[&_svg]:text-on-surface prime-active:[&:not([data-icon-only=false]):has(>svg:only-child)_svg]:!text-on-surface var(--ds-font-size-xs) [&_svg]:text-(--ds-color-subtle-on-surface,var(--color-grey-400)) [&:hover>svg]:text-(--ds-color-on-surface,var(--color-grey-400)) justify-start shadow-none text-left w-full rounded-none py-2 px-4";

    option.setAttribute("role", "option");
    option.setAttribute("aria-selected", "false");
    option.tabIndex = 0;

    option.innerHTML = `
    
           <div class="ctainer svelte-1i3wgrn"><div class="currency-details svelte-1i3wgrn" style="align-items:center;">${uniqueIcon(coin.icon)} <div  class="currency-ctainer items-baseline svelte-1i3wgrn"><span style="line-height: 16px;" tag="span" type="body" size="md" strong="true" variant="neutral-default" class="text-neutral-default ds-body-md-strong" data-ds-text="true">${coin.currency}</span> <span style="line-height: 14px;" tag="span" type="body" size="sm" class="ds-body-sm text-(--color-subtle-on-surface,var(--color-grey-200))" data-ds-text="true">${coin.name}</span></div></div> </div>
        `;

    option.addEventListener("click", () => this.selectCurrency(coin));

    option.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        this.selectCurrency(coin);
      }
    });
    return option;
  }

  selectFirstCurrency() {
    if (coins.length > 0) {
      this.selectCurrency(coins[0]);
    }
  }

  selectCurrency(coin) {
    this.selectedCoin = coin;
    this.selectedNetwork = null;

    // Update currency display
    const selectDisplay = this.currencySelect.querySelector(".select-display");
    selectDisplay.innerHTML = `
             <div class="ctainer  svelte-1i3wgrn"><div class="currency-details svelte-1i3wgrn" style="align-items:center;">${uniqueIcon(this.selectedCoin.icon)} <div class="currency-ctainer items-baseline svelte-1i3wgrn"><span style="line-height: 16px;" tag="span" type="body" size="md" strong="true" variant="neutral-default" class="text-neutral-default ds-body-md-strong" data-ds-text="true">${this.selectedCoin.currency}</span> <span style="line-height: 14px;" tag="span" type="body" size="sm" class="ds-body-sm text-(--color-subtle-on-base-neutral,var(--color-grey-200))" data-ds-text="true">${this.selectedCoin.name}</span></div></div> </div>
        <svg  data-ds-icon="ChevronDown" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0 chevrown-down"><path fill="currentColor" d="M17.293 8.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6-.068-.076A1 1 0 0 1 6.63 8.225l.076.068L12 13.586z"></path></svg>
        `;
    confirmationSpan.textContent = `${this.selectedCoin.confirmations} ${this.selectedCoin.confirmations > 1 ? "Confirmations" : "Confirmation"}`;
    if (coin.reset === true) {
      this.resetbutton.style.display = "flex";
      // remove after sudo element
      this.copyBtn.classList.remove("hello");
    } else {
      this.resetbutton.style.display = "none";
      this.copyBtn.classList.add("hello");
    }
    // Close currency dropdown
    this.currencySelect.classList.remove("active");
    this.currency_arrow.style.display = "none";
    this.currencySelect.setAttribute("aria-expanded", "false");

    // Handle networks
    if (coin.networks && coin.networks.length > 0) {
      this.showNetworkDropdown(coin.networks);
      // Auto-select first network and its address
      this.selectNetwork(coin.networks[0]);
    } else {
      this.hideNetworkDropdown();
      // Use main currency address
      this.updateDepositDetails(coin.address, coin.qrcode);
    }

    // Update info panel
    this.updateDepositInfo();
  }

  showNetworkDropdown(networks) {
    this.currency_arrow.style.display = "none";
    // this.network_arrow.style.display = "block";
    this.networkGroup.style.display = "flex";
    this.populateNetworkOptions(networks);
  }

  hideNetworkDropdown() {
    this.network_arrow.style.display = "none";

    this.networkGroup.style.display = "none";
  }

  populateNetworkOptions(networks) {
    this.networkOptions.innerHTML = "";
    networks.forEach((network) => {
      const option = this.createNetworkOption(network);
      this.networkOptions.appendChild(option);
    });
  }

  createNetworkOption(network) {
    const option = document.createElement("div");
    option.className = "option";
    option.setAttribute("role", "option");
    option.setAttribute("aria-selected", "false");
    option.tabIndex = 0;

    option.innerHTML = `
         

            <button style="width: 100%; background: #213545;  user-select: none !important;
  -webkit-user-select: none !important;" type="button" tabindex="0"
             class="networkcoinhover [font-family:var(--ds-font-family-default)] button-hover [font-variant-numeric:var(--ds-font-variant-numeric,lining-nums_tabular-nums)] [font-feature-settings:var(--ds-font-feature-settings,&quot;salt&quot;_on)] inline-flex relative items-center gap-2 [font-weight:var(--ds-font-weight-thick)] whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-(--ds-opacity-disabled,0.5) focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] focus-visible:outline-(--ds-color-focus-ring-outer,var(--color-white)) state-layer-base bg-(--ds-color-base-neutral,var(--color-grey-400)) text-(--ds-color-on-base-neutral,var(--color-white))  not-prime-active:hover:text-white var(--ds-font-size-sm) justify-start rounded-none shadow-none p-4"
              data-testid="chain-toggle-eth" aria-label="Select eth" data-button-root=""
             >${network.fullname}</button>
        `;

    option.addEventListener("click", () => this.selectNetwork(network));
    option.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        this.selectNetwork(network);
      }
    });
    return option;
  }

  selectNetwork(network) {
    this.selectedNetwork = network;

    // Update network display
    const selectDisplay = this.networkSelect.querySelector(".select-display");
    selectDisplay.innerHTML = `
        <div class="flex items-center h-6"><span type="body" tag="span" size="md" strong="true" class=" ds-body-md-strong" data-ds-text="true">${network.name}</span></div>
          <svg data-ds-icon="ChevronDown" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" class="chevrown-down2 inline-block shrink-0"><path fill="currentColor" d="M17.293 8.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6-.068-.076A1 1 0 0 1 6.63 8.225l.076.068L12 13.586z"></path></svg>
            
        `;

    // Close network dropdown
    this.network_arrow.style.display = "none";

    this.networkSelect.classList.remove("active");
    this.networkSelect.setAttribute("aria-expanded", "false");

    // Update address with network-specific address
    this.updateDepositDetails(network.address, network.qrcode);
    if (network.reset === true) {
      this.resetbutton.style.display = "flex";
      this.copyBtn.classList.remove("hello");
    } else {
      this.resetbutton.style.display = "none";
      this.copyBtn.classList.add("hello");
    }

    // Update info panel
    this.updateDepositInfo();
  }

  updateAddress(address) {
    this.addressInput.value = address || "";
    this.copyBtn.style.display = address ? "flex" : "none";
    if (this.addressColorOverlay) {
      this.addressColorOverlay.innerHTML = address
        ? this.renderColoredAddress(address)
        : "";
    }
    this.syncAddressOverlaySize();
  }

  // Keeps the color overlay's box matching the real textarea's rendered
  // box. The textarea's own width comes from the flex layout it shares
  // with the copy/reset buttons next to it, which the absolutely-positioned
  // overlay sits outside of and so can't pick up from CSS alone.
  //
  // Height is different: it used to just copy the textarea's own
  // offsetHeight, trusting the textarea's CSS `field-sizing: content` to
  // auto-grow for wrapped two-line addresses. That property isn't
  // supported on many mobile browsers, where the textarea silently stays
  // at its single-line height and the wrapped second line gets clipped.
  // So instead the overlay (a plain div, which always sizes to its content
  // reliably) measures the height the address actually needs, and both
  // the overlay and the real textarea are set to that explicit height -
  // which works everywhere regardless of field-sizing support. Pass
  // explicitHeight to skip measuring (e.g. the fixed loading-state size).
  syncAddressOverlaySize(explicitHeight) {
    if (!this.addressColorOverlay || !this.addressInput) return;
    this.addressColorOverlay.style.width = this.addressInput.offsetWidth + "px";

    let height = explicitHeight;
    if (height === undefined) {
      this.addressColorOverlay.style.height = "auto";
      height = Math.min(Math.max(this.addressColorOverlay.scrollHeight, 44), 92);
    }

    this.addressColorOverlay.style.height = height + "px";
    this.addressInput.style.height = height + "px";
  }

  // Splits an address into alternating highlighted/muted segments (bright
  // at the start, the exact middle, and the end; dimmer elsewhere) so it's
  // easier to visually spot-check, rendered into the color overlay that
  // sits on top of the real (invisible-text) address textarea.
  renderColoredAddress(address) {
    const esc = (s) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const highlight = (text) =>
      `<span class="address-highlight">${esc(text)}</span>`;
    const muted = (text) => `<span class="address-muted">${esc(text)}</span>`;

    const len = address.length;
    const edgeLen = Math.min(5, Math.floor(len / 5) || 1);
    if (len <= edgeLen * 2 + 4) {
      return highlight(address);
    }

    const head = address.slice(0, edgeLen);
    const tail = address.slice(len - edgeLen);
    const middle = address.slice(edgeLen, len - edgeLen);
    const midHighlightLen = Math.min(edgeLen, middle.length);
    const maxStart = Math.max(middle.length - midHighlightLen, 0);
    // Centers the highlighted segment on the address's exact midpoint
    // rather than anywhere else within the middle range.
    const idealStart = Math.floor((len - midHighlightLen) / 2) - edgeLen;
    const midStart = Math.min(Math.max(idealStart, 0), maxStart);

    const before = middle.slice(0, midStart);
    const mid = middle.slice(midStart, midStart + midHighlightLen);
    const after = middle.slice(midStart + midHighlightLen);

    return (
      highlight(head) +
      (before ? muted(before) : "") +
      (mid ? highlight(mid) : "") +
      (after ? muted(after) : "") +
      highlight(tail)
    );
  }

  updateQRCode(qrcodeUrl) {
    if (this.qrcodeimg) {
      this.qrcodeimg.src = qrcodeUrl || "";
    }
  }

  // Briefly shows an hourglass in the address field and swaps the QR code
  // for a pulsing placeholder block (matches stake.com's loading state)
  // before revealing the new address/QR, instead of swapping them in
  // instantly.
  updateDepositDetails(address, qrcodeUrl) {
    this.addressInput.value = "⏳";
    if (this.addressColorOverlay) {
      this.addressColorOverlay.textContent = "⏳";
    }
    this.syncAddressOverlaySize(66);
    this.resetbutton.classList.add("address-icon-loading");
    this.copyBtn.classList.add("address-icon-loading");
    if (this.qrcodeimg) {
      this.qrcodeimg.style.display = "none";
    }
    if (this.qrcodePlaceholder) {
      this.qrcodePlaceholder.style.display = "inline-flex";
    }

    // Waits for both the minimum loading-pulse duration AND the new QR
    // image to actually finish loading, whichever takes longer - on a
    // first-ever switch to a given coin the image isn't cached yet, and
    // revealing it before it's loaded showed a blank white flash.
    this._depositLoadingRequestId = (this._depositLoadingRequestId || 0) + 1;
    const requestId = this._depositLoadingRequestId;

    const minDelay = new Promise((resolve) => setTimeout(resolve, 1000));
    // Loads into the real <img> itself (while still hidden) rather than a
    // throwaway Image(), so there's no second fetch after this resolves.
    // Resolves with whether the image actually loaded, so a failed fetch
    // never reveals the browser's broken-image/alt-text fallback - the
    // placeholder just stays up instead.
    const imageReady = new Promise((resolve) => {
      if (!qrcodeUrl || !this.qrcodeimg) {
        resolve(false);
        return;
      }
      this.qrcodeimg.onload = () => resolve(true);
      this.qrcodeimg.onerror = () => resolve(false);
      this.qrcodeimg.src = qrcodeUrl;
    });

    Promise.all([minDelay, imageReady]).then(([, loaded]) => {
      if (requestId !== this._depositLoadingRequestId) return;
      this.resetbutton.classList.remove("address-icon-loading");
      this.copyBtn.classList.remove("address-icon-loading");
      this.updateAddress(address);
      if (loaded) {
        if (this.qrcodeimg) {
          this.qrcodeimg.style.display = "";
        }
        if (this.qrcodePlaceholder) {
          this.qrcodePlaceholder.style.display = "none";
        }
      }
    });
  }

  updateDepositInfo() {
    if (this.selectedCoin) {
      this.depositInfo.style.display = "block";
      this.selectedCurrencySpan.textContent = `${this.selectedCoin.currency} - ${this.selectedCoin.name}`;

      if (this.selectedNetwork) {
        this.networkInfo.style.display = "flex";
        this.selectedNetworkSpan.textContent = this.selectedNetwork.name;
      } else {
        this.networkInfo.style.display = "none";
      }
    } else {
      this.depositInfo.style.display = "none";
    }
  }

  setupEventListeners() {
    // Keep the address color overlay's size matching the real textarea's
    // on viewport/layout changes (e.g. resizing the window).
    window.addEventListener("resize", () => this.syncAddressOverlaySize());

    // Currency dropdown toggle
    this.currencySelect.addEventListener("click", (e) => {
      if (!e.target.closest(".option")) {
        this.toggleDropdown(this.currencySelect);
      }
    });

    // Network dropdown toggle
    this.networkSelect.addEventListener("click", (e) => {
      if (!e.target.closest(".option")) {
        this.toggleDropdown(this.networkSelect);
      }
    });

    // Copy button
    this.copyBtn?.addEventListener("click", () => this.copyAddress());

    // Close dropdowns when clicking outside
    document.addEventListener("click", (e) => {
      if (this.searchInput && this.searchInput.contains(e.target)) {
        this.searchInput.focus();
        this.searchInput.classList.add("add-animation");
        document
          .querySelectorAll(".chevrown-down, .chevron-down, .chevrown-down2")
          .forEach((ch) => {
            ch.classList.add("rotate_chevron");
          });
        this.currency_arrow.style.display = "block";

        this.currencySelect.classList.add("active");
        this.currencySelect.add("aria-expanded", "false");
        return;
      } else {
        if (!this.currencySelect.contains(e.target)) {
          this.currency_arrow.style.display = "none";
          this.currencySelect.classList.remove("active");
          this.currencySelect.setAttribute("aria-expanded", "false");
        }
        if (!this.networkSelect.contains(e.target)) {
          this.network_arrow.style.display = "none";
          this.networkSelect.classList.remove("active");
          this.networkSelect.setAttribute("aria-expanded", "false");
        }
      }
    });
  }

  toggleDropdown(dropdown) {
    const isOpening = !dropdown.classList.contains("active");

    // Hide both arrow wrappers
    this.currency_arrow.style.display = "none";
    this.network_arrow.style.display = "none";

    // ❌ Remove from ALL first (important)
    document.querySelectorAll(".custom-select").forEach((select) => {
      select.classList.remove("active");
      select.classList.remove("currency-bg"); // 👈 remove bg from all
      select.setAttribute("aria-expanded", "false");
    });
    this.searchInput.classList.remove("add-animation");

    if (isOpening) {
      // Show correct arrow
      if (dropdown.classList.contains("currency-selection")) {
        this.currency_arrow.style.display = "block";
      } else {
        this.network_arrow.style.display = "block";
      }

      // Add active
      setTimeout(() => {
        this.searchInput.classList.add("add-animation");
      }, 10);
      dropdown.classList.add("active");
      dropdown.setAttribute("aria-expanded", "true");

      // Rotate chevron
      const chevron = dropdown.querySelector(
        ".chevrown-down, .chevron-down, .chevrown-down2",
      );
      if (chevron) {
        chevron.classList.add("rotate_chevron");
      }

      setTimeout(() => {
        const firstOption = dropdown.querySelector(".option");
        if (firstOption) firstOption.focus();
      }, 0);
    } else {
      // Remove chevron rotation
      document
        .querySelectorAll(".chevrown-down, .chevron-down, .chevrown-down2")
        .forEach((ch) => {
          ch.classList.remove("rotate_chevron");
        });

      // ❌ remove bg when closing
      dropdown.classList.remove("currency-bg");
    }
  }

  async copyAddress() {
    if (this.addressInput.value) {
      try {
        await navigator.clipboard.writeText(this.addressInput.value);
      } catch (err) {
        // Fallback for older browsers
        this.fallbackCopyTextToClipboard(this.addressInput.value);
      }
    }
  }

  fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
  }
}

// "Load More" buttons in the casino home game grids had no click handler
// at all, so they just sat there doing nothing. Route each one to its
// category page on stake.com.
const loadMoreDestinations = {
  "load-more-slots": "https://stake.com/casino/group/slots",
  "load-more-stake-originals":
    "https://stake.com/casino/group/stake-originals",
  "load-more-live-casino": "https://stake.com/casino/group/live-casino",
  "load-more-game-shows": "https://stake.com/casino/group/game-shows",
  "load-more-providers": "https://stake.com/casino/collection/provider",
  "load-more-new-providers":
    "https://stake.com/casino/collection/featured-publishers",
  "load-more-only-on-stake": "https://stake.com/casino/group/only-on-stake",
  "load-more-burst-games": "https://stake.com/casino/group/burst-games",
  "load-more-new-releases": "https://stake.com/casino/group/new-releases",
};

document.querySelectorAll("[data-analytics]").forEach((el) => {
  const destination = loadMoreDestinations[el.dataset.analytics];
  if (destination) {
    el.addEventListener("click", () => {
      window.location.href = destination;
    });
  }
});

// Initialize the form when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  try {
    new CryptoDepositForm();
  } catch (error) {
    console.error("Failed to initialize crypto deposit form:", error);
    // You might want to show an error message to the user here
  }
});