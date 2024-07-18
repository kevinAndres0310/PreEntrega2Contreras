import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {HiOutlineShoppingCart, HiArrowLeft} from 'react-icons/hi2';

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Añade esta verificación
  const product = location.state;

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center hover:text-gray-800">
        <HiArrowLeft className="mr-2" /> Volver
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Imagen del producto */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1544472991-1324437fe348?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={product.title}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Detalles del producto */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-2xl font-semibold mb-4">${product.price}</p>
            <p className="mb-6">{product.details}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <button className="btn btn-lg">
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
