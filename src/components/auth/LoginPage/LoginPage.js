import { useState } from 'react';
import Button from '../../common/Button';

function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const { username, password } = credentials;

  const handleChange = event => {
    setCredentials(credentials => ({
      ...credentials,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Twitter</h1>
      <form>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="primary"
          disabled={!username || !password}
        >
          Log in
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
