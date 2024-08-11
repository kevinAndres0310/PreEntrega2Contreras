import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {HiOutlineShoppingCart, HiArrowLeft} from 'react-icons/hi2';
import {useProviderGlobal} from '../context/Provider';

const ProductDetails = () => {
  const {handleAddItemCart} = useProviderGlobal();
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state;

  if (!product) {
    return <div>Producto no encontrado</div>;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="btn btn-link ">
        <HiArrowLeft className="mr-2" /> Volver
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Imagen del producto */}
        <div className="md:w-1/2">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Detalles del producto */}
        <div className="md:w-1/2 flex flex-col gap-10">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold mb-4">
              {product.priceFormatter}
            </p>
            <p className="mb-6">{product.description}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <button
              className="btn btn-lg"
              onClick={() => handleAddItemCart(product)}>
              <HiOutlineShoppingCart size={30} />
              Agregar al carrito
            </button>
            <button className="btn btn-lg">Comprar ahora</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
