import React from 'react';
import './Stories.css';

import { Avatar } from '../Avatar';

export default function Stories() {
	return (
		<div className="container">
			<section className="stories">
				<div className="stories__container">

					<Avatar
						imagem="https://avatarfiles.alphacoders.com/125/thumb-125043.jpg"
						tamanho="grande"
						selecionavel={true}
					/>

				</div>
			</section>
		</div>
	);
}
