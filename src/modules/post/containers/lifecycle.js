import { lifecycle } from 'recompose';

export default lifecycle({
  componentDidMount() {
    this.props.loadAction();
  },
});
