const section = document.querySelector("h1");

const objOptions = {
    root:null,
    threshold:0.3
};

const sectionObserver = new IntersectionObserver(callBackFunction,objOptions);

function callBackFunction(entries) {
    const [entry] = entries;
    console.log(entry);
    if (entry.isIntersecting) {
        sectionObserver.unobserve(h1);
    }
}