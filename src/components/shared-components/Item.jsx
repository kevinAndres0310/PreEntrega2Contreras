import {HiOutlineShoppingCart} from 'react-icons/hi2';
import {useNavigate} from 'react-router-dom';

const Item = props => {
  const {title, price, id, details} = props;
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${id}`, {state: {id, title, price, details}});
  };

  return (
    <div className="p-4 rounded-xl bg-base-200 shadow-xl flex flex-col h-full">
      <figure className="w-full mb-4">
        <img
          src="https://images.unsplash.com/photo-1544472991-1324437fe348?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="velas"
          className="w-full h-48 object-cover rounded-lg"
        />
      </figure>
      <div className="flex flex-col flex-grow">
        <h2 className="card-title mb-2">{title}</h2>
        <p className="mb-4 mt-auto">${price}</p>
        <div className="flex gap-4 justify-between mt-auto">
          <button
            className="btn btn-outline flex-1"
            onClick={handleViewDetails}>
            Mas detalles
          </button>
          <button className="btn bg-neutral-900 text-white">
            <HiOutlineShoppingCart size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
