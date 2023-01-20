
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Form from "./components/Form";
import Table from './components/Table';

function App() {
  return (
   
   <>
   <Router>
  <Routes>
    <Route path="/" element={<Form/>}/>
    <Route path='/page2' element={<Table/>}/>
   </Routes>
   </Router>

   </>
  );
}

export default App;
