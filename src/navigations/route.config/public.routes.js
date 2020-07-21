import { lazy } from 'react';

import { HomeUrl, FeatureUrl } from './url.path';
import generateRandomUid from '../../helpers/services/uid.service';

const Home = lazy(() => import('./../../pages/home'));
const Feature = lazy(() => import('./../../pages/feature'));

const publicRoutes = [
  {
    path: HomeUrl.path,
    exact: true,
    name: HomeUrl.name,
    component: Home,
    key: generateRandomUid(),
  },
  {
    path: FeatureUrl.path,
    exact: true,
    name: FeatureUrl.name,
    component: Feature,
    key: generateRandomUid(),
  },
];

export default publicRoutes;
