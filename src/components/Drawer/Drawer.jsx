import React from 'react';

import './Drawer.css';
import { DrawerForm } from './DrawerForm';
import { DrawerContent } from './DrawerContent';

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

			<DrawerContent />

			<DrawerForm />

		</div>
	)
};

export default Drawer;

