import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import "./App.css";
import Works from "./components/Work/Works";
import Certs from "./components/Certs/Certs";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Services />
      <Works />
      <Certs />
      <Skills />
      <Contact />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
