// Get Width and Height of screen
let sw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
let sh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

document.body.style = `width: ${sw}px; height: ${sh}px;`;

// Mark movement
const markDiv = document.querySelector('.mark--div'),
      mark = markDiv.querySelector('#mark');
document.addEventListener('mousemove', e => {
    move(e, mark);
});

function move(e, elem){
    let xPos = (e.clientX / sw) - .5;
    let yPos = (e.clientY / sh) - .5;

    // Mark
    TweenLite.to(elem, 0.6, {
        rotationY: 15 * xPos,
        rotationX: 15 * yPos,
        ease: Power1.easeOut,
        transformPerspective: 900,
        transformOrigin: 'center'
    });
}

// Action Button
const actionButton = document.querySelector('.action-button'),
      background = document.querySelector('.action-hover'),
      firstWord = actionButton.querySelectorAll('span'),
      secondWord = actionButton.querySelectorAll('i');

const tl = new TimelineMax({paused: true});

tl.staggerTo(firstWord, 1, 
    {
        color: "rgba(250, 250, 250, .8)", 
        rotationX: 360, 
        ease: Expo.easeOut
    }, 
    0.03, "#start");

tl.staggerTo(secondWord, 1, 
    {
        color: "rgba(250, 250, 250, .8)", 
        rotationX: 360, 
        ease: Expo.easeOut
    }, 
    0.03, "#start");

tl.to(actionButton, 0.3, 
    {
        "border-color": "rgba(250, 250, 250, .8)", 
        ease: Quad.easeOut
    }, "#start");

tl.from(background, 0.25, 
    {
        scaleX: "0%", 
        transformOrigin: "left center", 
        ease: Quad.easeInOut
    }, 
    "#start");

actionButton.addEventListener("mouseenter", () => {
  tl.play();
});

actionButton.addEventListener("mouseleave", () => {
  tl.reverse();
});

let open = false;
actionButton.addEventListener('click', () => {
    open = !open;
    if (open) {
      TweenLite.to('.mark--div', 2, { opacity: 1, top: '-1000px', ease:Power1.easeIn} );
    }
})

// Project Display
const display = (itemButton, image) => {
    const t2 = new TimelineMax({
                    paused:true,
                    repeat:-1,
                    yoyo:true,
                });

    // set initial CSS autoAlpha to 0
    // GSAP handles the cross browser vendor prefixes
    t2
    .set(image,{backgroundSize:"100% 100%"})
    .to(image, 5, {
        backgroundSize: "+=150% +=150%", 
        autoRound:false, 
        ease: Power1.ease0ut
    })
    .progress(1).progress(0)
    .play(); 
}

const itemButtons = document.querySelectorAll('.item-button');
itemButtons.forEach(itemButton => {
    const image = itemButton.querySelector('.image');
    display(itemButton, image);
    itemButton.addEventListener('mouseover', (e) => {
        move(e, image);
    })
})