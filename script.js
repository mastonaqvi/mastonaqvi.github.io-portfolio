var typed = new Typed(".multiple-text", {
    strings: ["Fullstack Developer", "Blogger", "Student"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true,
});


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const isInView = (elem) => {
        const bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    if (!isInView(section)) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
/*toggle icon navbar*/

let menuIcon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*scroll section avtive link*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
       let top = window.scrollY;
       let offset = sec.offsetTop - 100;
       let height =   sec.offsetHeight;
       let id = sec.getAttribute('id');

       if(top>= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id +']').classList.add('active');

        });
       };

    });

    /* sticky navbar*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY >  100);

    /*remove taggle icon and navbar*/
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
        
}; 

/*scroll reveal*/
ScrollReveal({ 
    /*reset: true,*/ 
    distance: '80px',
    duration: 2000,
    delay: 200
}); 
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-content, .services-container, .portfolio-box, .contact form',  { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content h1, .about-content ', { origin: 'right' });