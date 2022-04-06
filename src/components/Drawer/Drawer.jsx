import React from 'react';

import './Drawer.css';
// FIRACODE
// JETBRAINS MONO

const Drawer = ({ aberto = false, fecharChat }) => {
	return (
		<div className='drawer' data-aberto={aberto}>
			<div className='drawer__header'>
				<button
					type="button"
					onClick={() => fecharChat(false)}
				>
					Fechar
				</button>
			</div>
			Olá, sou um drawer
		</div>
	)
};

export default Drawer;

