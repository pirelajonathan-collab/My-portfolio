const d = document;
var menuOpen = false;
window.addEventListener('DOMContentLoaded', ()=>{
    menuSticky();
    scrollAnimations();
    slideGallery('.testimonial');
})

d.addEventListener('click', (event)=>{

     if(event.target.matches('.menu-hamburguer')){
        menuMobile();
    } 
})

window.addEventListener('resize', ()=>{
    if (window.innerWidth > 768 && menuOpen === true){
        d.querySelector('body').classList.toggle('hideScroll');
    }
})

function menuSticky(){
    const $header = d.querySelector(".header");
    const $menu_nav = d.querySelector('.menu');

    d.addEventListener("scroll", ()=>{
        if (window.innerWidth < 768){
            return;
        }
        
        let headerScroll = $header.getBoundingClientRect();
        if (headerScroll.top < 0){
            $menu_nav.classList.add('menu-fixed');
        }else{
            $menu_nav.classList.remove('menu-fixed');
        }
    })

  }
  

function menuMobile(){
    const $menuNav = d.querySelector('.menu__nav');
          $menuNav.classList.toggle('showMenu');
          d.querySelector('body').classList.toggle('hideScroll');
          menuOpen = !menuOpen;
}

function bannerAnimation(){
    const $banner = d.querySelector('.banner'),
          $bannerText = $banner.querySelector('.banner__text'),
          $bannerButtons = $banner.querySelector('.banner__buttons');

          $bannerText.classList.add('showHorizontal');
          $bannerButtons.classList.add('showHorizontal');
}

function socialNetworkAnimation(){
    const $social = d.querySelector('.social-network'),
          $socialText = $social.querySelector('.social-network__text'),
          $socialButtons = $social.querySelector('.social-network__links');

          $socialText.classList.add('showVertical');
          $socialButtons.classList.add('showVertical');
}

function footerAnimation(){
    const $footer = d.querySelector('.footer_content');

    $footer.classList.add('showHorizontal');
}