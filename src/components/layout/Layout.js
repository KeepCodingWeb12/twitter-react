import { Outlet } from 'react-router-dom';
import Header from './Header';

import './Layout.css';

function Layout() {
  return (
    <div className="layout">
      <Header className="layout-header bordered" />
      <main className="layout-main bordered">
        <Outlet />
      </main>
      <footer className="layout-footer bordered">© 2022 Keepcoding</footer>
    </div>
  );
}

export default Layout;
