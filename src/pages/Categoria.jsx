import {useLocation, useParams} from 'react-router-dom';
import ItemListContainer from '../components/shared-components/ItemListContainer';
import {getItemsByCategories} from '../services/asyncMock';

const Categoria = () => {
  const {id} = useParams();
  const location = useLocation();
  const {name: categoryName} = location.state || {};

  return (
    <>
      {categoryName && (
        <h1 className="text-3xl p-10 text-center md:text-5xl md:text-start">
          {categoryName}
        </h1>
      )}
      <ItemListContainer fetchFunction={getItemsByCategories} params={id} />
    </>
  );
};

export default Categoria;
