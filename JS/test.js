const hikeExp = document.querySelector(".hike-exp");
const slide = document.querySelector(".slide");
/*METHOD 1
window.addEventListener("scroll", scrollReveal);

function scrollReveal() {
  //console.log("hey");
  //Get the postion of an object
  const hikePos = hikeExp.getBoundingClientRect().top;
  const windowHeight = window.innerHeight / 1.5;
  //console.log(hikePos);
  if (hikeExp < windowHeight) {
    hikeExp.style.color = "red";
  }
} */

/* METHOD 2 
let options = {
  threshold: 0.5,
};
let observer = new IntersectionObserver(slideAnim, options);
function slideAnim(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      slide.style.background = "white";
    }
  });
}
observer.observe(slide); */
const controller = new ScrollMagic.Controller();

const exploreScene = new ScrollMagic.Scene({
  triggerElement: ".hike-exp",
  triggerHook: 0.5,
})
  .addIndicators({ colorStart: "white", colorTrigger: "white" })
  .addTo(controller);
