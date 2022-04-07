import React from 'react';

export function DrawerContent() {
	const [mensagens, setMensagens] = React.useState([]);

	React.useEffect(() => {
		fetch('https://624c9312c172b69d69274ae4.mockapi.io/api/v1/chat')
			.then(response => response.json())
			.then(data => setMensagens(data));
	})


	return (
		<div className='drawer__content'>
			{mensagens.length
				? mensagens.map((mensagem) => (
					<div
						key={mensagem.id}
						className='drawer__message'
					>
						<h4>{mensagem.name}</h4>

						<p>{mensagem.comment}</p>
					</div>
				))
				: 'Nenhuma mensagem'}
		</div>
	)
}
