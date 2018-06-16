import { combineReducers } from 'redux';

import rl, { nameSpace as postNameSpace } from './modules/post/rl';

const { reducer: postReducer } = rl;

export default combineReducers({ [postNameSpace]: postReducer });
