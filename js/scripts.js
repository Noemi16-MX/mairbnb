//Boton flotante en el footer
document.addEventListener('DOMContentLoaded', () => {

    //Obtener la imagen

    const imagenHero = document.querySelector('.hero');

    //Inicialiar las variables
    let i = 0;
    let tiempo = 0;

    //Arreglo con imagenes de fondo
    const imagenes = ['arriba2.jpg', 'arriba.jpg'];



    setInterval(() => {
        imagenHero.style.backgroundPositionY = '-' + tiempo + 'px';

        if (tiempo > 30) {
            tiempo = 0;
            imagenHero.style.backgroundImage = "url(../img/" + imagenes[i] + ")";

            if (i === imagenes.length - 1) { //llego a la ultima imagen
                i = 0; //reinicia conn la primer imagen
            } else {
                i++;
            }
        }
        tiempo++;
        // console.log(tiempo);
    }, 100);

    const btnFlotante = document.querySelector('.btn-flotante');

    btnFlotante.addEventListener('click', (e) => {

        e.preventDefault();
        //Prevenimos el default,pero ejecutamos el siguiente codigo
        const footer = document.querySelector('#footer');

        // console.log(footer.classList);

        if (footer.classList.contains('activo')) {

            footer.classList.remove('activo');
            btnFlotante.classList.remove('activo')
            btnFlotante.innerHTML = 'Idioma y Moneda';
        } else {
            //si no lo conteine, ejecuta esto
            footer.classList.add('activo');
            btnFlotante.classList.add('activo')
            btnFlotante.innerHTML = 'X Cerrar';

        }

    });

});