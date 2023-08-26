 
import './App.css';
import About from './components/About';
 
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
   <>  
  <Navbar title="TextUtils" about="About Us"/>

  <div className="container">
  <TextForm heading="Enter Text Below to analyze"/>
  </div>
  
  <div className="container">
  <About data="About Us" />
  </div>
   

   </>
  );
}

export default App;
