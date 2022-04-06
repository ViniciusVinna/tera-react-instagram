import React from 'react';

import './Drawer.css';
// FIRACODE
// JETBRAINS MONO

const Drawer = ({ aberto = false, fecharChat }) => {
	function enviaFormulario(event) {
		event.preventDefault();

		const nome = event.target.elements.nome.value;
		const mensagem = event.target.elements.mensagem.value;

		console.log({ nome, mensagem });
	}


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

			<div className='drawer__content'>
				Olá, sou um drawer
			</div>

			<footer className='drawer__footer'>
				<form onSubmit={enviaFormulario}>
					<input name="nome" type="text" placeholder="Nome" />
					<input name="mensagem" type="text" placeholder="Digite sua mensagem" />

					<button type="submit">Enviar</button>
				</form>
			</footer>
		</div>
	)
};

export default Drawer;

