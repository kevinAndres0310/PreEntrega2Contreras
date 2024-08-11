import React from 'react';
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

const CartItem = props => {
  const {handleRemoveItemCart} = useProviderGlobal();
  const {id, name, img, quantity, stock, price} = props;
  return (
    <div className="flex flex-col md:flex-row w-full mb-5">
      <div className="overflow-hidden rounded-md w-40 max-h-32">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-between p-3 w-full gap-3">
        <h2 className="font-bold">{name}</h2>
        <div className="flex flex-col md:flex-row justify-betweed gap-2">
          <div className="flex justify-between gap-8">
            <p>Cantidad: {quantity}</p>
            <button
              className="text-blue-500"
              onClick={() => handleRemoveItemCart(id)}>
              Eliminar
            </button>
          </div>
          <p className="font-semiboldbold">
            {formatter.format(price * quantity)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
