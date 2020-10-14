/*
    event listener for the button
    when page is loaded, add data
    when clicked move to next data in array
    start a count on 0
*/

const data = [
  {
    image: "desktop-image-hero-1.jpg",
    heading: "Discover innovative ways to decorate",
    text:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    image: "desktop-image-hero-2.jpg",
    heading: "We are available all across the globe",
    text:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: "desktop-image-hero-3.jpg",
    heading: "Manufactured with the best materials",
    text:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

const leftBtn = document.querySelector(".slider__box--left");
const rightBtn = document.querySelector(".slider__box--right");
let count = 0;
const text = document.querySelector(".discover__text");
const heading = document.querySelector(".discover__heading");
const image = document.querySelector(".nav");

//functions

function keyAction(e) {
  if (e.keyCode === 39) {
    changeRight();
  }
  if (e.keyCode === 37) {
    changeLeft();
  }
}
const setCount = (sign) => {
  // check the value of count
  //if count is == to data lenght reset count
  sign === "+" ? count++ : count--;
  if (count >= data.length) {
    //set count to 0
    count = 0;
  } else if (count < 0) {
    //set count to data length
    count = data.length - 1;
  } else {
    return;
  }
};
const changeLeft = () => {
  setCount("-");
  heading.textContent = data[count].heading;
  text.textContent = data[count].text;
  //set background image
  image.style.backgroundImage = `url(../images/${data[count].image})`;
};
const changeRight = () => {
  setCount("+");
  heading.textContent = data[count].heading;
  text.textContent = data[count].text;
  image.style.backgroundImage = `url(../images/${data[count].image})`;
};

window.addEventListener("keydown", keyAction);
leftBtn.addEventListener("click", changeLeft);
rightBtn.addEventListener("click", changeRight);
