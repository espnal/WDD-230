let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -250px 0px"
};


function preloadImage(image) {
    const src = image.getAttribute('data-src');
    if (!src) {
        return
    }
    image.src = src;

}


const imgObserver = new IntersectionObserver((entries,
    imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) { return; } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions)

imagesToLoad.forEach(image => {
    imgObserver.observe(image);
})



const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
todayDisplay.textContent = Date.now();