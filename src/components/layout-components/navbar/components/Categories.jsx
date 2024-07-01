import React from 'react';

const Categories = () => {
  return (
    <section className="navbar-center hidden md:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <a>Nosotros</a>
        </li>
        <li>
          <details>
            <summary>Categorias</summary>
            <ul className="p-2">
              <li>
                <a>Velas</a>
              </li>
              <li>
                <a>Difusor</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Contacto</a>
        </li>
      </ul>
    </section>
  );
};

export default Categories;
