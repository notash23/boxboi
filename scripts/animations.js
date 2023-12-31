import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { anim, render, frameCount } from "../helpers/image_loader";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const fillTo = gsap.quickTo(".progress-fill", "margin-bottom", { duration: 0.3, ease: "power2" })
const outlineTo = gsap.quickTo(".progress-outline", "stroke-dashoffset", { duration: 0.3, ease: "power2" })

export const animateLoad = (isMobile, progress) => {
  if (isMobile) {
    fillTo(progress * 220 - 153)
  } else {
    fillTo(progress * 387 - 182)
  }
  outlineTo(887 - progress*887)
}

const startTl = gsap.timeline({
  paused: true,
})

startTl.to(".progress-outline", {
  duration: 1,
  delay: 1.5,
  'stroke-dashoffset': -887,
})

startTl.to(".progress-outline", {
  duration: 4,
  delay: 0.5,
  'stroke-dasharray': 12,
  'stroke-dashoffset': 887,
  ease: "power2.out"
})

startTl.to(".cover", {
  duration: 2,
  backgroundColor: '#000000'
})

startTl.to(window, { 
  duration: 2,
  scrollTo: {
    y: "#NoGame",
    autoKill: true,
  },
  ease: "expo.inOut"
})

export const animateDone = (isMobile, enableScroll) => {
  startTl.eventCallback("onComplete", enableScroll)
  animateLoad(isMobile, 0)
  startTl.play()
}

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#intro",
    pin: true,
    start: "center center",
    end: "center -1200%",
    scrub: 0.5,
  }
})

tl.set("#Just", {
  opacity: 0,
  scale: 0.6
})

tl.to('#NoGame', {
  duration: 2,
  opacity:0,
  scale: 0.5,
  delay: 1
})

tl.to('#Just', {
  duration: 2,
  opacity: 1,
  scale: 1,
  delay: 2,
})

tl.to('#Just', {
  duration: 4,
  opacity: 0,
  delay: 1.5
})

tl.to(anim, {
  duration: 15,
  frame: frameCount - 1,
  snap: 'frame',
  ease: "expoScale(0.5,7,none)",
  onUpdate: render
})

tl.to('.canvas', {
  duration: 3,
  opacity: 0
})

export const setModelAnimation = (camera, startRender, stopRender) => {
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#render",
      pin: true,
      start: "top top",
      end: "bottom -1000%",
      scrub: 0.3,
      onEnter: () => {
        startRender()
      },
      onEnterBack: () => {
        startRender()
      },
      onLeave: () => {
        stopRender()
      },
      onLeaveBack: () => {
        stopRender()
      },
    }
  })
    

  tl1.set(".webgl", {
    opacity: 0,
  })
  
  tl1.set(camera.position, {
    x: 4.5,
    y: 3.75,
    z: 3.16
  });
  
  tl1.to('.webgl', {
    opacity:1,
  })
  
  tl1.to(camera.position, {
    duration: 2,
    x: 0.532,
    y: 0.772,
    z: -6.52
  })
  
  tl1.to(camera.position, {
    duration: 2,
    x: -6.83,
    y: 1.98,
    z: -2.93
  })
  
  tl1.to(camera.position, {
    duration: 2,
    x: -5.47,
    y: 2.64,
    z: 4.27
  })
  
  tl1.to('.webgl', {
    opacity: 0,
  })  
}

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#Out",
    start: "center bottom",
    end: "center center",
    scrub: 0.5,
  },
})

tl2.from("#Out", {
  opacity: 0,
  x: "100vh",
})

tl2.from("#heart", {
  opacity: 0,
  y: "20vh",
  delay: 1
})

tl2.from("#broken", {
  opacity: 0,
  y: "20vh",
})
