var xhr = new XMLHttpRequest();

var datos = document.getElementById('form');

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
