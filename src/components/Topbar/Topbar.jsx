import React from 'react';
import { Link } from "react-router-dom";

import instagramLogo from './instagram-logo.svg';

import './Topbar.css';

import { Drawer } from '../Drawer';

export default function Topbar() {
	const [drawerAberto, setDrawerAberto] = React.useState(false);

	return (
		<React.Fragment>
			<Drawer aberto={drawerAberto} fecharChat={setDrawerAberto} />

			<header className="topbar">
				<div className="container">
					<Link to="/" className="topbar__logo">
						<img src={instagramLogo} alt="Instagram logo" />
					</Link>

					<div className="topbar__links">
						<Link to="/usuario" className="topbar__logo">
							Usuários
						</Link>

						<Link to="/login" className="topbar__logo">
							Fazer Login
						</Link>
					</div>

					<button className="topbar__icon" onClick={() => setDrawerAberto(true)}>
						<i className="far fa-paper-plane"></i>
					</button>
				</div>
			</header>
		</React.Fragment>
	);
}
