import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './css/normalize.css';
import './css/main.css';
import './css/fontawesome.min.css';

import { ControladorDeRotas } from './routes/Routes';

function App() {
  return (
		<BrowserRouter>
			<ControladorDeRotas />
		</BrowserRouter>
	);
}

export default App;
