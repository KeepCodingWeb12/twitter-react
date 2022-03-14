import { useParams } from 'react-router-dom';
import Layout from '../../layout/Layout';

const TweetPage = () => {
  const { tweetId } = useParams();
  return (
    <Layout title="Tweet detail">
      <div>TweetPage {tweetId}</div>
    </Layout>
  );
};

export default TweetPage;
