import {HiArrowLeft} from 'react-icons/hi';
import {useNavigate} from 'react-router-dom';
import {useProviderGlobal} from '../context/Provider';
import {useState} from 'react';
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from 'firebase/firestore';
import {db} from '../services/firebase';
import {toast} from 'react-toastify';
import {FaCheckCircle} from 'react-icons/fa';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);
  const {cartItems, setCartItems, total} = useProviderGlobal();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
  });
  const navigate = useNavigate();

  const handleChange = e => {
    const {name, value} = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const objOrder = {
        buyer: form,
        items: cartItems,
        totalQuantity: cartItems.length,
        total,
        date: new Date(),
      };

      const ids = cartItems.map(item => item.id);

      const productRef = collection(db, 'products');

      const productsAddedFromFirestore = await getDocs(
        query(productRef, where(documentId(), 'in', ids)),
      );
      const {docs} = productsAddedFromFirestore;

      const outOfStock = [];

      const batch = writeBatch(db);

      docs.forEach(doc => {
        const dataDoc = doc.data();
        const stockDB = dataDoc.stock;
        const productAddedToCart = cartItems.find(prod => prod.id === doc.id);
        const productQuantity = productAddedToCart?.quantity;
        if (stockDB >= productQuantity) {
          batch.update(doc.ref, {stock: stockDB - productQuantity});
        } else {
          outOfStock.push({id: doc.id, ...dataDoc});
        }
      });
      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, 'orders');
        const orderAdded = await addDoc(orderRef, objOrder);
        toast(`El id de su orden es ${orderAdded.id}`);
        setOrderCreated(true);
      } else {
        toast('hay productos fuera de stock');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (orderCreated) {
    return (
      <div className="flex flex-col gap-5 justify-center items-center w-screen h-screen">
        <FaCheckCircle color="#4CAF50" size={100} />
        <h1 className="text-center font-bold text-2xl">
          Se creo la orden con exito
        </h1>
        <button
          className="btn btn-secondary"
          onClick={() => {
            setCartItems([]);
            navigate('/', {replace: true});
          }}>
          Volver
        </button>
      </div>
    );
  }

  return (
    <>
      <button onClick={() => navigate(-1)} className="btn btn-link ">
        <HiArrowLeft className="mr-2" /> Volver
      </button>
      <h1 className="text-center text-3xl font-bold">checkout</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex flex-col gap-5 px-10 my-5">
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            type="text"
            name="firstName"
            className="grow"
            placeholder="Daisy"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          Apellido
          <input
            type="text"
            name="lastName"
            className="grow"
            placeholder="Rodriguez"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          Telefono
          <input
            type="tel"
            name="phone"
            className="grow"
            placeholder="3513118754"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          Direccion
          <input
            type="text"
            name="address"
            className="grow"
            placeholder="av. valladolid 1520"
            value={form.address}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="btn btn-secondary">
          Generar orden
        </button>
      </form>
    </>
  );
};

export default Checkout;
