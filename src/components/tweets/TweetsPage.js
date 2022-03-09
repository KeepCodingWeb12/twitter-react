import { useState, useEffect } from 'react';
import { getLatestTweets } from './service';

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getLatestTweets().then(tweets => setTweets(tweets));
  }, []);

  return (
    <div className="tweetsPage">
      <ul>
        {tweets.map(tweet => (
          <li key={tweet.id}>{tweet.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default TweetsPage;
