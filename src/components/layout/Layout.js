import Header from './Header';

import './Layout.css';

function Layout({ children, title, isLogged }) {
  return (
    <div className="layout">
      <Header className="layout-header bordered" isLogged={isLogged} />
      <main className="layout-main bordered">
        <h2 className="layout-title bordered">{title}</h2>
        <section className="layout-content">{children}</section>
      </main>
      <footer className="layout-footer bordered">© 2022 Keepcoding</footer>
    </div>
  );
}

export default Layout;
