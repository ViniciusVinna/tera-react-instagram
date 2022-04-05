import React from 'react';

import './Avatar.css';

// "user__thumb user__thumb--hasNew"

const placeholder = 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg';

const Avatar = ({ imagem = placeholder, tamanho = 'normal',  selecionavel = false }) => {
	const [ativo, setAtivo] = React.useState(false);

	function controlaClique() {
		if (selecionavel) {
			setAtivo(!ativo);
		}
	}

	return (
		<button
			type="button"
			className={`user__thumb ${ativo ? "user__thumb--hasNew" : ''}`}
			data-tamanho={tamanho}
			onClick={() => controlaClique()}
		>
			<img src={imagem} alt=""/>
		</button>
	)
};

export default Avatar;

