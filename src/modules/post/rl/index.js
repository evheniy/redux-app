import RL from 'redux-lazy';

const rl = new RL('post');

rl.addFormElementAction('title', '');
rl.addFormElementAction('body', '');
rl.addFormAction('submit');
rl.addEventAction('load');
rl.addEventAction('loaded');
rl.addParamAction('error');

const result = rl.flush();

const {
  nameSpace,
  actions: {
    bodyAction,
    errorAction,
    loadAction,
    loadedAction,
    submitAction,
    titleAction,
  },
  types: {
    POST_BODY,
    POST_ERROR,
    POST_LOAD,
    POST_LOADED,
    POST_SUBMIT,
    POST_TITLE,
  },
} = result;

export default result;

export {
  nameSpace,
  bodyAction,
  errorAction,
  loadAction,
  loadedAction,
  submitAction,
  titleAction,
  POST_BODY,
  POST_ERROR,
  POST_LOAD,
  POST_LOADED,
  POST_SUBMIT,
  POST_TITLE,
};
