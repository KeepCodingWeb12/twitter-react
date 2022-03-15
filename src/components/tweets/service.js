import client from '../../api/client';

const tweetsBaseUrl = '/api';

export const getLatestTweets = () => {
  const url = `${tweetsBaseUrl}/tweets?_expand=user&_embed=likes&_sort=updatedAt&_order=desc`;
  return client.get(url);
};
