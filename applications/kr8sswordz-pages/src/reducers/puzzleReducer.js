import * as types from '../actions/actionTypes';

const initialState = {
  fromCache: false,
  fromMongo: false,
  sendingData: false,
  puzzleId: '',
  puzzleData: [],
  loading: false
};

export default function puzzleReducer (state = initialState, action) {
  switch (action.type) {
    case types.puzzle.PUZZLE_LOADING: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case types.puzzle.GET_PUZZLE_DATA_SUCCESS: {
      return Object.assign({}, state, {
        puzzleData: action.data.words,
        loading: false
      });
    }
    case types.puzzle.GET_PUZZLE_DATA_FAILURE: {
      return state;
    }
    case types.puzzle.SUBMIT_PUZZLE_DATA_SUCCESS: {
      return Object.assign({}, state, {
        puzzleData: action.data
      });
    }
    case types.puzzle.SUBMIT_PUZZLE_DATA_FAILURE: {
      return state;
    }
    case types.puzzle.CLEAR_PUZZLE_DATA: {
      return Object.assign({}, state, {
        puzzleData: action.data
      });
    }
    case types.puzzle.SENDING_DATA: {
      return Object.assign({}, state, {
        sendingData: action.data
      });
    }
    case types.puzzle.FROM_MONGO: {
      return Object.assign({}, state, {
        fromMongo: action.data
      });
    }
    case types.puzzle.FROM_CACHE: {
      return Object.assign({}, state, {
        fromCache: action.data
      });
    }
    default: {
      return state;
    }
  }
}
