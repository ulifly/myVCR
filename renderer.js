import { Swal } from 'sweetalert2';
const botonGrabar = document.querySelector('#botonGrabar');


/* botonGrabar.addEventListener('click', () => {
    Swal.fire({
        title: 'Grabando',
        text: 'Espere un momento...',
        timerProgressBar: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
            Swal.showLoading()
        }
    })
    setTimeout(() => {
        Swal.fire({
            icon: 'success',
            title: 'Grabado',
            text: 'El archivo se ha grabado correctamente'
        })
    }, 2000)
})
 */

botonGrabar.addEventListener('click', () => {
  const media = await navigator.mediaDevices.getUserMedia({

  })
})