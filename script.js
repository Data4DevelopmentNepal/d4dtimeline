const timeline = document.querySelector('.timeline');
let scrollPosition = 0;
const scrollSpeed = 1; // Adjust the scroll speed here
let isScrolling = false;
let autoScrollInterval;
let lastScrollTop = 0;
let userInteractionTimeout;

// Function to automatically scroll the timeline
function scrollTimeline() {
    if (!isScrolling) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= timeline.scrollHeight - timeline.clientHeight) {
            scrollPosition = 0; // Reset scroll position to loop
        }
        timeline.scrollTop = scrollPosition;
    }
}

// Start auto scrolling
function startAutoScroll() {
    autoScrollInterval = setInterval(scrollTimeline, 30); // Adjust the interval for smoother scrolling
}

// Stop auto scrolling
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Function to handle user interaction and pause auto-scrolling
function handleUserInteraction() {
    stopAutoScroll();
    isScrolling = true;
    clearTimeout(userInteractionTimeout);

    // Resume auto-scrolling after 5 seconds of inactivity
    userInteractionTimeout = setTimeout(() => {
        isScrolling = false;
        scrollPosition = timeline.scrollTop; // Sync the auto-scroll position
        startAutoScroll();
    }, 1000); // Adjust the timeout duration as needed
}

// Detect mouse wheel activity
timeline.addEventListener('wheel', () => {
    handleUserInteraction();
});

// Detect mouse entering the timeline area
timeline.addEventListener('mouseenter', () => {
    handleUserInteraction();
});

// Detect mouse leaving the timeline area
timeline.addEventListener('mouseleave', () => {
    if (!isScrolling) {
        scrollPosition = timeline.scrollTop; // Sync the auto-scroll position
        startAutoScroll(); // Resume auto-scrolling when the mouse leaves the timeline area
    }
});

// Initial start of auto scrolling
startAutoScroll();
