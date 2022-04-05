import React from 'react';

import './css/normalize.css';
import './css/main.css';
import './css/fontawesome.min.css';

import { Topbar, Stories, Feed } from './components';

function App() {
  return (
		<React.Fragment>
			<Topbar />

			<Stories />

			<Feed />

		</React.Fragment>
  );
}

export default App;
