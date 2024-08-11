import {useLocation} from 'react-router-dom';
import ItemListContainer from '../components/shared-components/ItemListContainer';

const Categoria = () => {
  const location = useLocation();
  const {name: categoryName} = location.state || {};

  return (
    <>
      <h1 className="text-3xl p-10 text-center md:text-5xl md:text-start">
        {categoryName}
      </h1>
      <ItemListContainer
        collectionName="products"
        condition={{field: 'category', operator: '==', value: categoryName}}
      />
    </>
  );
};

export default Categoria;
