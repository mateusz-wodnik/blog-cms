import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './modules/App/App';
import registerServiceWorker from './registerServiceWorker';

render(
	<BrowserRouter>
		<Route path="/" component={App}/>
	</BrowserRouter>,
	document.getElementById('root')
);

registerServiceWorker();
