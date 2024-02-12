console.log('Snackbar');

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import stopIcon from '../img/stop-icon.svg';
import okIcon from '../img/ok-icon.svg';

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
        messageColor: '#fff',
        color: 'green',
        backgroundColor: '#59A10D',
        messageSize: '16',
        position: 'topCenter',
        iconUrl: okIcon,
      });
    })
    .catch(error => {
      iziToast.show({
        color: 'red',
        message: `❌ Rejected promise in ${delay}ms`,
        messageColor: '#fff',
        color: 'red',
        backgroundColor: '#EF4040',
        messageSize: '16',
        position: 'topCenter',
        iconUrl: stopIcon,
      });
    });

  form.reset();
}
