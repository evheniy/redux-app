import React from 'react';
import PropTypes from 'prop-types';

const PostComponent = props => (
  <form
    onSubmit={(event) => {
      event.preventDefault();
      props.submitAction();
    }}
  >
    <h1>Our form example</h1>
    <div>
      <input
        type="text"
        onChange={event => props.titleAction(event.target.value)}
        value={props.title}
      />
    </div>
    <div>
      <textarea
        onChange={event => props.bodyAction(event.target.value)}
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
