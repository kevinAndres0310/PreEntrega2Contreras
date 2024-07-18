import {AiOutlineShoppingCart} from 'react-icons/ai';

const CardWidget = () => {
  return (
    <section className="navbar-end">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <div className="indicator">
            <AiOutlineShoppingCart size={24} />
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </div>
        <div className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow">
          <div className="card-body">
            <span className="text-lg font-bold">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardWidget;
