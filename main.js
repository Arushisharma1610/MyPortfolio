


// Icon Toggel Navbar

let newIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

newIconIcon.onclick = () =>{
    newIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}
// console.log('clicked');

// scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + is + ']').classList.add('active');
            });
        };
    });

    // sticky navbar

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon nd navbar
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// typed js
// const typed = new Typed('#multiple-text', {
//     strings: ['Frontend Developer', 'Web Designer', 'A C++ Coder', 'Open Source Contributer'],
//     typeSpeed: 70,
//     backSpeed: 70,
//     backDelay: 1000,
//     loop: true,
// });

// var options = {
//     strings: ['Frontend Developer', 'Web Designer', 'A C++ Coder', 'Open Source Contributer'],
//     typeSpeed: 70,
//     backSpeed: 70,
//     backDelay: 1000,
//     loop: true,
//   };
  
//   var typed = new Typed('.element', options);


var typed = new Typed(".typing", {
    strings: ["", "A C++ Coder", "Web Developer", "Open Source Enthusiast", "into Machine Learning"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

