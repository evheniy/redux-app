import PostComponent from './components';
import rl from './rl';
import lifecycleContainer from './containers/lifecycle';

const { Container: PostContainer } = rl;

export default PostContainer(lifecycleContainer(PostComponent));
