/*Menu Hamburguesa*/
let menu = document.getElementById('menu');
let open = false;
menu.addEventListener('click', () =>{
    let logo = document.querySelector('.logo');
    let navbar = document.querySelector('.navbar');
    let navbaritem = document.querySelector('.contenedor_items');
    if (open == false){
        logo.classList.add('logo_res');
        navbar.classList.add('navbar_res');
        navbaritem.classList.add('mostrar');
        open = true;
        navbaritem.addEventListener('click', () => {
            logo.classList.remove('logo_res');
            navbar.classList.remove('navbar_res');
            navbaritem.classList.remove('mostrar');
            open = false;
        })
            }else if (open == true){
        logo.classList.remove('logo_res');
        navbar.classList.remove('navbar_res');
        navbaritem.classList.remove('mostrar');
        open = false;
    }
})
/*Sticky menu*/
window.addEventListener('scroll', () => {
    let menu = document.getElementById('menu');
    if (window.pageYOffset > menu.offsetHeight){
        menu.style.position = "fixed";
        menu.style.top = "0";
        menu.style.marginRight = "0";
    } else {
        menu.style.position = "absolute";
        menu.style.marginRight = "0";
        menu.style.top = "inherit";
    }
})
/*SLIDER*/
//Variables globales
var galerias = [
    grafito = ['graf1.jpg','graf2.jpg','graf3.jpg','graf4.jpg',
    'graf5.jpg','graf6.jpg','graf7.jpg','graf8.jpg', 'graf9.jpg','graf10.jpg','graf11.jpg'],
    realistaColor = ['realiscolor1.jpg','realiscolor2.jpg','realiscolor3.jpg'],
    grabado = ['grab1.jpg', 'grab2.jpg', 'grab3.jpg', 'grab4.jpg'],
    acuarela = ['acua1.jpg', 'acua2.jpg','acua3.jpg', 'acua4.jpg',
    'acua5.jpg', 'acua6.jpg','acua7.jpg', 'acua8.jpg','acua9.jpg','acua10.jpg','acua11.jpg','acua12.jpg'],
    delineadoRealista = ['delineadorealista1.jpg','delineadorealista2.jpg'],
    pasteles = ['pastel1.jpg', 'pastel2.jpg', 'pastel3.jpg', 'pastel4.jpg'],
    carboncillo = ['carbon1.jpg', 'carbon2.jpg','carbon3.jpg',
     'carbon4.jpg','carbon5.jpg', 'carbon6.jpg'],
     caricaturaDigital = ['caricaturadigital1.jpg', 'caricaturadigital2.jpg', 'caricaturadigital3.jpg'],
     sencillo = ['sencillo1.jpg', 'sencillo2.jpg', 'sencillo3.jpg', 'sencillo4.jpg'],
     altorrelieve = ['altorrelieve1.jpg', 'altorrelieve2.jpg'],
    digital = ['digital1.jpg', 'digital2.jpg', 'digital3.jpg', 'digital4.jpg', 'digital5.jpg', 'digital6.jpg',
     'digital7.jpg', 'digital8.jpg', 'digital9.jpg', 'digital10.jpg', 'digital11.jpg', 'digital12.jpg', 'digital13.jpg'],
     lapiz = ['lapiz1.jpg'],
     ilustracion = ['ilustra1.jpg', 'ilustra2.jpg'],
     fanart = ['fanart1.jpg', 'fanart2.jpg'],
     caricatura = ['caricatura1.jpg'],
    videos = ['video1', 'video2']
  ];


var contador = 0;

//FUNCIONES
function abrirGaleria(){
    let secGalerias = document.querySelectorAll('.boton_mas');
    secGalerias.forEach( (elemento) => {
        elemento.addEventListener('click', ()=>{
            let slider = document.getElementById('slider');
            slider.style.display = "flex";
            cargarGaleria(elemento);
        })
    })
}


