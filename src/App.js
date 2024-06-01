import React, {useState} from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { Routes,Route, BrowserRouter } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState("light");
  const [clr, setClr] = useState("white");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  let redClick = () => {
    setClr("red");

    if(mode === "light")
    {
      document.body.style.backgroundColor = "#b5565e";
    }
    else{
      document.body.style.backgroundColor = "#620b13";
    }
  }

  let greenClick = () => {
    setClr("green");

    if(mode === "light")
    {
      document.body.style.backgroundColor = "#62b890";
    }
    else{
      document.body.style.backgroundColor = "#0b4e2f";
    }
  }

  let yellowClick = () => {
    setClr("yellow");

    if(mode === "light")
    {
      document.body.style.backgroundColor = "#c2a85c";
    }
    else{
      document.body.style.backgroundColor = "#91700f";
    }
  }

  let toggleMode = () => {
    if(mode === "light")
    {
      setMode("dark");
      if(clr === "white")
      {
        document.body.style.backgroundColor = "#0b1d39";
      }
      else if(clr === "green")
      {
        document.body.style.backgroundColor = "#0b4e2f";
      }
      else if(clr === "red")
      {
        document.body.style.backgroundColor = "#620b13";
      }
      else if(clr === "yellow")
      {
        document.body.style.backgroundColor = "#91700f";
      }
      showAlert("Dark Mode is enabled !!","success");
      document.title = "TextChange - Dark Mode";
      setTimeout(() => {
        document.title = "TextChange"
      }, 1500);
    }
    else{
      setMode("light");
      if(clr === "white")
      {
        document.body.style.backgroundColor = "white";
      }
      else if(clr === "green")
      {
        document.body.style.backgroundColor = "#62b890";
      }
      else if(clr === "red")
      {
        document.body.style.backgroundColor = "#b5565e";
      }
      else if(clr === "yellow")
      {
        document.body.style.backgroundColor = "#c2a85c";
      }
      showAlert("Light Mode is enabled !!","success");
      document.title = "TextChange - Light Mode";
      setTimeout(() => {
        document.title = "TextChange"
      }, 1500);
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title="TextChange" redClick={redClick} greenClick={greenClick} yellowClick={yellowClick} clr={clr} mode={mode} modeChange={toggleMode} showAlert={showAlert} />
      <Alert alert={alert} />
      <div className="container my-4" >
      <Routes>
          <Route path="/" element={<Textform heading="Enter text below to analyze" mode={mode} showAlert={showAlert} />} />
          <Route path='/about' element={<About mode={mode} />}/>
          <Route path='/:id' element={<p>Dynamic route</p>}/>
      </Routes>
      </div>
      </BrowserRouter>
      
    </>
  );
}

export default App;
