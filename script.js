const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    }) 
}) 


var elements = document.querySelectorAll('.hidden-right, .hidden-left, .hidden-top')


elements.forEach((element) => myObserver.observe(element)); 