function limpiarGaleria(){ /*Elimina nodos img*/
    let contenedorGaleria = document.getElementById('contenedor_galeria');
    contador = 0;
    contenedorGaleria.innerHTML = ``;
}
function cerrarGaleria(){
    let btnSlider = document.getElementById('cerrarSlider');

    btnSlider.addEventListener('click', () => {
            limpiarGaleria();
            let slider = document.getElementById('slider');
            let flechas = document.querySelector('.flechas');
            slider.style.display = "none";
            slider.style.textContent = "";
            flechas.innerHTML = ``;
    })
};
function cargarImagenes(numero){
    let contenedorGaleria = document.getElementById('contenedor_galeria');
    let subContenedorGaleria = document.createElement("div");

    galerias[numero].forEach((item) => {
        let newImg = document.createElement("img");
        let newContainer = document.createElement("div");
        newImg.setAttribute("src","My-portfolio/Jack/src/assets/" + item );
        newContainer.appendChild(newImg);
        newContainer.classList.add('foto_container');
        subContenedorGaleria.appendChild(newContainer);
        subContenedorGaleria.classList.add('subcontenedorgaleria')
        newImg.classList.add('foto');
        contenedorGaleria.appendChild(subContenedorGaleria);
    })


/*     galerias[numero].forEach((item) => {
        let newImg = document.createElement("img");
        let newContainer = document.createElement("div");
        newImg.setAttribute("src","src/assets/" + item );
        newContainer.appendChild(newImg);
        newContainer.classList.add('foto_container')
        contenedorGaleria.appendChild(newContainer);
        newImg.classList.add('foto');
    }) */
}


