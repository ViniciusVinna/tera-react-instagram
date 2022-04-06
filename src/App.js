import React from 'react';

import './css/normalize.css';
import './css/main.css';
import './css/fontawesome.min.css';

import { Drawer, Topbar, Stories, Feed } from './components';

function App() {
	const [drawerAberto, setDrawerAberto] = React.useState(false);
	const [usuarios, setUsuarios] = React.useState([]);

	React.useEffect(() => {
		fetch('https://624c9312c172b69d69274ae4.mockapi.io/api/v1/users')
			.then((response) => response.json())
			.then((resposta) => {

				setUsuarios(resposta)
			});
	}, []);


  return (
		<React.Fragment>
			<Drawer aberto={drawerAberto} fecharChat={setDrawerAberto} />

			<Topbar abrirChat={setDrawerAberto} />

			{usuarios.length === 0
				? (<h2>Carregando...</h2>)
				: (
					<React.Fragment>
						<Stories dados={usuarios} />

						<Feed />
					</React.Fragment>
				)
			}

		</React.Fragment>
  );
}

export default App;
