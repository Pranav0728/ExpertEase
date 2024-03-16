import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ContactForm from "./components/contactform";
import { BrowserRouter , Route ,Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <BrowserRouter>
        <Header />
        <Routes >
          <Route  index path="/" element={ <Hero />} />
        </Routes>
        <Footer />
        
        <Routes >
          <Route path='/ContactUs' element={<ContactForm/>}/>
        </Routes>
       
      </BrowserRouter> 
      <ButtonGradient />

      </div>


    </>
  );
};

export default App;
