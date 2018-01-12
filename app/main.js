import '../node_modules/hammerjs/hammer.min.js';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import './styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';

ReactDOM.render(
  <Hello name={'Maksimko, Parcel bundler and React.js'}/>,
  document.querySelector('#app')
);
