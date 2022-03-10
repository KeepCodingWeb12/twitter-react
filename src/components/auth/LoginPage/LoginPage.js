import { useState } from 'react';
import Button from '../../common/Button';

function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    remember: false,
  });

  const { username, password, remember } = credentials;

  const handleChange = event => {
    setCredentials(credentials => ({
      ...credentials,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('call to api', credentials);
  };

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Twitter</h1>
      <form onSubmit={handleSubmit}>
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
        <input
          type="checkbox"
          name="remember"
          checked={remember}
          value="remember"
          onChange={handleChange}
        />
        <select value="2" onChange={event => console.log(event)}>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <input
          type="file"
          onChange={event => console.log(event.target.files[0])}
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
