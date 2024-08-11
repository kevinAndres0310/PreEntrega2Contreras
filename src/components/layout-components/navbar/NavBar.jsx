import {useCallback} from 'react';
import {CardWidget, SideBar, Categories} from './components';
import {useNavigate} from 'react-router-dom';
import SearchBar from '../../shared-components/SearchBar';

const data = [
  {id: 'accesorios-celular', categoryName: 'Accesorios para celulares'},
  {id: 'repuestos-celular', categoryName: 'Repuestos para celulares'},
  {id: 'celulares', categoryName: 'Celulares y smartphones'},
];

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigateHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-base-200">
      <section className="navbar-start">
        <a
          onClick={handleNavigateHome}
          className="btn btn-ghost text-xl hidden md:flex">
          TelePhone
        </a>
        <SideBar results={data} />
      </section>
      <div className="flex gap-3">
        <Categories results={data} />
        <SearchBar />
      </div>
      <CardWidget />
    </nav>
  );
};

export default NavBar;
