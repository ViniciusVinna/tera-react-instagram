import React from 'react';

import { Avatar } from '../Avatar';

const placeholderFoto = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png';

export default function Post({ avatar, nome, foto = placeholderFoto, texto = '' }) {
	return (
		<article className="post">
			<header className="post__header">
				<div className="user">

					<Avatar
						imagem={avatar}
						/>

					<a href="/" className="user__name">{nome}</a>
				</div>

				<button className="post__context">
					<i className="fas fa-ellipsis-h"></i>
				</button>
			</header>

			<figure className="post__figure">
				<img src={foto} alt={texto} />
			</figure>

			<div className="post__text">
				<h4>{texto}</h4>
			</div>

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

				<Avatar imagem="https://avatarfiles.alphacoders.com/125/thumb-125043.jpg" tamanho="pequeno" />

					<span>
					curtido por <a href="/">Domino</a> e outras <a href="/">7 pessoas</a>
				</span>
				</div>
			</div>
		</article>
	)
}
