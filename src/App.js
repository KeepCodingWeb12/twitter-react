import classNames from 'classnames';

import LoginPage from './components/auth/LoginPage/LoginPage';
import NewTweetPage from './components/tweets/NewTweetPage/NewTweetPage';
import TweetPage from './components/tweets/TweetPage/TweetPage';
import TweetsPage from './components/tweets/TweetsPage/TweetsPage';

function App() {
  const container = true;
  return (
    // <div className={`App ${container ? 'container' : ''}`}>
    <div className={classNames('App', { container })}>
      {/* <TweetsPage />
      <NewTweetPage />
      <TweetPage /> */}
      <LoginPage />
    </div>
  );
}

export default App;
