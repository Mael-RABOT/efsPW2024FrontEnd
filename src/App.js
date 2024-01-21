import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import MainPage from "./pages/mainPage"
import UserQRCode from "./pages/userQRCode"
import Certification from "./pages/certification"

function App() {
  return (
    <Router>
      <header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/userQrCode" element={<UserQRCode />}/>
        <Route path="/certification" element={<Certification />}/>
      </Routes>
    </Router>
  );
}

export default App;
