import { useState } from 'react';
import Button from '../../common/Button';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Twitter</h1>
      <form>
        <input
          type="text"
          name="username"
          value={username}
          onChange={event => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <Button type="submit" variant="primary">
          Log in
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
