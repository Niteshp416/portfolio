
var typed = new Typed(".text", {
  strings: ["Desining" , "Painting" , "Hand-Crafting", "Sketching"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
  if (window.pageYOffset > 100){
      toTop.classList.add("active");
  }
  else{
      toTop.classList.remove("active");
  }
})

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}