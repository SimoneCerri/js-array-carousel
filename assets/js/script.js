//make an array in JS, removing the HTML static markup.

//array with the markup inside.
let carouselImages = 
[
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp",    
];

let activeImage = 0 ;
let slidesBox = document.querySelector(".slides");
console.log(carouselImages,activeImage,slidesBox);

//FOR cycle with template literal.
for (let index = 0; index < carouselImages.length; index++) {
    const singleSlideImage = carouselImages[index];
    console.log(singleSlideImage);
    
}