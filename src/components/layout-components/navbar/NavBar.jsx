import {CardWidget, Categories} from './components';

const NavBar = () => {
  return (
    <nav className="navbar bg-base-200">
      <section className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a>Nosotros</a>
            </li>
            <li>
              <a>Categorias</a>
              <ul className="p-2">
                <li>
                  <a>Velas</a>
                </li>
                <li>
                  <a>Difusores</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contacto</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl hidden md:flex">Luz & Aromas</a>
      </section>
      <Categories />
      <CardWidget />
    </nav>
  );
};

export default NavBar;
