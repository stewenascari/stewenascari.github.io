/*===== MENU SHOW =====*/
console.log(navigator.language)
// if (navigator.language == "en"){
//     document.getElementById('text-bilingual').innerHTML = "pt"
//     console.log("ea")
    // document.addEventListener("DOMContentLoaded", function () {
    //     console.log(document.documentElement.attributes.forEach(function(saas =>))
    //         )
    //     // document.getElementById('data-pt-br').style.display.setProperty(block);
        
    //     // document.getElementById('data-en').style.display.setAttribute(none);
    //     // your code here
    //   });
// }
// if(navigator.language == "pt-BR") {
//     console.log(document.getElementById('data-pt-br').style)
//     document.getElementById('text-bilingual').innerHTML = "en"
//     document.addEventListener("DOMContentLoaded", function () {
//         console.log("ta aqui")
//         document.getElementById('data-pt-br').style.display.setProperty(block);
        
//         document.getElementById('data-en').style.display.setAttribute(none);
//         // your code here
//       });
// }

console.log(navigator.language == 'pt-BR')
if(navigator.language.toString == "en"){
    document.documentElement.lang = "en"

}else if (navigator.language == "pt-BR"){
    document.documentElement.lang = "pt-BR";

}else{
    document.documentElement.lang = "en"
}

// function changeLanguage(lang){
//     if (lang == "en"){
//         document.getElementById('text-bilingual').innerHTML = "pt"
        
//         document.getElementById('data-en').style.display = block
        
//         document.getElementById('data-pt-br').style.display = none
//     }
// 	else if(lang == "pt-BR") {
//         document.getElementById('text-bilingual').innerHTML = "en"
        
//         document.getElementById('data-pt-br').style.display = block
        
//         document.getElementById('data-en').style.display = none
//     }
// }

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

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

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
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});

var el = document.getElementById('button-bilingual');
el.addEventListener('click', function(e) {
    var lang = document.documentElement.lang;
	if (lang == "en"){
        document.documentElement.lang = "pt-BR";
        document.getElementById('text-bilingual').innerHTML = "pt"
    }
	else if(lang == "pt-BR") {
        document.documentElement.lang = "en";
        document.getElementById('text-bilingual').innerHTML = "en"
    }
});

// $("#tt").click(function () {
// 	var lang = $("html").attr("lang");
// 	if (lang == "en") $("html").attr("lang", "fr");
// 	if (lang == "fr") $("html").attr("lang", "en");
// });
// $("#tt").click(function () {
    
//     console.log("ta aqui")
// 	var lang = $("html").attr("lang");
// 	if (lang == "en") $("html").attr("lang", "fr");
// 	if (lang == "fr") $("html").attr("lang", "en");
// });
