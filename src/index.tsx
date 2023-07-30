import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';
import './shared/config/i18n/i18n';

function AppWithCallbackAfterRender() {
	return (
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	);
}

const rootRef = document.getElementById('root');
const root = createRoot(rootRef);
root.render(<AppWithCallbackAfterRender />);
