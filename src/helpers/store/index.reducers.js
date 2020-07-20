import { combineReducers } from 'redux';

import homeReducer from '../../pages/home/home.store';
import featureReducer from '../../pages/feature/feature.store';

const reducers = {
	HomeStore: homeReducer,
	FeatureStore: featureReducer,
};

export default combineReducers(reducers);
