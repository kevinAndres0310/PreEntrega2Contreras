import {BiSearch} from 'react-icons/bi';
import {NavLink} from 'react-router-dom';

const Categories = ({results}) => {
  return (
    <section className="navbar-center hidden md:flex">
      <ul className="menu menu-horizontal px-1 z-10">
        <li>
          <details>
            <summary>Categorias</summary>
            <ul className="w-28">
              {results.map(categorie => (
                <li key={categorie.id}>
                  <NavLink
                    className="p-3"
                    to={`/categorie/${categorie.id}`}
                    state={{
                      id: categorie.id,
                      name: categorie.categoryName,
                    }}>
                    {categorie.categoryName}
                  </NavLink>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
    </section>
  );
};

export default Categories;
