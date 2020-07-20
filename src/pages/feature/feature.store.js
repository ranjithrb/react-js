import { GET } from '../../helpers/services/http.service';

const FILE = 'FILE://FEATURE';

const generateAction = (type) => `${FILE}/${type}`;

const FETCH_DATA = generateAction('FETCH_DATA');
const SAVE_DATA = generateAction('SAVE_DATA');

async function getPosts() {
  const config = { url: `/posts` };
  const response = await GET(config);
  return response;
}

export function apiCall() {
  return async function (dispatch) {
    try {
      dispatch({ type: FETCH_DATA, fetching: true });
      const { data = [] } = await getPosts();
      dispatch({ type: SAVE_DATA, data });
      dispatch({ type: FETCH_DATA, fetching: false });
    } catch (error) {
      // log error here
      dispatch({ type: FETCH_DATA, fetching: false });
    }
  };
}

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
    case FETCH_DATA:
      return {
        ...state,
        course: {
          ...state.course,
          fetching: action.fetching,
        },
      };
    case SAVE_DATA:
      return {
        ...state,
        course: {
          ...state.course,
          details: {
            ...state.course.details,
            results: action.data,
          },
        },
      };
    default:
      return state;
  }
}

export default reducer;
