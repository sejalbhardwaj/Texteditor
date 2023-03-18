
import './App.css';
import Navbar from './Components/Navbar.js';
import Textbox from './Components/Textbox.js';
function App() {
  return (<>
  
  <Navbar title="Texteditor" about="About us"></Navbar>
  <div className="container my-3">
  <Textbox heading=" Enter your text here"/> 
  </div>
  
  </>
  );
}

export default App;
