import React from 'react';

export default function Feed() {
	return (
		<div className="container">
			<section className="feed">
				<article className="post">
					<header className="post__header">
						<div className="user">
							<a href="/" className="user__thumb">
								<img src="img/profiles/yoda/yoda-profile.jpg" alt=""/>
							</a>

							<a href="/" className="user__name">Mestre Yoda</a>
						</div>

						<button className="post__context">
							<i className="fas fa-ellipsis-h"></i>
						</button>
					</header>

					<figure className="post__figure">
						<img src="img/profiles/yoda/yoda-1.jpg" alt=""/>
					</figure>

					<nav className="post__controls">
						<button className="post__control">
							<i className="far fa-heart"></i>
						</button>

						<button className="post__control">
							<i className="far fa-comment"></i>
						</button>

						<button className="post__control">
							<i className="far fa-bookmark"></i>
						</button>
					</nav>

					<div className="post__status">
						<div className="user">
							<a href="/" className="user__thumb">
								<img src="img/profiles/domino/domino-profile.jpg" alt=""/>
							</a>

							<span>
							curtido por <a href="/">Domino</a> e outras <a href="/">7 pessoas</a>
						</span>
						</div>
					</div>
				</article>
			</section>
		</div>
	);
}
