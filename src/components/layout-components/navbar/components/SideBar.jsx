import {useCallback, useEffect, useRef} from 'react';
import {NavLink} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {MdOutlineClose} from 'react-icons/md';

const SideBar = ({results}) => {
  const sidebarRef = useRef(null);
  const openButtonRef = useRef(null);

  useEffect(() => {
    const keyHandler = ({keyCode}) => {
      if (sidebarRef.current && sidebarRef.current.checked && keyCode === 27) {
        sidebarRef.current.checked = false;
        openButtonRef.current.blur();
      }
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, []);

  const handleCategoryClick = useCallback(() => {
    if (sidebarRef.current) {
      sidebarRef.current.checked = false;
    }
  });

  return (
    <div className="drawer md:hidden">
      <input
        id="sidebar"
        type="checkbox"
        className="drawer-toggle"
        ref={sidebarRef}
      />
      <div className="drawer-content">
        {/* Page content */}
        <label
          htmlFor="sidebar"
          className="btn btn-circle btn-ghost drawer-button"
          ref={openButtonRef}>
          <FaBars size={24} />
        </label>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu menu-lg bg-base-200 text-base-content min-h-full w-80 p-4">
          <div className="flex justify-between pb-5">
            <span />
            <label
              htmlFor="sidebar"
              aria-label="close sidebar"
              className="btn btn-circle btn-ghost">
              <MdOutlineClose size={28} />
            </label>
          </div>
          {/* Sidebar content */}
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <a>Contacto</a>
          </li>
          <li>
            <details>
              <summary>Categorias</summary>
              <ul>
                {results.map(categorie => (
                  <li key={categorie.id}>
                    <NavLink
                      to={`/categorie/${categorie.id}`}
                      state={{id: categorie.id, name: categorie.categoryName}}
                      onClick={handleCategoryClick}>
                      {categorie.categoryName}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
