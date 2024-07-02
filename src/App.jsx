import Footer from './components/layout-components/footer/Footer';
import NavBar from './components/layout-components/navbar/NavBar';
import ItemListContainer from './components/shared-components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center gap-5 container">
        <ItemListContainer title="Bienvenidos a Luz" />
        <ItemListContainer title="Welcome to Aromas" />
      </div>
      <Footer />
    </>
  );
}

export default App;
