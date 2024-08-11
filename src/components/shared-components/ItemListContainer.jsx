import Item from './Item';
import useFetch from '../../hooks/useFetch';
import {useProviderGlobal} from '../../context/Provider';

const ItemListContainer = ({collectionName, condition}) => {
  const {search} = useProviderGlobal();
  const {data, loading, error} = useFetch({collectionName, condition, search});

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <div className="grid grid-cols-auto-fill-items gap-5">
      {data.map(product => (
        <div key={product.id}>
          <Item {...product} />
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
