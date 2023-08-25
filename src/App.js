 
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
   <>  
  <Navbar title="TextUtils" about="About As"/>
  <div className="container">
  <TextForm heading="Enter Text Below to analyze"/>
  </div>
   
   

   </>
  );
}

export default App;
