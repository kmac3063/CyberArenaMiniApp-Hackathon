// import React, { useState, useEffect } from 'react';
// import bridge from '@vkontakte/vk-bridge';
// import View from '@vkontakte/vkui/dist/components/View/View';
// import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
// import '@vkontakte/vkui/dist/vkui.css';
//
// import Home from './tabs/Home';
// import Persik from './tabs/Persik';
//
// const App = () => {
// 	const [activePanel, setActivePanel] = useState('home');
// 	const [fetchedUser, setUser] = useState(null);
// 	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
//
// 	useEffect(() => {
// 		bridge.subscribe(({ detail: { type, data }}) => {
// 			if (type === 'VKWebAppUpdateConfig') {
// 				const schemeAttribute = document.createAttribute('scheme');
// 				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
// 				document.body.attributes.setNamedItem(schemeAttribute);
// 			}
// 		});
// 		async function fetchData() {
// 			const user = await bridge.send('VKWebAppGetUserInfo');
// 			setUser(user);
// 			setPopout(null);
// 		}
// 		fetchData();
// 	}, []);
//
// 	const go = e => {
// 		setActivePanel(e.currentTarget.dataset.to);
// 	};
//
// 	return (
// 		<View activePanel={activePanel} popout={popout}>
// 			<Home id='home' fetchedUser={fetchedUser} go={go} />
// 			<Persik id='persik' go={go} />
// 		</View>
// 	);
// }
//
// export default App;
//

import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import Root from "@vkontakte/vkui/dist/components/Root/Root";

import HomeWithTabs from "./HomeWithTabs";
import CreateTournament from './CreateTournament';

const App = () => {
	const [activeView, setActiveView] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	const schemeAttribute = document.createAttribute('scheme');
	schemeAttribute.value = 'space_gray';
	document.body.attributes.setNamedItem(schemeAttribute);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				// const schemeAttribute = document.createAttribute('scheme');
				// schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				// document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActiveView(e.currentTarget.dataset.to);
	};

	return (
		<Root activeView={activeView}>
			<HomeWithTabs id = "home" fetchedUser={fetchedUser} go={go}/>
			<CreateTournament id = "createTournament" fetchedUser={fetchedUser} go={go}/>
		</Root>
		// <View activePanel={activePanel} popout={popout}>
		// 	<Home id='home' fetchedUser={fetchedUser} go={go} />
		// 	<Persik id='persik' go={go} />
		// </View>

	);
}

export default App;