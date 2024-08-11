import {HiOutlineShoppingCart} from 'react-icons/hi2';
import {useNavigate} from 'react-router-dom';
import {useProviderGlobal} from '../../context/Provider';

const formatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  currencyDisplay: 'code',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
};

const Item = item => {
  const {id, name, img, price, description, stock} = item;
  const navigate = useNavigate();
  const {handleAddItemCart} = useProviderGlobal();

  const priceFormatter = formatter.format(price);

  const handleViewDetails = () => {
    navigate(`/product/${id}`, {
      state: item,
    });
  };

  return (
    <div className="p-4 rounded-xl bg-base-200 shadow-xl flex flex-col h-full">
      <figure className="w-full mb-4">
        <img
          src={img}
          alt="velas"
          className="w-full h-48 object-cover rounded-lg"
        />
      </figure>
      <div className="flex flex-col flex-grow">
        <a className="cursor-pointer text-start card-title mb-2 text-md">
          {truncateText(name, 50)}
        </a>

        <span className="mb-4 mt-auto">{priceFormatter}</span>

        <div className="flex gap-4 justify-between mt-auto">
          <button
            className="btn btn-outline flex-1"
            onClick={handleViewDetails}>
            Mas detalles
          </button>
          <button
            className="btn bg-neutral-900 text-white"
            onClick={() => handleAddItemCart(item)}>
            <HiOutlineShoppingCart size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
