

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./component/home/home";
import Viewproduct from "./component/viewproduct/viewproduct";


function App() {
  return (
    <div className="FurnitureDesignHomePage">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewproduct" element={<Viewproduct/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
