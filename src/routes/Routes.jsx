import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Home } from './Home';
import { Usuario } from './Usuario';
import { Login } from './Login';

import { Topbar} from '../components';

export function ControladorDeRotas() {
	return (
		<React.Fragment>
			<Topbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/usuario/:id" element={<Usuario />} />
			</Routes>
		</React.Fragment>
	);
}
