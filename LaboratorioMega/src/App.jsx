
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Project from './components/Projects/Project';
import Service from './components/services/Service';
import Client from './components/Client/Client';
import Home from './components/Home/Home'; 
import WhatsIcon from './components/APIs/WhatsIcon'; 

function App() {
  return (
    <>
      <Header />
      <Home />
      <Service />
      <Project />
      <Client /> 
      <Contact />
      <Footer />
      <WhatsIcon 
        phoneNumber="5511991191332" 
        message="Olá, Laboratório Mega. Vi no seu site e gostaria de saber mais sobre ensaios de concreto."
      />
    </>
  );
}

export default App;