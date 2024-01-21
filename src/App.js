import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import MainPage from "./pages/mainPage"
import UserQRCode from "./pages/userQRCode";

function App() {
  return (
    <Router>
      <header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/userQrCode" element={<UserQRCode />}/>
      </Routes>
    </Router>
  );
}

export default App;
