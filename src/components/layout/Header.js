import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

import Button from '../common/Button';
import { ReactComponent as Icon } from '../../assets/twitter.svg';
import { logout } from '../auth/service';

import './Header.css';

function Header({ className, isLogged, onLogout }) {
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return (
    <header className={classNames('header', className)}>
      <Link to="/">
        <div className="header-logo">
          {/* <img src={logo} alt="Twitter-React"></img> */}
          <Icon width="32" height="32" />
        </div>
      </Link>
      <nav className="header-nav">
        <NavLink
          to="/tweets/new"
          // className={({ isActive }) => (isActive ? 'active' : '')}
          style={({ isActive }) => (isActive ? { color: 'green' } : null)}
        >
          New Tweet
        </NavLink>
        <NavLink
          to="/tweets"
          // className={({ isActive }) => (isActive ? 'active' : '')}
          style={({ isActive }) => (isActive ? { color: 'green' } : null)}
          end
        >
          See all tweets
        </NavLink>
        {isLogged ? (
          <Button className="header-button" onClick={handleLogoutClick}>
            Logout
          </Button>
        ) : (
          <Button variant="primary" className="header-button">
            Login
          </Button>
        )}
      </nav>
    </header>
  );
}

export default Header;
