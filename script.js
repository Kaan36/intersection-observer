
const elements = document.querySelectorAll('.element');

const isTrigger = (element, className) => {
    return element.classList.contains(className);
}

const startAnimation = (element, status) => {
    if (status) {
        element.classList.add('animation');
    } else {
        element.classList.remove('animation');
    }
}

const generateThresholds = () => {
    const threshold = [];
    for (let i = 1; i < 101; i++) {
        threshold.push((i - 1) / 100);
    }
    return threshold;
}

const startMove = (element, ratio) => {
    element.style.opacity = ratio;
    element.style.transform = `rotate(${(180 * ratio)/2}deg)`;
    console.log(element.style.transform)
};

const myObserver = new IntersectionObserver(elements => {
    elements.forEach(element => {
        if (isTrigger(element.target, 'first')) {
            startMove(element.target, element.intersectionRatio);
        }
        if (isTrigger(element.target, 'second')) {
            startAnimation(element.target, element.isIntersecting);
        }
    })
}, {
    root: window.document,
    rootMargin: '0px',
    threshold: generateThresholds()
});


elements.forEach(elm => {
    myObserver.observe(elm);
});