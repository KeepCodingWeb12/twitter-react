import classNames from 'classnames';

import Button from './components/common/Button';
import TweetsPage from './components/tweets/TweetsPage';

function App() {
  const container = true;
  return (
    // <div className={`App ${container ? 'container' : ''}`}>
    <div className={classNames('App', { container })}>
      <TweetsPage />
      <Button variant="primary">Primary</Button>
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}

export default App;
