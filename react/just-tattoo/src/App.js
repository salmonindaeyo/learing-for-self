import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattoPost';
import tattoos from './data/tatoos';
import { useState } from 'react';



function App() {

    const [text, setText] = useState("ไม่ต้องห่วงฉัน");

    const tattooElements = tattoos.map((tattoo,index) => {
      return <TattooItem key={index} tattoo={tattoo} />;
    })

  return (
    <div className="app">

       <AppHeader/>

        <div className="app-grid">

          {tattooElements}
       
        </div>
        <TattooPost/>
    </div>
  );
}

export default App;
