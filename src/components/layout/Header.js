import classNames from 'classnames';
import Button from '../common/Button';

import { ReactComponent as Icon } from '../../assets/twitter.svg';

import './Header.css';

function Header({ className, isLogged }) {
  return (
    <header className={classNames('header', className)}>
      <div className="header-logo">
        {/* <img src={logo} alt="Twitter-React"></img> */}
        <Icon width="32" height="32" />
      </div>
      <nav className="header-nav">
        <Button variant="primary" className="header-button">
          {isLogged ? 'Logout' : 'Login'}
        </Button>
      </nav>
    </header>
  );
}

export default Header;
