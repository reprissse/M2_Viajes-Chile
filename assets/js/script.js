/* inicio de función */
$(document).ready(function(){

    /* 1 componente javaScript */    
    /* navbar cambia de color */
    var nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 200) {
    nav.classList.add('bg-dark', 'shadow');
    } else {
    nav.classList.remove('bg-dark', 'shadow');
    }
    });


    /* 2 componente javaScript */  
    /* tooltips en formulario (boton enviar) e (icono facebook) */
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
 
    
    /* 3 componente javaScript */  
    /* evento click alerta enviar correo */
    $("#enviar").click(function(){
    alert("¡Gracias por contactarnos!");
    });

}); /* cierre de función */