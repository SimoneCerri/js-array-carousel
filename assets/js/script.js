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

let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");

//FOR cycle with template literal.
for (let index = 0; index < carouselImages.length; index++)
{
    const singleSlideImage = carouselImages[index];
    console.log(singleSlideImage);

    let markup = ` <img src="./assets/img/${singleSlideImage}" alt="" class="${ index === activeImage   ? "active"  : ""  }"></img> `
    console.log(markup);
    
    //put on htlm
    slidesBox.insertAdjacentHTML("beforeend",markup);

}

//on CLICK change "active" img.

//CLICK to next button for next img.
prevButton.addEventListener
("click",function()
{
    console.log("slide up to previous img");
    activeImage--;
    //change position of active class
}
)
//CLICK to prev button for previous img.
nextButton.addEventListener
("click", function ()
{
    console.log("slide down to next img");
    activeImage++;
    //change position of active class
    //remove from the last img
    let currentImage = document.querySelector("img.active");
    currentImage.classList.remove("active");
    //add to the new one
    let slidesNode = document.querySelectorAll(".slides img"); //select all img inside the NodeList
    console.log(slidesNode);//NodeList
    console.log(slidesBox);//Div
    console.log(slidesNode[activeImage]);//img selected

}
)