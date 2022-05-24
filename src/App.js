
import './App.css';
import Navigation from './components/Navigation';
import Desciption from './contents/Description/Description';
import PPSection from './contents/ProfilePictureSection/PPSection';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <PPSection/>
      <Desciption/>
    </div>
  );
}

export default App;
