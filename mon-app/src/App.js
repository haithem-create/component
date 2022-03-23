import logo from './logo.svg';
import './App.css';
import Adress from "./component/Profile/Address"
import ProfilePhoto from "./component/Profile/ProfilePhoto"
import FullName from './component/Profile/FullName';



function App() {
  return (
    <div className="App">
      <header className="App-header">

        <ProfilePhoto pict = "leo.jpg"/>

        <br/>
        <FullName name ="Leonardo"/>
        <br/>
        <Adress adress="13 California"/>

        
      </header>
    </div>
  );
}

export default App;
