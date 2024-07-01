import Footer from './components/layout-components/footer/Footer';
import NavBar from './components/layout-components/navbar/NavBar';
import ItemListContainer from './components/shared-components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer title="Bienvenidos a Luz & Aromas" />
      <Footer />
    </>
  );
}

export default App;
