import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Alert from "./components/Alert";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";

function App() {
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }
  return (
    <>
    <NoteState>
          <BrowserRouter>
            <Navbar/>
            <Alert alert={alert}/>
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home showAlert={showAlert}/>}/>
                <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
                <Route exact path="/register" element={<Register showAlert={showAlert}/>}/>
              </Routes>
            </div>
          </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
