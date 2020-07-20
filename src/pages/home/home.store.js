const FILE = 'FILE://HOME';

const generateAction = type => `${FILE}/${type}`

const SAVE_DATA = generateAction('SAVE_DATA');

function getInitialState() {
	return {
		course: {
			fetching: true,
			details: {},
		},
	};
}

function reducer(state = getInitialState(), action) {
	switch (action.type) {
		case SAVE_DATA:
			return state;
		default:
			return state;
	}
}

export default reducer;
