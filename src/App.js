import classNames from 'classnames';
import NewTweetPage from './components/tweets/NewTweetPage/NewTweetPage';

import TweetsPage from './components/tweets/TweetsPage';

function App() {
  const container = true;
  return (
    // <div className={`App ${container ? 'container' : ''}`}>
    <div className={classNames('App', { container })}>
      <TweetsPage />
      <NewTweetPage />
    </div>
  );
}

export default App;
