import {AiOutlineShoppingCart} from 'react-icons/ai';
import {useProviderGlobal} from '../../../../context/Provider';
import {NavLink} from 'react-router-dom';

const formatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  currencyDisplay: 'code',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const CardWidget = () => {
  const {cartItems, total} = useProviderGlobal();

  return (
    <section className="navbar-end">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <div className="indicator">
            <AiOutlineShoppingCart size={24} />
            <span className="badge badge-sm indicator-item">
              {cartItems.length}
            </span>
          </div>
        </div>
        <div className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow">
          <div className="card-body">
            <span className="text-lg font-bold">{`${cartItems.length} Articulos`}</span>
            <span className="text-info">{`Subtotal: ${formatter.format(total)}`}</span>
            <div className="card-actions">
              <NavLink to="/cart" className="btn btn-primary btn-block">
                Ver carrito
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardWidget;
