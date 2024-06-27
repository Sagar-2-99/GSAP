gsap.to("#box1",{
    //Animation in form of key value pair
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius: "50%",
    scale:0.5,
    repeat:-1,//use positive value for that number of time + 1 for 
    //default number of time repeatation also -1 for infinite number of time repeatation
    yoyo:true //for bouncy effect means it goes further and returns back rather than the breaking effect 
})
//gsap.to("#nav h4")

gsap.from("#box2",{
    //Animation in form of key value pair
    x:1000,
    duration:3,
    delay:1,
    repeat:1
})

gsap.from("h1", {
    opacity:0,
    y:20,
    color:"red",
    duration:3,
    delay:1,
    stagger:-1 //use positive value to let 1st element appear before second one and so on
})

var tl = gsap.timeline()
tl.to("#boxA", {
    x:1500,
    rotate:360,
    duration:1.5,
    delay:1
})

tl.to("#boxB",{
    x:1500,
    duration:1.5,
})

tl.to("#boxC",{
    x:1500,
    duration:2
})

tl.to("#boxD",{
    x:1500,
    duration:3
})