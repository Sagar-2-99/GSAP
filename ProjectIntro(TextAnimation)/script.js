function breakThetext(){
    var h1 = document.querySelector('h1')
    console.log(h1);
    var h1Text = h1.textContent;
    //Can be also done as below
    //var h1 = document.querySelector('h1').textContent

    var splittedText = h1Text.split("");

    var clutter = "";


    var halfValue = Math.floor(splittedText.length/2);

    splittedText.forEach(function(elem, idx){
        console.log(idx)
        if(idx<halfValue){
            clutter += `<span class="a">${elem}</span>`; //Converted all elements broke into span 
        }else{
            clutter += `<span class="b">${elem}</span>`;
        }
    })

    console.log(clutter);

    h1.innerHTML = clutter;

}

breakThetext();

gsap.from("h1 .a",{
    y:50,
    duration:0.6,
    delay:0.5,
    stagger:0.15,
    opacity:0
})

gsap.from("h1 .b",{
    y:50,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0
})

//span is a inline element 

// gsap.from("h1 span",{
//     y:70, //So this here means that we are applying transform and translate so we need to convert it to span block to get effect of the prop.
//     opacity:0,
//     delay:0.5,
//     duration:0.5,
//     stagger:-0.15, //+ve value means straight forward otherwise vice versa

// })