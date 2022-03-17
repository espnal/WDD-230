let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -150px 0px"
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
// Day count & Visit count

const daycount = document.getElementById("number-visits");


const thisVisit = new Date();
const lastVisit = window.localStorage.getItem("visitUpdate");

if (lastVisit !== null) {
    let timeDifference = thisVisit.getTime();
    let dayDifference = parseInt(timeDifference / (1000 * 60 * 60 * 24));
    console.log(dayDifference)
    if (dayDifference < 1) {
        daycount.textContent = `Welcome back! Your last visit was today.`;
    } else if (dayDifference == 1) {
        daycount.textContent = `Welcome back! Your last visit was ${dayDifference} day ago.`;
    } else {
        daycount.textContent = `Welcome back! Your last visit was ${dayDifference} days ago.`;
    }
} else {
    daycount.textContent = `Welcome to your first visit! in days`;
}