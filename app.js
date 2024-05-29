function openNav() {
  document.getElementById("navbar-mobile").style.width = "250px";

}

function closeNav() {
  document.getElementById("navbar-mobile").style.width = "0";
}

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(TextPlugin)
  
 });

document.querySelectorAll('.floating-animation').forEach((element) => {
 const randomDelay = Math.random() * 10;

 gsap.to(element, {
    rotate:5,
    y: -10,
    repeat: -1, 
    yoyo: true, 
    ease: "power1.inOut",
    duration: 4 ,
    delay:randomDelay
        });
});


document.querySelectorAll('.boost-animation').forEach((element) => {
 const randomDelay = Math.random() * 10;

 gsap.to(element, {
    rotate:2,
    y: -5,
    repeat: -1, 
    yoyo: true, 
    ease: "power1.inOut",
    duration: 4 ,
    delay:randomDelay
        });
});

//Smooth scrolling
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)