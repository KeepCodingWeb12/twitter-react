import { useState, useEffect } from 'react';
import { getLatestTweets } from './service';

import './TweetsPage.css';
import styles from './TweetsPage.module.css';

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
    // <div className="tweetsPage" id="page">
    <div className={styles.tweetsPage}>
      <ul
        style={{
          listStyle: 'none',
          margin: 0,
          padding: '2em',
          display: tweets ? 'block' : 'none',
        }}
      >
        {tweets.map(tweet => (
          <li key={tweet.id}>{tweet.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default TweetsPage;
