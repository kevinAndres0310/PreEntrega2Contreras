import {toast} from 'react-toastify';
import CartItem from '../components/shared-components/CartItem';
import {useProviderGlobal} from '../context/Provider';
import {useNavigate} from 'react-router-dom';

const formatter = new Intl.NumberFormat('es-AR', {
  currencyDisplay: 'code',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const Cart = () => {
  const {cartItems, total} = useProviderGlobal();
  const navigate = useNavigate();

  const navigateCheckout = items => {
    if (items) {
      navigate(`/checkout`);
    } else {
      toast.error('Agrega un articulo');
    }
  };

  return (
    <div className="h-full">
      <h1 className="text-3xl mb-5">Productos</h1>
      {cartItems.map(item => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="fixed bottom-0 left-0 right-0 h-1/5  flex flex-col gap-5 items-center justify-center p-4 rounded-t-lg shadow-2xl bg-base-300">
        <h2 className="font-bold text-xl text-center">
          {`Total: $${formatter.format(total)}`}
        </h2>
        <button
          className="btn btn-secondary"
          onClick={() => navigateCheckout(cartItems.length > 0)}>
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Cart;
