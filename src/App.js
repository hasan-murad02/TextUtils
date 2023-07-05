import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [DarkMode, setDarkMode] = useState('light');
  const [alert, setalert] = useState(null)

  const showalert = (message,type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const ToggleMode = () => {
    if (DarkMode==='light')
    {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#45124D'
      showalert("Dark Mode has been Enabled","success")
    }
    else if (rgbToHex(document.body.style.backgroundColor) === '#121C4D')
    {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#45124D'
      showalert("Dark Mode has been Enabled","success")
    }
    else if (rgbToHex(document.body.style.backgroundColor) === '#4D1512')
    {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#45124D'
      showalert("Dark Mode has been Enabled","success")
    }
    else
    {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white'
      showalert("Light Mode has been Enabled","success")
    }
  }

  const rgbToHex = (rgb) =>{
    const parts = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete parts[0];
    for (let i = 1; i <= 3; ++i) {
      parts[i] = parseInt(parts[i]).toString(16).padStart(2, '0');
    }
    return '#' + parts.join('').toUpperCase();
  }

  const BlueToggle = () => {
    if (DarkMode==='light')
    {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#121C4D'
      showalert("Dark Blue has been Enabled","success")
    }
    else if (rgbToHex(document.body.style.backgroundColor) === '#45124D')
    {
      console.log('Hehe')
      setDarkMode('dark');
      document.body.style.backgroundColor = '#121C4D'
      showalert("Dark Blue has been Enabled","success")
    }
    else if (rgbToHex(document.body.style.backgroundColor) === '#4D1512')
    {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#121C4D'
      showalert("Dark Blue has been Enabled","success")
    }
    else
    {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white'
      showalert("Light Mode has been Enabled","success")
    }
  }

  const RedToggle = () => {
    if (DarkMode==='light')
    {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#4D1512'
      showalert("Dark Red has been Enabled","success")
    }
    else if (rgbToHex(document.body.style.backgroundColor) === '#121C4D')
    {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#4D1512'
      showalert("Dark Red has been Enabled","success")
    }
    else if (rgbToHex(document.body.style.backgroundColor) === '#45124D')
    {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#4D1512'
      showalert("Dark Red has been Enabled","success")
    }
    else
    {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white'
      showalert("Light Mode has been Enabled","success")
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Hasan"
          mode={DarkMode}
          toggle={ToggleMode}
          blue={BlueToggle}
          red={RedToggle}
        />
        <Alert alert={alert} />
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/" element={<div className="container"><TextForm heading="TextUtils" mode={DarkMode} showalert={showalert}/></div>} /> */}
          <div className="container">
            <TextForm heading="TextUtils" mode={DarkMode} showalert={showalert}/>
          </div>
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
