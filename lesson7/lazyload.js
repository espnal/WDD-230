let imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
});

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
                console.log(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
        console.log
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}





// const images = document.querySelectorAll("img[data-src]");

// const imgOptions = {};
// const imgObserver = new IntersectionObserver((entries, observer) => {
//     console.log(entries);
//     const entry = entries[0];
//     if (!entry.isIntersecting) return;
//     entry.target.src = entry.target.dataset.src
// });

// imgObserver.observer(images[0])