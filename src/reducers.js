import { combineReducers } from 'redux';

import rl from './modules/post/rl';

const { nameSpace: postNameSpace, reducer: postReducer } = rl;

export default combineReducers({ [postNameSpace]: postReducer });
