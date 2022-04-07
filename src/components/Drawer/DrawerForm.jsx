import React from 'react';

export function DrawerForm() {
	function enviaFormulario(event) {
		event.preventDefault();

		const nome = event.target.elements.nome.value;
		const mensagem = event.target.elements.mensagem.value;

		console.log({ nome, mensagem });
	}

	return (
		<footer className='drawer__footer'>
			<form onSubmit={enviaFormulario}>
				<input name="nome" type="text" placeholder="Nome" />
				<input name="mensagem" type="text" placeholder="Digite sua mensagem" />

				<button type="submit">Enviar</button>
			</form>
		</footer>
	)
}
