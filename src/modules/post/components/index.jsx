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
      {props.titleLength}
    </div>
    <div>
      <textarea
        onChange={props.bodyAction}
        value={props.body}
      />
      {props.bodyLength}
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
    {props.error && (
      <div>
        {props.error.message}
      </div>
    )}
  </form>
);

PostComponent.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  error: PropTypes.objectOf(PropTypes.any),
  titleAction: PropTypes.func.isRequired,
  bodyAction: PropTypes.func.isRequired,
  submitAction: PropTypes.func.isRequired,
  titleLength: PropTypes.number.isRequired,
  bodyLength: PropTypes.number.isRequired,
};

PostComponent.defaultProps = {
  error: null,
};

export default PostComponent;
