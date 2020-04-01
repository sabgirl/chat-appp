import React from 'react';
import Navbar from './Components/Navbar';
import QuoteCard from './Components/QuoteCard';

function App() {
  return (
    <div className="App"> 
      <Navbar/>
      <QuoteCard/>
      <QuoteCard/>
      <QuoteCard/>
    </div>
  );
}

export default App;
