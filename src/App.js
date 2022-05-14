import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error404 } from "./components/Error";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Departments from "./containers/Departments";
import Employees from "./containers/Employees";
import Managers from "./containers/Managers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/employees" element={<Employees />}/>
          <Route exact path="/managers" element={<Managers />}/>
          <Route exact path="/departments" element={<Departments />}/>
          <Route path="/*" element={<Error404 />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
