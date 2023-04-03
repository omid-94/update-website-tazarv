import logo from './logo.svg';
import './App.css';
import SideNav from './Template/SideNav'
import Routing from './Route/Routing';

function App() {
  return (
    <div className="App">
      <div className='SideBarContainer'>
        <SideNav />
      </div>
      <div className='ContentContainer'>
        <div className='Content'>
          <Routing />
        </div>
      </div>
    </div>
  );
}

export default App;
