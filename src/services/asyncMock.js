import axios from 'axios';
// Sin usar esto no se esta usando para nada
const API_URL = 'https://api.mercadolibre.com';

export const getAllItems = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/sites/MLA/search?category=MLA1051`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories/MLA1051`);
    return response.data;
  } catch (error) {
    console.error('Error al traer categorias ', error);
    throw error;
  }
};

export const getItemsByCategories = async idCategorie => {
  try {
    const response = await axios.get(
      `${API_URL}/sites/MLA/search?category=${idCategorie}`,
    );
    return response.data;
  } catch (error) {
    console.log('Error al cargar items de categoria', error);
    throw error;
  }
};
