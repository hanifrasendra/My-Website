const navLinks = document.querySelectorAll('.nav-link')
const inHeader = document.querySelector('.inner-header')

navLinks.forEach(nav => {
    nav.addEventListener('click', () => {
        //remove all of the 'active' class of the navlink
        navLinks.forEach(link => link.classList.remove('active'))
        
        nav.classList.add('active')
        
    })
})

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if(currentScrollY > 100) {
        inHeader.classList.add('scrolled')
        navLinks.classList.add('scrolled')
    } else {
        inHeader.classList.remove('scrolled')
        navLinks.classList.remove('scrolled')
    }
})

