import ItemListContainer from '../components/shared-components/ItemListContainer';
import {getAllItems} from '../services/asyncMock';

const Home = () => {
  return (
    <>
      <ItemListContainer fetchFunction={getAllItems} />
    </>
  );
};

export default Home;
