var animation = document.querySelectorAll(".dash");
    let skills_container = document.querySelector('.skill__svg-container');
    let animationOn = false;

    

  /*  window.addEventListener('DOMContentLoaded',()=>{
        animationSkills();

    })*/
/* window.addEventListener('scroll', (e)=>{

    if (isInViewport(skills_container)) {
        if (animationOn == false){
            animationSkills();
           animationOn = true;
        }
    }

    if (animationOn == false){
        animationSkills();
       animationOn = true;
    }
    
})*/
/*
function isInViewport(elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
    );
}*/
/*function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (animationOn == false){
            animationSkills();
           animationOn = true;
        }
      }
    });
  }*/

  // Configuración del Intersection Observer
  /*const options = {
    root: null, // Usa el viewport como la raíz
    rootMargin: '0px',
    threshold: 0.5, // El 50% del elemento debe estar en el viewport
  };*/

  // Crear el Intersection Observer y pasar la función de callback y las opciones
  //const observer = new IntersectionObserver(handleIntersection, options);

  // Seleccionar el elemento que se quiere observar
  //const elementoObservado = document.querySelector('.skill__svg-container');

  // Iniciar la observación del elemento
 // observer.observe(elementoObservado);


     // Función para verificar si el elemento está en el viewport
   /*  function isElementInViewport(el) {
        const offset = el.offsetTop;
        const scrollY = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
  
        return scrollY < offset + windowHeight;
      }
  
      // Función que se ejecuta al hacer scroll
      function handleScroll() {
        const elementoObservado = document.querySelector('.skill__svg-container');
  
        if (isElementInViewport(elementoObservado)) {
            animationSkills();
          // Puedes realizar acciones adicionales aquí
          // Por ejemplo, remover el evento de scroll si no necesitas seguir verificando
          window.removeEventListener('scroll', handleScroll);
        }
      }
  
      // Agregar el evento de scroll
      window.addEventListener('scroll', handleScroll);
  
      // Llamar a handleScroll() al cargar la página para verificar si el elemento ya está en el viewport
      handleScroll();
*/

function animationSkills(){

    let centerHexagon = document.querySelector('.centerHexagon polygon');
    let borderHexagon = document.querySelector('.centerHexagon path');
    let textHexagon = document.querySelector('.centerHexagon text');


    textHexagon.animate({opacity: 1}, {duration: 500, fill:'forwards', delay: 1050});
    centerHexagon.animate({transform:'rotate(540deg) scale(1) translateX(-0.5em)'},{duration: 900, fill:'forwards'});
    borderHexagon.animate({transform:"scale(1) rotate(360deg)", opacity: 1}, {duration: 500, fill:'forwards', delay: 550});

    const $svg_skills = document.getElementById('svg_skills');


    var container = { skills: $svg_skills.querySelectorAll('.hex'),
                      lines : $svg_skills.querySelectorAll('.linepoint path'),
                      polylines: $svg_skills.querySelectorAll('.linepoint polyline'),
                      points: $svg_skills.querySelectorAll('.linepoint circle'),
                      hexagons: $svg_skills.querySelectorAll('.hexagon'),
                      bghexagons: $svg_skills.querySelectorAll('.bghexagon')
    };
    
    container.skills.forEach(()=>{
    
     
    })

    container.lines.forEach((line)=>{
        line.animate({strokeDashoffset: 0},{ duration: 700, fill: 'forwards', delay: 1100 });
    })


    container.polylines.forEach((line)=>{
        line.animate({strokeDashoffset: 0},{ duration: 700, fill: 'forwards', delay: 1100 });
    })

    container.points.forEach((point)=>{
        point.animate({opacity: 1}, {duration: 500, fill:'forwards', delay: 1000});
    })

    container.hexagons.forEach((hexagon)=>{
        hexagon.animate({transform: 'translateX(0)', opacity: 1 },{ duration: 500, fill: 'forwards', delay: 1600 });
    })

    container.bghexagons.forEach((bghexagon)=>{
        bghexagon.animate({transform: 'translate(0) scale(1)', opacity: 1},{ duration: 250, fill: 'forwards', delay: 1900 });
    })


}


