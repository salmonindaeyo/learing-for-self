import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattoPost';
function App() {

  const tattoo1 = {
    title : "แขนเท่ๆ" ,
    thumbnailUrl: "/images/tattoo-01-small.jpg"
  }

  return (
    <div className="app">

       <AppHeader/>

        <div className="app-grid">
           <TattooItem tattoo={tattoo1}/>
       
        </div>
        <TattooPost/>
    </div>
  );
}

export default App;
