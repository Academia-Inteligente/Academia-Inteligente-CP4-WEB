import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import CalculadoraIMC from './pages/Calculoimc';


function App() {
  return (
    <main>
      <BrowserRouter>
      <Navbar />
      <AppRoutes />
      </BrowserRouter>
    </main>
  );
}

export default App;
