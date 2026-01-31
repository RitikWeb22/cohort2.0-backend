let mouseFollow = document.querySelector(".mouse-follower");

let x = 0, y = 0;
addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    x = clientX;
    y = clientY;

});

function far() {
    mouseFollow.style.transform = `translate(${x}px ,${y}px)`;
    mouseFollow.style.transition = "all 0.5s linear";
    requestAnimationFrame(far);
};
far();