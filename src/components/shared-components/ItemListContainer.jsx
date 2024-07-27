import Item from './Item';
import useFetch from '../../hooks/useFetch';

const ItemListContainer = ({fetchFunction, params}) => {
  const {data, loading, error} = useFetch(fetchFunction, params);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  const results = data ? data.results : [];

  return (
    <div className="grid grid-cols-auto-fill-items gap-5">
      {results.map(product => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemListContainer;
