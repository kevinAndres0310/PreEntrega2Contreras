import {useState, useEffect} from 'react';
import {db} from '../services/firebase';
import {
  collection,
  endAt,
  getDocs,
  limit,
  orderBy,
  query,
  startAt,
  where,
} from 'firebase/firestore';

const useFetch = ({collectionName, condition, search}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let q;

        // Search busca por el valor que se le coloque en el Input de navBar
        if (search && search.trim().length > 0) {
          q = query(
            collection(db, collectionName),
            orderBy('name_lowercase'),
            startAt(search.trim().toLowerCase()),
            endAt(search.trim().toLowerCase() + '\uf8ff'),
            limit(20),
          );
        } else if (condition) {
          q = query(
            collection(db, collectionName),
            where(condition.field, condition.operator, condition.value),
          );
        } else {
          q = collection(db, collectionName);
        }

        const querySnapshot = await getDocs(q);

        const result = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName, condition, search]);

  return {data, loading, error};
};

export default useFetch;
