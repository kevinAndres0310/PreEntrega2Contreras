export const getProducts = async () => {
  try {
    const response = await fetch('/products.json');
    if (!response.ok) {
      throw new Error('No se pudo cargar la data de productos');
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    return [];
  }
};
