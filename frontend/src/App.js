
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
  // Router,
} from "react-router-dom";
import Task3 from "./pages/task3/Task_3";
import Task1 from "./pages/task1/Task_1"
import TASK7 from "./pages/task7/Task_7"
function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/task7"  element={<Task3/>}/>
  <Route path="/task1"  element={<Task1/>}/>
  <Route path="/"  element={<TASK7/>}/>

    
  </Routes>
  </BrowserRouter>
   
  );
}

export default App;
