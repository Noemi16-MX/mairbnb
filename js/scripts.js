//Boton flotante en el footer
document.addEventListener('DOMContentLoaded', () => {

    const btnFlotante = document.querySelector('.btn-flotante');

    btnFlotante.addEventListener('click', (e) => {

        e.preventDefault();
        //Prevenimos el default,pero ejecutamos el siguiente codigo
        const footer = document.querySelector('#footer');

        console.log(footer.classList);

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