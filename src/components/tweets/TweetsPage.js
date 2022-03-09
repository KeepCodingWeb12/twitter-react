import { useState, useEffect } from 'react';
import { getLatestTweets } from './service';

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // getLatestTweets().then(tweets => setTweets(tweets));
    const execute = async () => {
      const tweets = await getLatestTweets();
      setTweets(tweets);
    };
    execute();
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
