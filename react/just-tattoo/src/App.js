import logo from './logo.svg';
import './App.css';
import AppHeader from './AppHeader';
function App() {

  // const textInput = <input type="text"/>;
  // const okButton = (<button>สักหน่อยปะละ</button>);

  return (
    <div className="app">
      
       <AppHeader/>

        <div className="app-grid">
            <div className='tattoo-item'>
              <img src="/images/tattoo-01-small.jpg" />
              <h4> ต่ายน้อย 1 </h4>
            </div>
            <div className='tattoo-item'>
              <img src="/images/tattoo-02-small.jpg" />
              <h4> ต่ายน้อย 2 </h4>
            </div>
            <div className='tattoo-item'>
              <img src="/images/tattoo-03-small.jpg" />
              <h4> ต่ายน้อย 3 </h4>
            </div>
            <div className='tattoo-item'>
              <img src="/images/tattoo-04-small.jpg" />
              <h4> ต่ายน้อย 4 </h4>
            </div>

        </div>
    </div>
  );
}

export default App;
