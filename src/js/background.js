const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundSize = "cover";

console.log(document.body.style.filter);
