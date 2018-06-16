import { combineEpics } from 'redux-observable';

import postEpics from './modules/post/epics';

const rootEpic = combineEpics(postEpics);

export default rootEpic;
