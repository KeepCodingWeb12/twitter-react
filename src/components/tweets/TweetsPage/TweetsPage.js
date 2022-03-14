import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layout/Layout';
import { getLatestTweets } from '../service';

import './TweetsPage.css';
import styles from './TweetsPage.module.css';

const TweetsPage = props => {
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
    <Layout title="What's going on..." {...props}>
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
    </Layout>
  );
};

export default TweetsPage;