function cargarMiniaturas(numero){
    let menuMiniaturas = document.getElementById('menu-miniaturas');
    let subcontenedorMiniaturas = document.createElement("div");
    subcontenedorMiniaturas.classList.add('menu-miniaturas', 'slides_miniatura');
    let i = 0;
    menuMiniaturas.innerHTML = ``;
    galerias[numero].forEach((item) => {
        let newImg = document.createElement("img");
        let newContainer = document.createElement("div");
        newContainer.setAttribute('index', `${i++}`);
        newContainer.classList.add("menu-miniaturas__item" , 'slide_miniatura');
        newImg.setAttribute("src","My-portfolio/Jack/src/assets/" + item );
        newImg.classList.add('menu-miniaturas__img');
        newContainer.appendChild(newImg);
        subcontenedorMiniaturas.appendChild(newContainer);
    })
    menuMiniaturas.appendChild(subcontenedorMiniaturas);
}
function cargarGaleria(elemento){
    if (elemento.getAttribute('id') == 'grafitoBtn'){
        cargarImagenes(0);
        cargarMiniaturas(0);
        } else 
        if (elemento.getAttribute('id') == 'realista_colorBtn'){
            cargarImagenes(1);
            cargarMiniaturas(1);
        }else 
        if (elemento.getAttribute('id') == 'grabadoBtn'){
            cargarImagenes(2);
            cargarMiniaturas(2);
        }else 
      if (elemento.getAttribute('id') == 'acuarelaBtn'){
        cargarImagenes(3);
        cargarMiniaturas(3);
        }else
        if (elemento.getAttribute('id') == 'delineadorealistaBtn'){
            cargarImagenes(4);
            cargarMiniaturas(4);
            }else
            if (elemento.getAttribute('id') == 'pastelesBtn'){
                cargarImagenes(5);
                cargarMiniaturas(5);
            }else
        if (elemento.getAttribute('id') == 'carboncilloBtn'){
            cargarImagenes(6);
            cargarMiniaturas(6);
        }else
        if (elemento.getAttribute('id') == 'caricaturadigitalBtn'){
            cargarImagenes(7);
            cargarMiniaturas(7);
        }else
        if (elemento.getAttribute('id') == 'sencilloBtn'){
            cargarImagenes(8);
            cargarMiniaturas(8);
        }else 
        if (elemento.getAttribute('id') == 'altorrelieveBtn'){
            cargarImagenes(9);
            cargarMiniaturas(9);
        }else
        if (elemento.getAttribute('id') == 'digitalBtn'){
            cargarImagenes(10);
            cargarMiniaturas(10);
        }else 
        if (elemento.getAttribute('id') == 'lapizBtn'){
            cargarImagenes(11);
            cargarMiniaturas(11);
        }else
        if (elemento.getAttribute('id') == 'creativaBtn'){
            cargarImagenes(12);
            cargarMiniaturas(12);
        }else
        if (elemento.getAttribute('id') == 'fanartBtn'){
            cargarImagenes(13);
            cargarMiniaturas(13);
        }else
        if (elemento.getAttribute('id') == 'caricaturaBtn'){
            cargarImagenes(14);
            cargarMiniaturas(14);
        }else
        if (elemento.getAttribute('id') == 'videosBtn'){
            cargarImagenes(5);
            cargarMiniaturas(5);
        }
            miniaturas();
            cerrarGaleria();
        }
        abrirGaleria();
        
        
        /*Animaciones*/
        let textoHeader = document.querySelector('.texto_header');
        let acerca = document.getElementById('acerca');
        let metas = document.getElementById('suenos');
        let separadorTodos = document.querySelectorAll('.separador');
        let contenedorGaleria = document.querySelectorAll('.seccion_dibujos');
        let galeriaVideos = document.getElementById('galeriaVideos');
        let preguntasfrecuentes = document.getElementById('preguntasFrecuentes');
        let contacto = document.getElementById('contacto');
        let contenedorInput = document.querySelectorAll('.contenedor_input');
        let tituloContacto = document.querySelector('.tituloContacto');
    
    window.addEventListener('scroll', () =>{
        if (window.pageYOffset < acerca.offsetTop){ /*Pantalla negra*/
        let pantalla = document.querySelector(".pantalla");
        let control = acerca.offsetHeight/100;
        let alturaActual = window.pageYOffset;
        pantalla.style.backgroundColor = "rgba(0,0,0," + (((control*alturaActual)/4250)+0.3) + ")";
        textoHeader.style.opacity = (((control*100)/(alturaActual))/10)-0.1;
        }

    if (window.pageYOffset+300 > acerca.offsetTop){ /*Acerca*/
    let textoAcerca = document.getElementById('textoAcerca');
    textoAcerca.style.animation = "textoDerecha 2s ease forwards";
    }
    if (window.pageYOffset+300 > metas.offsetTop){ /*Metas*/
    let contenedorMetas = document.querySelector('.contenedor_metas');
    contenedorMetas.style.animation = "textoMetas 1s ease forwards";
    }
    separadorTodos.forEach((elemento) =>{ /*Separadores*/
        if(window.pageYOffset+500 > elemento.offsetTop ){ 
            let contenedorSeparador = elemento.children.item(0);
            let linea = contenedorSeparador.children.item(0);
            let textoSeparador = contenedorSeparador.children.item(1);
            contenedorSeparador.style.animation = "separador 1s ease forwards";
            textoSeparador.style.animation = "textoSeparador 1s ease forwards";
            linea.style.animation = "textoSeparador 1s ease forwards";
        }
    })

        contenedorGaleria.forEach((elemento) => { /*Galeria Imagenes*/
            if (window.pageYOffset+300 > elemento.offsetTop){
              elemento = elemento.children.item(0);

              if (contenedorGaleria.item(0).children.item(0) == elemento){
                  elemento.style.animation = "textoDerecha 2s ease forwards"; 
                }else if (contenedorGaleria.item(1).children.item(0) == elemento){
                    elemento.style.animation = "textoIzquierda 2s ease forwards";    
                }else if (contenedorGaleria.item(2).children.item(0) == elemento){
                    elemento.style.animation = "textoDerecha 2s ease forwards";    
                }else if (contenedorGaleria.item(3).children.item(0) == elemento){
                    elemento.style.animation = "textoIzquierda 2s ease forwards";    
                }else if (contenedorGaleria.item(4).children.item(0) == elemento){
                    elemento.style.animation = "textoDerecha 2s ease forwards";    
                }else if (contenedorGaleria.item(5).children.item(0) == elemento){
                    elemento.style.animation = "textoIzquierda 2s ease forwards";    
                }else if (contenedorGaleria.item(6).children.item(0) == elemento){
                    elemento.style.animation = "textoDerecha 2s ease forwards";    
                }else if (contenedorGaleria.item(7).children.item(0) == elemento){
                    elemento.style.animation = "textoIzquierda 2s ease forwards";    
                }else if (contenedorGaleria.item(8).children.item(0) == elemento){
                    elemento.style.animation = "textoDerecha 2s ease forwards";    
                }else if (contenedorGaleria.item(9).children.item(0) == elemento){
                    elemento.style.animation = "textoIzquierda 2s ease forwards";    
                }else if (contenedorGaleria.item(10).children.item(0) == elemento){
                    elemento.style.animation = "textoDerecha 2s ease forwards";    
                }else if (contenedorGaleria.item(11).children.item(0) == elemento){
                    elemento.style.animation = "textoIzquierda 2s ease forwards";    
                }else if (contenedorGaleria.item(12).children.item(0) == elemento){
                    elemento.style.animation = "textoDerecha 2s ease forwards";    
                }else if (contenedorGaleria.item(13).children.item(0) == elemento){
                    elemento.style.animation = "textoIzquierda 2s ease forwards";    
                }else if (contenedorGaleria.item(14).children.item(0) == elemento){
                    elemento.style.animation = "textoDerecha 2s ease forwards";    
                }
            }
        })
        if (window.pageYOffset+300 > galeriaVideos.offsetTop){
            let contenedorVideo = document.querySelectorAll('.video');
            contenedorVideo.forEach( (elemento) => {
                elemento.style.animation = "aparecerVideos 2s ease forwards"
            })
        }
        if (window.pageYOffset+300 > preguntasfrecuentes.offsetTop){
            let contenedores = document.querySelectorAll('.itemPreguntas')
            contenedores.forEach( (elemento) => {
                elemento.style.animation = "aparecerPreguntas 2s ease forwards"
            })
        } 
        if (window.pageYOffset+300 > contacto.offsetTop){
            tituloContacto.style.animation = "inputAnimacion 2s ease forwards";
            contenedorInput.forEach((elemento) =>{
                elemento.style.animation = "inputAnimacion 2s ease forwards";
                
            })
        }
    })
    /*Setter de animaciones*/
    if (window.pageYOffset >= acerca.offsetHeight){
        let pantalla = document.querySelector(".pantalla");
        pantalla.style.backgroundColor = "rgba(0,0,0,1)";
    }
    
    function miniaturas() {    
        const slides = document.querySelector(".slides_miniatura");
        const allSlides = document.querySelectorAll(".slide_miniatura");
        const slidesLength = allSlides.length;
        const slideWidth = allSlides[0].offsetWidth;
        const $galeria = document.querySelector('.subcontenedorgaleria');
        $galeria.offsetLeft = 0;
        $galeria.style.left = 0;
        $galeria.addEventListener('mousedown', dragInicio);
        $galeria.addEventListener("touchstart", dragInicio);
        $galeria.addEventListener("touchmove", dragMover);
        $galeria.addEventListener("touchend", dragFinal);
        $galeria.addEventListener("transitionend", checkIndex);
        let initialPositionFoto = $galeria.offsetLeft;
        let finalPositionFoto;


        cargarBtns_galeria();
        let initialWidth = window.innerWidth;
        let slide = false;
        let posicion_responsive = 0;
        let index = 0;
        let posX1;
        let posX2;
        let initialPosition;
        let finalPosition;
        let foto_actual = 0;
        let canISlide = true;
        slides.style.left = "50%";
    
        var finishedResize;
        function resizedw(){
            initialWidth = window.innerWidth;
            posicion_responsive = slides.offsetLeft;
        }
        window.onresize = function() {
            clearTimeout(finishedResize);
            finishedResize = setTimeout(function() {
                resizedw();
            }, 100);
        };

        window.addEventListener('resize', ()=>{
            if (slide == false){
                slides.style.left = "50%";
            }else{
                 slides.style.left = `${posicion_responsive + ((window.innerWidth - initialWidth)/2)}px`; 
            }
        })


    const prev = document.querySelector(".anterior");
    const next = document.querySelector(".siguiente");
    /*     const firstSlide = allSlides[0];
    const lastSlide = allSlides[allSlides.length - 1]; */
    
    /*    const cloneFirstSlide = firstSlide.cloneNode(true);
    const cloneLastSlide = lastSlide.cloneNode(true);
    
    slides.appendChild(cloneFirstSlide);
    slides.insertBefore(cloneLastSlide, firstSlide); */
    
    /*   next.addEventListener("click", () => switchSlide("next"));
    prev.addEventListener("click", () => switchSlide("prev")); */
    
    /*     next.addEventListener('click', ()=> cambiarFoto("next"));
    prev.addEventListener('click', ()=> cambiarFoto("prev")); */


    slides.addEventListener("transitionend", checkIndex);
    
    slides.addEventListener("mousedown", dragStart);
    
    slides.addEventListener("touchstart", dragStart);
    slides.addEventListener("touchmove", dragMove);
    slides.addEventListener("touchend", dragEnd);
    

/*     next.addEventListener('click', ()=> cambiarFoto("next"));
    prev.addEventListener('click', ()=> cambiarFoto("prev")); */



    function dragStart(e) {
      initialPosition = slides.offsetLeft;
      if (e.type == "touchstart") {
        posX1 = e.touches[0].clientX;
      } else {
        posX1 = e.clientX;
    
        document.onmouseup = dragEnd;
        document.onmousemove = dragMove;
      }
    }
    
    function dragMove(e) {
        e.preventDefault();

            if (e.type == "touchmove") {
                posX2 = posX1 - e.touches[0].clientX;
                posX1 = e.touches[0].clientX;
              } else {
                posX2 = posX1 - e.clientX;
                posX1 = e.clientX;
              }
            if (index == slidesLength - 1 && posX2 > 0){
                slides.style.left = initialPosition/3;
            }else 
            if (index == 0 && posX2 < 0){
                slides.style.left = initialPosition/3;
            }else {
                slides.style.left = `${slides.offsetLeft - posX2/3}px`;
            }
    }
    
    function dragEnd() {
      finalPosition = slides.offsetLeft;
      if (finalPosition - initialPosition < 0) {
        slides.style.left = `${initialPosition}px`;
        switchSlide("next", "dragging");
      } else if (finalPosition - initialPosition > 0) {
        slides.style.left = `${initialPosition}px`;
        switchSlide("prev", "dragging");
      } else {
        slides.style.left = `${initialPosition}px`;
      }


      document.onmouseup = null;
      document.onmousemove = null;
    }
    


    function dragInicio(e) {
        initialPositionFoto = $galeria.offsetLeft;
        if (e.type == "touchstart") {
          posX1 = e.touches[0].clientX;
        } else {
          posX1 = e.clientX;
      
          document.onmouseup = dragFinal;
          document.onmousemove = dragMover;
        }
      }


      function dragMover(e) {
        e.preventDefault();

            if (e.type == "touchmove") {
                posX2 = posX1 - e.touches[0].clientX;
                posX1 = e.touches[0].clientX;
              } else {
                posX2 = posX1 - e.clientX;
                posX1 = e.clientX;
              }
            if (index == slidesLength - 1 && posX2 > 0){
                $galeria.style.left = initialPosition/3;
            }else 
            if (index == 0 && posX2 < 0){
                $galeria.style.left = initialPosition/3;
            }else {
                $galeria.style.left = `${$galeria.offsetLeft - posX2 / 3}px`;
             } 

    }
    
    function dragFinal() {
      finalPositionFoto = $galeria.offsetLeft;

      if (finalPositionFoto - initialPositionFoto < 0) {
    /*     $galeria.style.left = `${initialPositionFoto}px`;  */
        switchSlide("next");
        changeImage(index);
      } else if (finalPositionFoto - initialPositionFoto > 0) {
/*         $galeria.style.left = `${initialPositionFoto}px`; */
        switchSlide("prev");
        changeImage(index);
      } else {
        $galeria.style.left = `${initialPositionFoto}px`;
      }


      document.onmouseup = null;
      document.onmousemove = null;
    }

    function switchSlide(arg, arg2) {

      slides.classList.add("transition");

      if (canISlide) {
        if (!arg2) {
          initialPosition = slides.offsetLeft;
        }
        if (arg == "next") {
           slides.style.left = `${initialPosition - slideWidth - 16}px`;
          index++;
        } else if (arg == "prev" && index > 0){
          slides.style.left = `${initialPosition + slideWidth + 16}px`;
          index--;
        }


        limpiarSliders();
        allSlides[index].style.opacity = 1;
        foto_actual = index;
        slide = true;
      }
      canISlide = false;
    }
    
    function checkIndex() {
      slides.classList.remove("transition");
      posicion_responsive = slides.offsetLeft;
      canISlide = true;
    }

    function changeImage(){
        let imagen = document.querySelectorAll('.foto_container');

        imagen.forEach( (item) => {
                item.style.transform = "translateX(" + (-index * 100) + "%)";
       })

       $galeria.style.left = `${initialPositionFoto}px`; 

    }

    function limpiarSliders(){
        let menu_miniaturas = document.querySelectorAll('.menu-miniaturas__item');
        menu_miniaturas.forEach((item)=>{
            item.style.opacity = 0.4;
        })
    }
 

    function clickSlider(){
        let menu_miniaturas = document.querySelectorAll('.menu-miniaturas__item');
        let imagen = document.querySelectorAll('.foto_container');

            menu_miniaturas.forEach((elemento)=>{
               
                elemento.addEventListener('click', ()=>{
                slides.classList.add("transition");
                let foto_clickeada = elemento.getAttribute('index');
                if (foto_actual >= 0 && foto_actual !== foto_clickeada){
                    if (canISlide){

                        imagen.forEach( (item) => {
                            item.style.transform = "translateX(" + ((-foto_clickeada) * 100)  + "%)";
                       })


                        slides.style.left = `${slides.offsetLeft - (slideWidth + 16) * (foto_clickeada - foto_actual)}px`;
            
                        limpiarSliders();
                        elemento.style.opacity = 1;
                        index = foto_clickeada;
                        foto_actual = foto_clickeada;
                        slide = true;
                        canISlide = false; 
                    }
                    
                  
                    }
                })
                
        
            }) 
   
    }

    clickSlider()
    function cargarBtns_galeria(){
        let flechas = document.querySelector('.flechas');
        let newCont = document.createElement("div");
        let newP = document.createElement("p");
        newCont.classList.add('anterior');
        newP.innerHTML = `&#8249;`;
        newCont.appendChild(newP);
        flechas.appendChild(newCont);
    
        let newCont2 = document.createElement("div");
        let newP2 = document.createElement("p");
        newCont2.classList.add('siguiente');
        newP2.innerHTML = `&#8250;`;
        newCont2.appendChild(newP2);
        flechas.appendChild(newCont2);
    }

    cambiarFoto();


    function cambiarFoto(){
 
        next.addEventListener('click', ()=>{
            console.log('click next')
            if (canISlide){
                    if (index < slidesLength -1){
                        switchSlide("next");
                        changeImage(index)
                       canISlide = false;
                       console.log('index', index)
                    }   
            }
        })
        prev.addEventListener('click', ()=>{
            console.log('click prev')
            if (index > 0){
                console.log('index', index)
                switchSlide("prev");
                changeImage(index);
                canISlide = false;
            }
        })
     } 
    }



var img_hero = ['bg_hero_jack1.jpg', 'bg_hero_jack2.jpg', 'bg_hero_jack3.jpg'];
let index_hero = 0;

function slider_hero(){
    const $slider_hero = document.querySelector('.slider-hero');

    img_hero.forEach((img)=>{
        let newImage = document.createElement('img');
        newImage.setAttribute("src", "src/assets/"+ img);
        newImage.classList.add('slider-hero__img');
        $slider_hero.appendChild(newImage);
    })




    function cambiarSlideHero(){
        let $images_slider_hero = document.querySelectorAll('.slider-hero__img');

        setInterval(()=>{

            if (index_hero < $images_slider_hero.length-1){
                index_hero++;
            }else{
                index_hero = 0;
            }
            $images_slider_hero.forEach((img)=>{
                img.style.opacity = 0;
            })
            $images_slider_hero[index_hero].style.opacity = 1;
        }, 6000)
    }

    cambiarSlideHero()
}

slider_hero();






