import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Alert from "./components/Alert";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
    <NoteState>
          <BrowserRouter>
            <Navbar/>
            <Alert message="This is an alert box"/>
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
              </Routes>
            </div>
          </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
