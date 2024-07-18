import {MdOutlineClose} from 'react-icons/md';

const SideBar = ({openSidebar, closeSidebar}) => {
  return (
    <div
      className={`flex flex-col min-h-screen bg-base-300 z-10 fixed top-0 left-0 transition-all duration-500 ease-in-out ${
        openSidebar ? 'w-4/5' : 'w-0'
      }`}>
      <button
        className={`btn btn-circle ml-auto m-6 ${!openSidebar && 'hidden'}`}
        onClick={closeSidebar}>
        <MdOutlineClose size={28} />
      </button>
      <ul className={`${!openSidebar && 'hidden'}`}>
        <li className="btn btn-lg btn-ghost btn-block rounded-none">
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
  );
};

export default SideBar;
