import React from 'react';

import instagramLogo from './instagram-logo.svg';

import './Topbar.css';

export default function Topbar() {
	return (
		<header className="topbar">
			<div className="container">
				<a href="/" className="topbar__logo">
					<img src={instagramLogo} alt="Instagram logo" />
				</a>

				<button className="topbar__icon">
					<i className="far fa-paper-plane"></i>
				</button>
			</div>
		</header>
	);
}
