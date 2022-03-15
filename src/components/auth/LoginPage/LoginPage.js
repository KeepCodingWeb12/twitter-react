import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import FormField from '../../common/FormField';
import AuthContext from '../context';
import { login } from '../service';

import './LoginPage.css';

function LoginPage() {
  const ref = useRef(null);
  const { handleLogin: onLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    remember: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(ref.current);
    ref.current.focus();
  }, []);

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

  const resetError = () => setError(null);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      resetError();
      setIsLoading(true);
      await login(credentials);
      setIsLoading(false);
      onLogin();
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Twitter</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="username"
          label="phone, email or username"
          className="loginForm-field"
          value={username}
          onChange={handleChange}
          // ref={ref}
        />
        <FormField
          type="password"
          name="password"
          label="password"
          className="loginForm-field"
          value={password}
          onChange={handleChange}
          ref={ref}
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
          className="loginForm-submit"
          type="submit"
          variant="primary"
          disabled={!username || !password || isLoading}
        >
          Log in
        </Button>
      </form>
      {error && (
        <div onClick={resetError} className="loginPage-error">
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
