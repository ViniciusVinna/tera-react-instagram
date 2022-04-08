import React from 'react';

export function DrawerForm() {
	function enviaFormulario(event) {
		event.preventDefault();

		const name = event.target.elements.nome.value;
		const comment = event.target.elements.mensagem.value;

		fetch('https://624c9312c172b69d69274ae4.mockapi.io/api/v1/chat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				comment,
			}),
		})
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
