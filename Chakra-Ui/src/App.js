
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/Home";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Upload from "./components/Upload";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

function App() {
  return (
<Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/videos" element={<Videos/>}/>
    <Route path="/Upload" element={<Upload/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/logIn" element={<LogIn/>}/>
  </Routes>
  <Footer/>
</Router>
  )
}

export default App;
