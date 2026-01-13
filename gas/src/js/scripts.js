var animationRun = false;
function scrollAnimations(){
    const $sections = document.querySelectorAll('.section-container');

    $sections.forEach((item)=>{
        let animationRun = false;
        document.addEventListener('scroll', ()=>{
            if (isInViewport(item)){
                if (item.classList.contains('about__left-side') && animationRun == false){
                   aboutAnimationsLeft();
                }if (item.classList.contains('about__right-side') && animationRun == false){
                    aboutAnimationsRight();
                }else if(item.classList.contains('services') && animationRun == false){
                   servicesAnimation();
                }else if (item.classList.contains('zone') && animationRun == false){
                   zoneAnimation();
                }else if (item.classList.contains('emergency-banner') && animationRun == false){                  
                   bannerEmergency();
                }else if (item.classList.contains('info') && animationRun == false){                  
                    infoAnimation();
                }else if (item.classList.contains('testimonials') && animationRun == false){                  
                   
                }else if (item.classList.contains('banner') && animationRun == false){                  
                    bannerAnimation();
                }else if (item.classList.contains('social-network') && animationRun == false){                  
                   socialNetworkAnimation();
                }else if (item.classList.contains('footer') && animationRun == false){                  
                   footerAnimation();
                }
                animationRun = true; 
            }
        })

    }
    ) 
};

function isInViewport(elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top * 1.4 < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
    );
}

function aboutAnimationsLeft(){
    let i = 3;
    const $about = d.querySelector('.about'),
          $aboutImg = $about.querySelector('.about__img'),
          $aboutTitle = $about.querySelector('.section__title'),
          $aboutParagraph = $about.querySelectorAll('.paragraph'),
          $aboutButton = $about.querySelector('.button');
          $aboutImg.classList.add('showVertical');
          $aboutTitle.classList.add('showHorizontal');
          $aboutButton.classList.add('showVertical');
          $aboutButton.style.animationDelay = "0.7s";
          $aboutParagraph.forEach((paragraph)=>{
              paragraph.classList.add('showHorizontal');
              paragraph.style.animationDelay = `0.${i}s`;
              i = i + 2;
            })   
}

function aboutAnimationsRight(){
    let i = 3;
    const $about = d.querySelector('.about')
          $aboutItem = $about.querySelectorAll('.about__list-item');
            $aboutItem.forEach((item)=>{
                item.classList.add('showHorizontal');
                item.style.animationDelay = `0.${i}s`;
                i = i + 2;
              })   
              
}

function servicesAnimation(){
    let i = 2;
    const $services = d.querySelector('.services'),
          $servicesTitle = $services.querySelector('.section__title'),
          $servicesParagraph = $services.querySelector('.section__paragraph'),
          $servicesItems = $services.querySelectorAll('.services__item');

          $servicesTitle.classList.add('showHorizontal');
          $servicesParagraph.classList.add('showHorizontal');
          $servicesParagraph.style.animationDelay = "0.1s";

          $servicesItems.forEach((item)=>{
            item.classList.add('showVertical');
            item.style.animationDelay = `0.${i}s`;
            i++;
          })

}

function zoneAnimation(){
    const $zone = d.querySelector('.zone'),
          $zoneTitle = $zone.querySelector('.zone__title'),
          $zoneParagraph = $zone.querySelector('.zone__paragraph'),
          $zoneSquare = $zone.querySelector('.square'),
          $zoneTexts = $zone.querySelector('.zone-texts');

          $zoneTitle.classList.add('showHorizontal');
          $zoneParagraph.classList.add('showHorizontal');
          $zoneSquare.classList.add('showHorizontal');
          $zoneTexts.classList.add('showVertical');

}

function bannerEmergency(){
    const $bannerEmergency = d.querySelector('.emergency-banner'),
          $bannerText = $bannerEmergency.querySelector('.emergency-banner__text'),
          $bannerButton = $bannerEmergency.querySelector('.emergency-button');
        
          $bannerText.classList.add('showVertical');
          $bannerButton.classList.add('showVertical');
}

function infoAnimation(){
    const $info = d.querySelector('.info'),
          $infoTitle = $info.querySelector('.info__title'),
          $infoParagraph = $info.querySelector('.info__paragraph'),
          $infoImg = $info.querySelector('.info__main-img'),
          $infoItems = $info.querySelectorAll('.info__item');
    let i = 1;
          $infoTitle.classList.add('showHorizontal');
          $infoParagraph.classList.add('showHorizontal');
          $infoImg.style.opacity = 0.3;


          $infoItems.forEach((item)=>{
            item.classList.add('showVertical');
            item.style.animationDelay = `0.${i}s`;
            i = i + 2;
          })
}


function slideGallery(element){
    const $slides_container = d.querySelector(element),
          $slides = $slides_container.querySelectorAll('.slide'),
          $slides_position = $slides_container.parentNode.querySelectorAll('.slide__position-circle');
    let i = 1;
    setInterval(()=>{
        cleanSlides();
        $slides_container.style.transform = `translateX(-${25 * i}%)`;
        $slides_position[i].classList.add('slide__position-active');
        $slides[i].classList.add('slide__active');
        i++;
        if (i > 3){
            i = 0;
        }
    }, 8000)

    function cleanSlides(){
        $slides.forEach((slide)=>{
            slide.classList.remove('slide__active');
        })
        $slides_position.forEach((slide)=>{
            slide.classList.remove('slide__position-active');
        })
    }
}
