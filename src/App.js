import { useState } from 'react';

import LoginPage from './components/auth/LoginPage/LoginPage';
import NewTweetPage from './components/tweets/NewTweetPage/NewTweetPage';
import TweetPage from './components/tweets/TweetPage/TweetPage';
import TweetsPage from './components/tweets/TweetsPage/TweetsPage';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div className="App">
      {/* <TweetsPage />
      <NewTweetPage />
      <TweetPage /> */}
      {isLogged ? (
        <TweetsPage isLogged={isLogged} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
