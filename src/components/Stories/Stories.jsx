import React from 'react';
import './Stories.css';

export default function Stories({ children }) {
	return (
		<div className="container">
			<section className="stories">
				<div className="stories__container">
					{children}
				</div>
			</section>
		</div>
	);
}
