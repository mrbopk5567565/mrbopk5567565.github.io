// var text = $('.main-header-text')
var text = document.querySelector('.main-header-text')
var tl = gsap.timeline(), 
    mySplitText = new SplitText(text, {type:"words,chars"}), 
    chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set(text , {perspective: 400});

// tl.from(chars, {duration: 0.5, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.01}, "+=0");
// tl.from(
//   chars, 
//     {
//       duration: 0.5, 
//       opacity:0, 
//       scale: 3,
//       x:random(-500,500), 
//       y:random(-500,500), 
//       z:random(-500,500), 
//       // transformOrigin:"0% 50% -50",  
//       // ease:"back", 
//       stagger: 0.01
//     }, 
//     "+=0"
//     );

$(mySplitText.chars).each(function(i) {
  TweenMax.from($(this), 2.5, {
    opacity:0, 
    scale: 3,
    x:random(-500,500), 
    y:random(-500,500), 
    z:random(-500,500), 
  })
});

function random(min, max){
  return (Math.random() * (max - min) + min);
}
