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

const slider = tns({
    container: '.planes-wrapper',
    items: 1,
    center: true,
    mouseDrag: true,
    swipeAngle: false,
    controlsText: [
        "<i class='fa fa-caret-left'></i>",
        "<i class='fa fa-caret-right'></i>"
    ],
    responsive: {
        700: {
            items: 2,
            center: false,
            autoWidth: true
        },
        900: {
            items: 3,
            center: false,
            autoWidth: true
        }
    },
    preventScrollOnTouch: 'auto'
});
