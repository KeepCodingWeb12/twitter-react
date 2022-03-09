import Header from './Header';

function Layout({ children, title }) {
  return (
    <div>
      <Header />
      <main>
        <h2>{title}</h2>
        <section>{children}</section>
      </main>
      <footer>© 2022 Keepcoding</footer>
    </div>
  );
}

export default Layout;
