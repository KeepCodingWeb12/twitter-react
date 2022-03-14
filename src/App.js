import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './components/auth/LoginPage/LoginPage';
import RequireAuth from './components/auth/RequireAuth';
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
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/tweets"
          element={<TweetsPage isLogged={isLogged} onLogout={handleLogout} />}
        />
        <Route
          path="/tweets/:tweetId"
          element={<TweetPage isLogged={isLogged} onLogout={handleLogout} />}
        />
        <Route
          path="/tweets/new"
          element={
            <RequireAuth isLogged={isLogged}>
              <NewTweetPage isLogged={isLogged} onLogout={handleLogout} />
            </RequireAuth>
          }
        />
        <Route path="/" element={<Navigate to="/tweets" />} />
        <Route path="/404" element={<div>404 | Not Found Page</div>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
