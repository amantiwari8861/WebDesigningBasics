import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import Cards from './component/Cards';
import NotFound from './component/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path='/products' element={<Cards/>} />
        <Route path='/*' element={<NotFound/>} />
      </Route>
    </Routes>
  );
}

export default App;
