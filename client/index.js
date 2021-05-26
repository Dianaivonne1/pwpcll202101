/* eslint-disable no-console */
/* eslint-disable no-alert */
import './stylesheets/style.css';
import './stylesheets/mystyles.css';

console.log('Webpack Working!!!');
// Default parameters ES6/2015
const show = (m = 'Hot Module Replacement Working') => {
  alert(m);
};

show();

function resolveAfter2seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('Calling an async function');
  const result = await resolveAfter2seconds();
  console.log(result);
}

asyncCall();
