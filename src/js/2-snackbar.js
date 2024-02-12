console.log('Snackbar');

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const delay = form.delay.value;
  const state = form.state.value;

  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => resolve(state), delay);
    } else {
      setTimeout(() => reject(state), delay);
    }
  });

  promise
    .then(value => {
      iziToast.show({
        position: 'topRight',
        color: 'green',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(error => {
      iziToast.show({
        position: 'topRight',
        color: 'red',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });

  form.reset();
}
