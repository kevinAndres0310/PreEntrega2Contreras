import {useEffect, useState} from 'react';
import Item from './Item';
import {getProducts} from '../../services/products';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fecthProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };

    fecthProducts();
  }, []);

  return (
    <div className="grid grid-cols-auto-fill-items gap-5">
      {products.map(product => (
        <Item
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          details={product.details}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
