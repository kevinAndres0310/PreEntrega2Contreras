import {BrowserRouter} from 'react-router-dom';
import Router from './routes';
import Provider from './context/Provider';
import 'react-toastify/dist/ReactToastify.css';

import {ToastContainer} from 'react-toastify';

const configToastDefault = {
  position: 'bottom-center',
  theme: 'dark',
  hideProgressBar: true,
  autoClose: 2000,
};

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Router />
      </Provider>
      <ToastContainer {...configToastDefault} />
    </BrowserRouter>
  );
}

export default App;
