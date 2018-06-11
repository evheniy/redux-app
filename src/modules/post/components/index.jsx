import React from 'react';
import PropTypes from 'prop-types';

const PostComponent = props => (
  <form onSubmit={props.submitAction}>
    <h1>Our form example</h1>
    <div>
      <input
        type="text"
        onChange={props.titleAction}
        value={props.title}
      />
    </div>
    <div>
      <textarea
        onChange={props.bodyAction}
        value={props.body}
      />
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
);

PostComponent.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  titleAction: PropTypes.func.isRequired,
  bodyAction: PropTypes.func.isRequired,
  submitAction: PropTypes.func.isRequired,
};

export default PostComponent;
