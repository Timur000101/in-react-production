import { AboutPage } from 'pages/About';
import { MainPage } from 'pages/Main';
import { NotFoundPage } from 'pages/NotFound';
import { RouteProps } from 'react-router-dom';

export enum AppRouter {
	MAIN = 'main',
	ABOUT = 'about',
	NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRouter, string> = {
	[AppRouter.MAIN]: '/',
	[AppRouter.ABOUT]: '/about',
	[AppRouter.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouter, RouteProps> = {
	[AppRouter.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRouter.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},
	[AppRouter.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};
