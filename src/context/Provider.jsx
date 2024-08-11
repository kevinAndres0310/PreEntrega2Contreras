import {createContext, useContext, useMemo, useState} from 'react';
import {toast} from 'react-toastify';

const GlobalProvider = createContext(undefined);

export default function Provider({children}) {
  // Manejador de SearchInput
  const [search, setSearch] = useState('');
  // Manejador de estado para Cart
  const [cartItems, setCartItems] = useState([]);
  // Estado para manejar stock de los productos

  const findCartItemIndex = (cartItems, newItem) => {
    return cartItems.findIndex(item => item.id === newItem.id);
  };

  const handleAddItemCart = newItem => {
    setCartItems(prevItems => {
      // Verificar si el producto ya está en el carrito
      const itemIndex = findCartItemIndex(cartItems, newItem);

      if (itemIndex === -1) {
        if (newItem.stock > 0) {
          toast.success('Agregado al carrito');
          return [
            ...prevItems,
            {...newItem, quantity: 1, stock: newItem.stock - 1},
          ];
        } else {
          toast.error('No hay stock disponible');
          return cartItems;
        }
      } else {
        const updatedItems = [...prevItems];
        const currentItem = updatedItems[itemIndex];

        if (currentItem.stock > 0) {
          updatedItems[itemIndex] = {
            ...updatedItems[itemIndex],
            quantity: updatedItems[itemIndex].quantity + 1,
            stock: updatedItems[itemIndex].stock - 1,
          };
          toast.success('Agregado al carrito');
          return updatedItems;
        } else {
          toast.error('No hay stock disponible');
          return cartItems;
        }
      }
    });
  };

  const handleRemoveItemCart = itemId => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    toast('Articulo removido');
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price * item.quantity),
      0,
    );
  };

  const memoizedValue = useMemo(
    () => ({
      cartItems,
      setCartItems,
      handleAddItemCart,
      handleRemoveItemCart,
      total: calculateSubtotal(),
    }),
    [cartItems],
  );

  let obj = {
    ...memoizedValue,
    search,
    setSearch,
  };

  return (
    <GlobalProvider.Provider value={obj}>{children}</GlobalProvider.Provider>
  );
}

export const useProviderGlobal = () => {
  const context = useContext(GlobalProvider);
  if (!context) {
    throw new Error('Error');
  }
  return context;
};
