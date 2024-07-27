import {getCategories} from '../../../../services/asyncMock';
import useFetch from '../../../../hooks/useFetch';
import {NavLink} from 'react-router-dom';

const Categories = () => {
  const {data, loading, error} = useFetch(getCategories);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories: {error.message}</p>;

  const results =
    data && data.children_categories ? data.children_categories : [];

  return (
    <section className="navbar-center hidden md:flex">
      <ul className="menu menu-horizontal px-1 z-10">
        <li>
          <a>Nosotros</a>
        </li>
        <li>
          <details>
            <summary>Categorias</summary>
            <ul className="p-2 z-[10]">
              {results.map(categorie => (
                <li key={categorie.id}>
                  <NavLink
                    to={`/categorie/${categorie.id}`}
                    state={{id: categorie.id, name: categorie.name}}>
                    {categorie.name}
                  </NavLink>
                </li>
              ))}
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