const   $cards_container = document.getElementById('grid__cards'),
        $card_template = document.getElementById('card').content,
        $fragment = document.createDocumentFragment(),
        cardContent = [
            {title: "Localiza tu fuga",
            text: "Website designed and developed for the chilean company Localiza tu fuga",
            image: "localizatufuga.jpg",
            link1:"https://localizatufuga.com/",
            link2:""
            }, 
            {title: "Two Evento",
             text: "Website designed and developed for the mexican company TwoEvento",
             image: "twoevento.jpg",
             link1:"https://twoevento.mx/",
             link2:""
             },
             {title: "Jack Pereyra",
             text: "Website designed and developed for the peruvian artist Jack Pereyra",
             image: "jack.jpg",
             link1:"/Jack/",
             link2:""
             },
             {title: "SYI Website",
             text: "Website developed for the international company Seijiro Yazawa Iwai | Aviation",
             image: "syi.jpg",
             link1:"https://jonathanpirela.site/syi",
             link2:""
             },
             {title: "Raptor GPS",
             text: "Website developed and designed for the Venezuelan company Raptor GPS",
             image: "raptor1.jpg",
             link1:"https://jonathanpirela.site/raptor",
             link2:""
             },
             {title: "MU Tutorials",
             text: "Website developed and designed for Mu Tutorials",
             image: "mu.jpg",
             link1:"https://jonathanpirela.site/mu",
             link2:""
             }
        ]

        let $clone = '';

        cardContent.forEach((element, index)=>{
            $card_template.querySelector('h2').textContent = element.title;
            $card_template.querySelector('p').textContent = element.text;
            $card_template.querySelector('.card__image img').setAttribute("src", 'assets/' + element.image);
            $card_template.querySelector('.card__image img').setAttribute("alt", element.title);
            $card_template.querySelector('.web a').setAttribute("href", element.link1);


            $clone = $card_template.cloneNode(true);

            if (index % 2 !== 0){
                $clone.querySelector('.card__text-container').classList.add('card__text--right-card');
                $clone.querySelector('.card__icons').classList.add('card__icons--right-card');
            }
            if (element.link2 !== ""){
             let github_link =  $clone.querySelector('.github__ico'); 
             github_link.style.display = "flex";
             github_link.querySelector('a').setAttribute("href", element.link2);
            
            }
            $fragment.appendChild($clone);
        })

        $cards_container.appendChild($fragment);
    



const $menu__container = document.querySelector('.menu'),
      $hamburguer__btn = document.getElementById('hamburguer-btn'),
      $navbar__items = document.querySelector('.navbar__items'),
      $navbar__items__layout = document.querySelector('.navbar__items__layout'),
      $hamburguer__lines = document.querySelectorAll('.hamburguer-btn span');


      $hamburguer__btn.addEventListener('click',()=>{
        nav_menu_controls();
        })

       
$navbar__items.addEventListener('click', ()=>{
    if (window.innerWidth < 600){
        setTimeout(() => {
            nav_menu_controls(); 
        }, 300);
    }
      
})

function nav_menu_controls(){
    $menu__container.classList.toggle('menu__mobile--open');
    $hamburguer__btn.classList.toggle('hamburguer--rotate');
    $navbar__items.classList.toggle('navbar__items--open');
    $navbar__items__layout.classList.toggle('navbar__items__layout--animation');
    $hamburguer__lines.forEach((line,index)=>{
        line.classList.toggle(`hamburguer-btn__line${index}`);
    })
    document.querySelector('body').classList.toggle('hide__scroll');
}


var xhr = new XMLHttpRequest();

var datos = document.getElementById('form-contact');

datos.addEventListener('submit', (ev) => {
    var form = new FormData(datos);
    let formulario = document.querySelectorAll('.contact_field');
    let contador = 4;
    formulario.forEach((element) =>{
        if (element.value === null || element.value === ''){
            contador--;
        } 
    })

    if (contador === 4){
        
    xhr.open('POST', 'enviar.php');
    xhr.onload = () =>{
        if (xhr.status === 200){
            shownotificationMessage('message-sent');
            datos.reset();
        }else{
            shownotificationMessage('message-error');
        }
    }
    xhr.send(form);
    }else{
        shownotificationMessage('message-empty');
    }
    ev.preventDefault();
});



function shownotificationMessage(type){
    var message__sent = document.getElementById(type);
    message__sent.classList.add('display-notification');

    setTimeout(function(){
        message__sent.classList.remove('display-notification');
    },5000)
}






let $navitem = document.querySelectorAll('.navbar__item');

$navitem.forEach((item)=>{

    item.addEventListener('mouseover',()=>{
        unfocus();
        item.classList.add('focus');
    })
   
    item.addEventListener('mouseout', ()=>{
        focus();
        item.classList.remove('focus');
    })
})

function focus(){
    $navitem.forEach((item)=>{
        item.classList.remove('unfocus');
    })
}

function unfocus(){
    $navitem.forEach((item)=>{
        item.classList.add('unfocus');
    })

}



