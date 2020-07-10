const tl = new TimelineMax();

tl.from('#Bowl', 1, {
  x: '-200',
  opacity: 0,
  ease: Power1.easeOut
})

tl.from('#Sushi_1', 1, {
  y: '-250',
  opacity: 0,
  rotation: 20,
  tranformOrigin: '50% 50%',
  ease: Bounce.easeOut
}, '-=.4')

tl.from('#Sushi_2', 1, {
  y: '-250',
  opacity: 0,
  rotation: -70,
  tranformOrigin: '50% 50%',
  ease: Bounce.easeOut
}, '-=.7')

tl.from('#Chopstick_1', .4, {
  y: '-250',
  opacity: 0,
  rotation: 20,
  tranformOrigin: '50% 50%',
  ease: Power1.easeOut
}, '-=.7')

tl.from('#Chopstick_2', .4, {
  y: '-350',
  opacity: 0,
  rotation: -60,
  tranformOrigin: '50% 50%',
  ease: Power1.easeOut
}, '-=.6')

tl.from('#bg1', 1, {
  x: '1200',
  opacity: 0,
  ease: Power1.easeOut
}, '-=.6')

tl.from('#bg2', 1, {
  x: '200',
  opacity: 0,
  ease: Power1.easeOut
}, '-=.6')

tl.from('h1', 2, {
  y: '-50',
  opacity: 0,
  ease: Power4.easeOut
}, '-=1')
