const header = document.getElementById('header');
const boton = document.getElementById('boton-contacto');
const botonHidden = document.getElementById('boton-contacto-hidden');

document.addEventListener('scroll', function(e) {
    const headerRect = header.getBoundingClientRect();
    const botonRect = boton.getBoundingClientRect();
    
    const esVisible = botonRect.top + botonRect.height - headerRect.height > 0;

    if (esVisible) {
        botonHidden.classList.add('boton--oculto');
    } else {
        botonHidden.classList.remove('boton--oculto');
    }
});
