import React from 'react';
import './Stories.css';

import { Avatar } from '../Avatar';

import { pegaStories } from './Stories.helpers';

export default function Stories({ dados }) {
	return (
		<div className="container">
			<section className="stories">
				<div className="stories__container">

					{pegaStories(dados).map((story) => (
						<Avatar
							key={story.id}
							imagem={story.story}
							tamanho="grande"
							selecionavel={true}
						/>
					))}

				</div>
			</section>
		</div>
	);
}
