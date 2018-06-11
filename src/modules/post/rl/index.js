import RL from 'redux-lazy';

const rl = new RL('post');
rl.addAction(
  'title',
  { title: '' },
  { isFormElement: true, asParams: 'title' },
);
rl.addAction(
  'body',
  { body: '' },
  { isFormElement: true, asParams: 'body' },
);
rl.addAction(
  'submit',
  {},
  { isForm: true },
);

const result = rl.flush();

export default result;
