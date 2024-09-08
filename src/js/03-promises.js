import Notiflix from 'notiflix';

const input = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

input.addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(input.delay.value);
  const step = parseInt(input.step.value);
  const amount = parseInt(input.amount.value);

  for (let i = 0; i < amount; i++) {
    const currentDelay = delay + i * step;
    createPromise(i+ 1, currentDelay)
      .then(value => {
        Notiflix.Notify.success(`Fulfilled promise ${value.position} in ${value.delay}ms`);
      })
      .catch(error => {
        Notiflix.Notify.failure(`Rejected promise ${error.position} in ${error.delay}ms`);
      });
  }
});