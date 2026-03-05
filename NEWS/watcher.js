// 1. Select all elements you want to animate
const observerElements = document.querySelectorAll('.article');

// 2. Define the callback function
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the class when it enters the screen
      entry.target.classList.add('active');
      console.log(entry)
      
      // Optional: Stop observing after it appears once
      observer.unobserve(entry.target);
    }
  });
};

// 3. Set options (threshold of 0.1 means 10% of the element is visible)
const observerOptions = {
  threshold: 0.1
};

// 4. Initialize and start observing
const observer = new IntersectionObserver(observerCallback, observerOptions);

observerElements.forEach(el => observer.observe(el));