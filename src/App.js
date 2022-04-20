import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './component/HomePage/Home';
import Invoices from './component/AboutPage/Invoices';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </div>
  );
}

export default App;
