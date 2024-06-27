window.addEventListener('wheel', function(dets){ 
    /* function ke andar kuch bhi paas karne pe hame yeh pata chalta hai ki woh jab event hua toh kya kya ghatnaye hui means variables mai change aaye */
    console.log(dets.deltaY);
    if(dets.deltaY > 0){
        console.log("Seedha scrolling");
        gsap.to(".marque",{
            transform:'translateX(-100%)',
            duration:2,
            repeat:-1,
            ease:"none",
        })
        
        gsap.to(".marque img",{
            rotate:180
        })

    }else{
        console.log("Ulta Scrolling");
        gsap.to(".marque",{
            transform:'translateX(100%)',
            duration:2,
            repeat: -1,
            ease:"none",
        })
        gsap.to(".marque img",{
            rotate:0
        })
    }
})


