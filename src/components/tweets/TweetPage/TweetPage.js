import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Page from '../../layout/Page';
import { getTweet } from '../service';

class TweetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: null,
      error: null,
      isLoading: false,
    };
  }

  handleGetTweet = async () => {
    this.setState({ isLoading: true, error: null });
    try {
      const tweet = await getTweet(this.props.tweetId);
      this.setState({ tweet, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false, error });
    }
  };

  componentDidMount() {
    this.handleGetTweet();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('old', prevProps, prevState);
    console.log('new', this.props, this.state);
  }

  componentWillUnmount() {
    console.log('unmont');
    // clean tasks
  }

  render() {
    const { tweet, error, isLoading } = this.state;

    // isLoading - show an spinner
    // error - show an alert
    if (error?.status === 401) {
      return <Navigate to="/login" />;
    }

    if (error?.status === 404) {
      return <Navigate to="/404" />;
    }

    return (
      <Page title="Tweet detail">
        <div>{tweet ? JSON.stringify(tweet) : 'Nothing to show'}</div>
      </Page>
    );
  }
}

const TweetPageFunction = () => {
  const { tweetId } = useParams();
  return <TweetPage tweetId={tweetId} />;
};

export default TweetPageFunction;
