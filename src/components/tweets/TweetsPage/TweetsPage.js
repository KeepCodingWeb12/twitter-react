import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../layout/Page';
import { getLatestTweets } from '../service';

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
    <Page title="What's going on...">
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
            <li key={tweet.id}>
              <Link to={`/tweets/${tweet.id}`}>{tweet.content}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Page>
  );
};

export default TweetsPage;
