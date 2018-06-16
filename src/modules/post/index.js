import PostComponent from './components';

import lifecycleContainer from './containers/lifecycle';
import PostContainer from './containers';

export default PostContainer(lifecycleContainer(PostComponent));
