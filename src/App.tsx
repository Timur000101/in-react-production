import React from 'react';
import './styles/index.scss'
import {classNames} from "./helpers/classNames/classNames";
import {useTheme} from "./theme/useTheme";

const App = () => {
	const { theme, toggleTheme } = useTheme()
	
	return (
		<div className={classNames('app', {}, [theme])}>
			Hello
			
			<button onClick={toggleTheme}>Change Theme</button>
		</div>
	);
};

export default App;