import React from 'react';
import './App.css';
import Contact from "./Components/Contact";
import ContactList from "./Components/ContactList";


/*const Contact1 = {
  image : "https://randomuser.me/api/portraits/women/50.jpg",
  name : "Priscilla Foster",
  online : "online",
};


const Contact2 = {
  image : "https://randomuser.me/api/portraits/men/4.jpg",
  name : "Jared Fields",
  online : "",
};

const Contact3 = {
  image : "https://randomuser.me/api/portraits/men/94.jpg",
  name : "Bradley Taylor",
  online : "online",
};*/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <ContactList/>
      </header>
    </div>
  );
}

export default App;