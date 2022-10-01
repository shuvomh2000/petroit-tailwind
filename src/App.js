import Banner from './components/Banner';
import Blog from './components/Blog';
import Company from './components/Company';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header'
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Supplier from './components/Supplier';


function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <Banner/>
      <Supplier/>
      <Service/>
      <Company/>
      <Logo/>
      <Blog/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
