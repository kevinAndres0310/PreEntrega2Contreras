import {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {CardWidget, SideBar, Categories} from './components';
import {useNavigate} from 'react-router-dom';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSideBar = () => {
    setOpen(!open);
  };

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({keyCode}) => {
      if (!open || keyCode !== 27) return;
      setOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <nav className="navbar fixed top-0 left-0 right-0 bg-base-200">
      <section className="navbar-start">
        {/* SideBar */}
        <div>
          <button
            role="button"
            className="btn btn-circle btn-ghost md:hidden"
            onClick={toggleSideBar}>
            <FaBars size={28} />
          </button>
          {open && (
            <div
              className="bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm z-10"
              onClick={toggleSideBar}
            />
          )}
          <SideBar openSidebar={open} closeSidebar={toggleSideBar} />
        </div>
        <a
          onClick={() => navigate('/')}
          className="btn btn-ghost text-xl hidden md:flex">
          TelePhone
        </a>
      </section>
      <Categories />
      <CardWidget />
    </nav>
  );
};

export default NavBar;
