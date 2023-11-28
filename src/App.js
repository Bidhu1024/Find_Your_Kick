

import { Route, Routes } from "react-router-dom"
import Login from './Components/Screens/Login/Login';
import Dashboard from "./Components/Screens/Dashboard/Dashboard"
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
