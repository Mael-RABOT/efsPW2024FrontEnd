import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import MainPage from "./pages/mainPage"
import UserQRCode from "./pages/userQRCode"
import Certification from "./pages/certification"
import Appointment from "./pages/appointment";

import { Frame } from "./screens/Frame"

function App() {
  return (
    <Router>
      <header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/preview" element={<Frame />}/>
        <Route path="/userQrCode" element={<UserQRCode />}/>
        <Route path="/certification" element={<Certification />}/>
        <Route path="/appointment" element={<Appointment />}/>
      </Routes>
    </Router>
  )
}

export default App
