import React from 'react';
import { useLocation } from 'react-router-dom';

import '../css/normalize.css';
import '../css/main.css';
import '../css/fontawesome.min.css';

import { Feed, Post } from '../components';

export function Usuario() {
	const [usuario, setUsuario] = React.useState({});
	const location = useLocation();
	const id = location.pathname.split('/').at(-1);

	React.useEffect(() => {
		fetch(`https://624c9312c172b69d69274ae4.mockapi.io/api/v1/users/${id}`)
			.then((response) => response.json())
			.then((resposta) => {
				setUsuario(resposta)
			});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (Object.keys(usuario).length === 0) {
		return <h2>Carregando...</h2>
	}


  return (
		<React.Fragment>
			<Feed>
				<Post
					key={usuario.id}
					avatar={usuario.avatar}
					nome={usuario.name}
					foto={usuario.photos[0]?.picture}
					texto={usuario.photos[0]?.text}
					idUsuario={usuario.id}
				/>
			</Feed>
		</React.Fragment>
  );
}
