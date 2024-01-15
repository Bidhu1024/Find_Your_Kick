

import { Route, Routes } from "react-router-dom"
import Login from './Components/Screens/Login/Login';
import Dashboard from "./Components/Screens/Dashboard/Dashboard"
import Catalog from "./Components/Screens/Pages/Catalog/Catalog";
import Details from "./Components/Screens/Pages/Details/Details";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/productCatalog" element={<Catalog/>} />
        <Route exact path="/details" element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App;
