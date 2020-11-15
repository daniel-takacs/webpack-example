import '../index.html';

import getDateString from './date';
import '../styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

document 
    .querySelector('.js-content')
    .innerHTML = `It's ${ getDateString() } `
    .querySelector('.js-modal').modal({
        show: true,
        keyboard: true
        });

