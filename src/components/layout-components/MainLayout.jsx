import {Outlet} from 'react-router-dom';
import Footer from './footer/Footer';
import NavBar from './navbar/NavBar';

const MainLayout = () => {
  return (
    <main className="flex flex-col h-full">
      <NavBar />
      <section className="flex-grow  pt-28 px-5 sm:px-14 xl:px-28">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default MainLayout;
