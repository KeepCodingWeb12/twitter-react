import Button from '../common/Button';

import { ReactComponent as Icon } from '../../assets/twitter.svg';

function Header() {
  return (
    <header>
      <div>
        {/* <img src={logo} alt="Twitter-React"></img> */}
        <Icon width="32" height="32" />
      </div>
      <nav>
        <Button variant="primary">Login</Button>
      </nav>
    </header>
  );
}

export default Header;
