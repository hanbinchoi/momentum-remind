const clock = document.querySelector("h2#clock");
let bling = false;

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  if (bling) {
    clock.innerText = `${hours}:${minutes}`;
    bling = false;
  } else {
    clock.innerText = `${hours} ${minutes}`;
    bling = true;
  }
}

getClock();
setInterval(getClock, 700);
