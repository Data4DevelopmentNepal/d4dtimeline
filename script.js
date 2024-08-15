// This script controls the automatic scrolling behavior.
const timeline = document.querySelector('.timeline');
const timelineHeight = timeline.scrollHeight - timeline.clientHeight;

let scrollPosition = 0;
const scrollSpeed = 0.1; // Adjust the scroll speed here

function scrollTimeline() {
    scrollPosition += scrollSpeed;
    if (scrollPosition >= timelineHeight) {
        scrollPosition = 0; // Reset scroll position to loop
    }
    timeline.scrollTop = scrollPosition;
    requestAnimationFrame(scrollTimeline);
}

scrollTimeline();
