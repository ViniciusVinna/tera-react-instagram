import React from 'react';

import './css/normalize.css';
import './css/main.css';
import './css/fontawesome.min.css';

import { Drawer, Topbar, Stories, Feed } from './components';

function App() {
	const [drawerAberto, setDrawerAberto] = React.useState(false);


  return (
		<React.Fragment>
			<Drawer aberto={drawerAberto} fecharChat={setDrawerAberto} />

			<Topbar abrirChat={setDrawerAberto} />

			<Stories />

			<Feed />

		</React.Fragment>
  );
}

export default App;
