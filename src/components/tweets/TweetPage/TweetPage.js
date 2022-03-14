import { useParams } from 'react-router-dom';
import Page from '../../layout/Page';

const TweetPage = () => {
  const { tweetId } = useParams();
  return (
    <Page title="Tweet detail">
      <div>TweetPage {tweetId}</div>;
    </Page>
  );
};

export default TweetPage;
