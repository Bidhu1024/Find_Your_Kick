

import { Route, Routes } from "react-router-dom"
import Login from './Components/Screens/Login/Login';
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
