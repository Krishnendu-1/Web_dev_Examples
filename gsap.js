gsap.from("div",{
    color:"yellow",
    duration:3,
    opacity:1,
    ease:"power4.inout"
    })
gsap.registerPlugin(ScrollTrigger);//each and every character should be written correctly, case sensitive

gsap.to(".box",{
    scrollTrigger: {
        trigger:".box",
        start:"top 50%",//when top of the square touches scroller end
        end:"center 20%",
       // end:()=>`+=${document.querySelector(".box").offsetHeight}`,//offsetheight returns exct height with padding and margin
        // toggleActions:"play pause reverse pause ",//best and important** for more properties go read notebook
                      //onEnter  onLeave   onEnterBack   onLeaveBack
     
     markers:true,
     scrub:2,//from "true" , larger the value slower and smoother the animation
     pin:true,
pinSpacing:true
    
    },
    // x:900,
    backgroundColor:"blue",
    duration:3
    
}
)

let t1=gsap.timeline() //timeline used to work with all animations in one variable

t1.to(".box2",{
    x:200,
    backgroundColor:"yellow"
})
   .to(".box2",{
    y:200,
    backgroundColor:"red"
})
   .to(".box2",{
    x:0,
    backgroundColor:"blue"
})

  .to(".box2",{
    y:0,
    backgroundColor:"grey"
})
   