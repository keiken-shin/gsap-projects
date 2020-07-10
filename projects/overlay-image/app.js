// Get Elements
const cursor = document.querySelector('.cursor'),
      overlays = document.querySelectorAll('.project-overlay'),
      p1 = document.querySelector('.p-1'),
      p2 = document.querySelector('.p-2'),
      p3 = document.querySelector('.p-3'),
      p4 = document.querySelector('.p-4');

let flag = false;

function moveCircle(e) {
    TweenLite.to(cursor, 0.5, {
        css: {
            left: e.pageX,
            top: e.pageY
        },
        delay: 0.03
    });
}

p1.addEventListener('mouseenter', () => {
    cursor.style = 'background-image: url(./images/image-1.jpg)';
});
p2.addEventListener('mouseenter', () => {
    cursor.style = 'background-image: url(./images/image-2.jpg)';
});
p3.addEventListener('mouseenter', () => {
    cursor.style = 'background-image: url(./images/image-3.jpg)';
});
p4.addEventListener('mouseenter', () => {
    cursor.style = 'background-image: url(./images/image-4.jpg)';
});


overlays.forEach(overlay => {
    overlay.addEventListener('mousemove', (e) => {
        flag = true;
        TweenLite.to(cursor, 0.3, { scale: 1, autoAlpha: 1 });
        moveCircle(e);
    });
    
    overlay.addEventListener('mouseout', () => {
        flag = false;
        TweenLite.to(cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
    });
})
