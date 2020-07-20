import { lazy } from 'react';

import Urls from './url.path';

const Home = lazy(_ => import('./../../pages/home'));
const Feature = lazy(_ => import('./../../pages/feature'));

export default [
	{
		path: Urls.HomeUrl.path,
		auth: true,
		exact: true,
		name: Urls.HomeUrl.name,
		component: Home,
	},
	{
		path: Urls.FeatureUrl.path,
		auth: true,
		exact: true,
		name: Urls.FeatureUrl.name,
		component: Feature,
	},
];
