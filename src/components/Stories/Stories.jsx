import React from 'react';
import './Stories.css';

export default function Stories() {
	return (
		<div className="container">
			<section className="stories">
				<div className="stories__container">
					<a href="/" className="user__thumb">
						<span className="user__thumb__wrapper">
							<img src="img/profiles/yoda/yoda-profile.jpg" alt=""/>
						</span>
					</a>

					<a href="/" className="user__thumb user__thumb--hasNew">
						<span className="user__thumb__wrapper">
							<img src="img/profiles/gamora/gamora-profile.jpg" alt=""/>
						</span>
					</a>

					<a href="/" className="user__thumb">
						<span className="user__thumb__wrapper">
							<img src="img/profiles/black-panther/black-panther-profile.jpg" alt=""/>
						</span>
					</a>
				</div>
			</section>
		</div>
	);
}
