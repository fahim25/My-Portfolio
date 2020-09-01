/*
====================================
|   |   |   | Preloader
====================================
*/
$(window).on('load', function () { 
    $('#status').fadeOut();
    $('#preloader').delay(250).fadeOut('slow');
});
/*
====================================
|   |   |   | Portfolio
====================================
*/
 $(window).on('load', function () {
     //Initialize Isotope
     $('#isotope-container').isotope({});
     //filters item on button click
     $('#isotope-filters').on('click', 'button', function () {
         //get filter value
         var filterValue = $(this).attr('data-filter');
         //filter portfolio items
         $('#isotope-container').isotope({
             filter: filterValue
         });
         //Active button
         $('#isotope-filters').find('.active').removeClass('active');
         $(this).addClass('active');
     });
});
/*
-----------------------------
|   | Navbar
-----------------------------
*/
$(function () {
    showHideNav();
    $(window).scroll(function () {
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            $('.nav').css({
                'margin-top':'0',
                'opacity':'1',
            
            });
            
            $('.nav').css({
                'background-color':'rgba(255, 255, 255, .5);'
            });
			
			//For nav header
            $('.dab').css({
                'margin-top':'0',
                'opacity':'1',
            
            });
            
            $('.dab').css({
                'background-color':'rgba(255, 255, 255, .5);'
            });

        } else {
            $('.nav').css({
                'opacity':'0' 
            });
            
            $('.nav').css({
                'background-color':'rgba(255, 255, 255, .5);'
            });
			
			//For nav header
            $('.dab').css({
                'opacity':'0' 
            });
            
            $('.dab').css({
                'background-color':'rgba(255, 255, 255, .5);'
            });
            
        }
    }
});
/*
====================================
|   |   | Menu Show
====================================
*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*
====================================
|   |   | Remove Mobile Menu
====================================
*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
/*
====================================
|   | SCROLL REVEAL ANIMATION
====================================
*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
/*
====================================
|   |SCROLL HOME*
====================================
*/
sr.reveal('.home__data', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home__social', {delay: 250})

/*
====================================
|   |SCROLL Skills
====================================
*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})
/*
====================================
|   |   |   | Animation
====================================
*/
$(function () {
    new WOW().init(); 
});

$(window).on('load', function () {
    $('.home__scroll').addClass('animated fadeInDown');
    $('.home__scroll i').addClass('animated fadeInDown infinite');
});


