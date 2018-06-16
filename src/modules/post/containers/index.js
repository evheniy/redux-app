import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import post, { nameSpace } from '../rl';

const postSelector = state => ({
  title: state[nameSpace].title,
  body: state[nameSpace].body,
  titleLength: state[nameSpace].title.length,
  bodyLength: state[nameSpace].body.length,
});

const mapStateToProps = createSelector(
  postSelector,
  newPost => newPost,
);
const mapDispatchToProps = { ...post.actions };

export default connect(mapStateToProps, mapDispatchToProps);
