import Banner from './components/Banner';
import Blog from './components/Blog';
import Company from './components/Company';
import Header from './components/Header'
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
      <Blog/>
    </>
  );
}

export default App;
