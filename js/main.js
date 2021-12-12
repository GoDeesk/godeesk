/*
 * Funcionalidad del botón de contactanos
 */

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

/*
 * Funcionalidad del modal de contactanos
 */

const contactoModal = document.getElementById("contacto-modal");
const contactoCerrar = document.getElementById("contacto-cerrar");

function abrirContacto(event) {
    contactoModal.classList = "contacto-wrapper";
    event.preventDefault();
}

function cerrarContacto() {
    contactoModal.classList = "contacto-wrapper contacto-oculto";
}

contactoModal.addEventListener("click", function (event) {
    if (event.target === contactoModal) {
        cerrarContacto();
    }
});
contactoCerrar.addEventListener("click", cerrarContacto);

boton.addEventListener("click", abrirContacto);
botonHidden.addEventListener("click", abrirContacto);

/*
 * Sección de preguntas frecuentes
 */

const preguntaHeads = Array.from(document.getElementsByClassName("pregunta-head"));

preguntaHeads.forEach((preguntaHead) => {
    preguntaHead.addEventListener("click", (event) => {
        const icon = event.currentTarget.getElementsByClassName("fa")[0];
        const body = event.currentTarget.parentElement
            .getElementsByClassName("pregunta-body")[0];
        if (body.classList.contains("pregunta-body__mostrar")) {
            body.classList.remove("pregunta-body__mostrar");
            icon.classList.remove("icon__open")
        } else {
            body.classList.add("pregunta-body__mostrar");
            icon.classList.add("icon__open")
        }
    });
});
