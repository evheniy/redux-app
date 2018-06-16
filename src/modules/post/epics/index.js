import { combineEpics } from 'redux-observable';

import loadEpic from './load';

export default combineEpics(loadEpic);
