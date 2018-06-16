import RL from 'redux-lazy';

const rl = new RL('post');

rl.addAction('title', { title: '' }, { isFormElement: true, asParams: 'title' });
rl.addAction('body', { body: '' }, { isFormElement: true, asParams: 'body' });
rl.addAction('submit', {}, { isForm: true });
rl.addAction('load');
rl.addAction('loaded');
rl.addAction('error', { error: null }, { asParams: 'error' });

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
