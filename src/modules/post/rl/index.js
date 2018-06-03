import RL from 'redux-lazy';

const rl = new RL('form');
rl.addAction('title', { title: '' });
rl.addAction('body', { body: '' });
rl.addAction('submit');

const result = rl.flush();

export default result;
