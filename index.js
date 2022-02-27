import "open-props/style";
import "open-props/normalize";

// import confetti from "canvas-confetti";

// confetti.create(null, {
//   resize: true,
//   useWorker: true,
// })({ particleCount: 200, spread: 200 });

// console?.log("ready.");

var tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
tl.to("#hello", { opacity: 1, duration: 3 });
// tl.to("#hello", { x: 0, duration: 3 });
// tl.to("#hello", { scale: 3, duration: 1.1 });
// tl.to("#hello", { x: -1000, duration: 6, ease: "power4" });
// tl.to("#hello", { opacity: 0, duration: 1 });

var tlName = gsap.timeline({ repeat: 0, repeatDelay: 1 });
tlName.to("#name", { scale: 1, duration: 2 });
// tlName.to("#name", { x: 0, duration: 3 });
// tlName.to("#name", { scale: 3, duration: 0.5 });
// tlName.to("#name", { x: -1000, duration: 1 });

var tlName = gsap.timeline({ defaults: { duration: 3 } });
tlName
  .to("#angular", { scale: 1.5, duration: 1.5, ease: "power1" })
  .to("#ionic", { scale: 1.2, duration: 2, ease: "power2" });

// var tlName = gsap.timeline({ repeat: 23, repeatDelay: 1.2 });
// tlName.to("#ionic", { scale: 1.3, duration: 1, ease: "bounce" });

var tlName = gsap.timeline({ repeat: 2323, repeatDelay: 1 });

tlName.to("#dot", { opacity: 0.5, duration: 0.1 });
