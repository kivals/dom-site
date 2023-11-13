const scrollRoot = document.querySelector(".about__photo");
const scrollImage = document.querySelector('[data-scroll-image]');
const scrollBlocks =  document.querySelectorAll('[data-scroll-block]');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target)
    }
  })
}, options)

scrollBlocks.forEach(block => observer.observe(block));

console.log(scrollRoot);
