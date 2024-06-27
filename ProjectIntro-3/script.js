gsap.from("#page1 #box", {
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
})

 gsap.from("#page4 #box", {
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    /* scrollTrigger:"#page2 #box" */
   scrollTrigger:{
        trigger:"#page4 #box",
        scoller:"body",
        markers:true,
        start:"top 60%"
    }
})

gsap.from("#page3 #box", {
    scale:0,
    opacity:0,
    rotate:720,
    duration:1,
    /* scrollTrigger:"#page2 #box" */
   scrollTrigger:{
        trigger:"#page3 #box",
        scoller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2, //can take true as value and 0 to 5 value and higher the value more it will be smooth.
        pin:true
    }
})

gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})

gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})