import { connect } from 'react-redux';
import { createSelector } from 'reselect'

import post, { nameSpace } from '../rl';

const postTitleSelector = state => ({
  title: state[nameSpace].title,
});
const postBodySelector = state => ({
  body: state[nameSpace].body,
});

const mapStateToProps = createSelector(
  postTitleSelector,
  postBodySelector,
  (titleObject, bodyObject) => ({ ...titleObject, ...bodyObject }),
);
const mapDispatchToProps = { ...post.actions };

export default connect(mapStateToProps, mapDispatchToProps);
