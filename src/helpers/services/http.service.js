/**
 * Library used for handling HTTP request : axios
 * GIT: https://github.com/axios/axios
 * NPM: https://www.npmjs.com/package/axios
 */

import Axios from 'axios';

import { APP_TOKEN, REFRESH_TOKEN } from '../constants';

// import envConfig from '../config/environment';
const envConfig = {};

// default SERVICE_URL will go here.
const API_URL = 'https://jsonplaceholder.typicode.com';

const axiosConfig = {
	baseURL: envConfig.API_ENDPOINT || API_URL,
	headers: {
		'Content-Type': 'Application/json',
	},
};

const getAccessToken = _ => localStorage.getItem(APP_TOKEN);
const getRefreshToken = _ => localStorage.getItem(REFRESH_TOKEN);

function getApiConfig({ headers = {}, appConfig = {} }) {
	const mainConfig = {
		...axiosConfig,
		headers: {
			...axiosConfig.headers,
			...headers,
			Authorization: getAccessToken(),
		},
	};

	if (appConfig.baseURL === '') mainConfig.baseURL = appConfig.baseURL;
	if (appConfig.doNotNeedAuthorizationHeader)
		delete mainConfig.headers.Authorization;

	return mainConfig;
}

const ApiCall = ajaxParams => Axios(ajaxParams);

export function delay(time, value) {
	return new Promise(function(resolve) {
		setTimeout(resolve.bind(null, value), time);
	});
}

export const GET = ({ url = '', params = {}, headers = {} }) => {
	const config = getApiConfig({ headers });

	const ajaxParams = {
		...config,
		url,
		params,
		method: 'GET',
	};

	return ApiCall(ajaxParams);
};

export const POST = ({
	url = '',
	params = {},
	data = {},
	headers = {},
	appConfig = {},
}) => {
	const config = getApiConfig({ headers, appConfig });

	const ajaxParams = {
		...config,
		url,
		data,
		params,
		method: 'POST',
	};

	return ApiCall(ajaxParams);
};

export const PUT = ({ url = '', params = {}, data = {}, headers = {} }) => {
	const config = getApiConfig({ headers });

	const ajaxParams = {
		...config,
		url,
		data,
		params,
		method: 'PUT',
	};

	return ApiCall(ajaxParams);
};

export const PATCH = ({ url = '', params = {}, data = {}, headers = {} }) => {
	const config = getApiConfig({ headers });

	const ajaxParams = {
		...config,
		url,
		data,
		params,
		method: 'PATCH',
	};

	return ApiCall(ajaxParams);
};

export const DELETE = ({
	url = '',
	params = {},
	data = {},
	headers = {},
	appConfig = {},
}) => {
	const config = getApiConfig({ headers, appConfig });

	const ajaxParams = {
		...config,
		url,
		data,
		params,
		method: 'DELETE',
	};

	return ApiCall(ajaxParams);
};

function responseInterceptorFunction() {
	const responseInterceptor = Axios.interceptors.response.use(
		function(response) {
			/**
			 * Any status code that lie within the range of 2xx cause this function to trigger
			 * Do something with response data
			 */
			return response;
		},
		function(error) {
			const {
				config: originalRequest,
				response: { status },
			} = error;

			/*
			 * When response code is 401, refresh the app-token using existing refresh-token.
			 * Eject the interceptor so it doesn't loop in case of 401 again...
			 * token refresh causes the 401 response
			 */
			Axios.interceptors.response.eject(responseInterceptor);

			if (status === 401) {
				return (
					POST({
						url: 'app/refresh',
						data: { token: getRefreshToken() },
					})
						.then(response => {
							const { data: { accessToken } = {} } = response;
							localStorage.setItem(APP_TOKEN, accessToken);
							originalRequest.headers.Authorization = `${accessToken}`;
							return Axios(originalRequest);
						})
						// .catch(error => {
						// 	// remove locally saved tokens
						// 	// localStorage.clear();
						// 	// dispatch logout functionality
						// 	console.log(' $$$ response error %%% $$$ ', error.response);

						// 	// return new Error({ error, message: 'LOGOUT_MESSAGE' });
						// 	return Promise.reject(error);
						// })
						.finally(responseInterceptorFunction)
				);
			}

			/**
			 * Any status codes that falls outside the range of 2xx cause this function to trigger
			 * Do something with response error
			 */

			return Promise.reject(error)
		}
	);
}

responseInterceptorFunction();
