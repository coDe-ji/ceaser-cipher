import "./App.css"
import { Link, Routes, Route, Outlet } from "react-router-dom"

import Main from "./components/Main"
import Encode from "./components/Encode"
import Decode from "./components/Decode"
import Help from "./components/Help"

function App() {
  return (
    <>
      <div className="app">
        <div className="head">
          <div className="logo">
            <h1>DE-Cipher</h1>
          </div>
          <div className="homeB">
            <button className="link0">
              <Link className="link" to="/main">
                <h4>Home</h4>
              </Link>
            </button>
          </div>
          <div className="helpB">
            <button className="link0">
              <Link className="link" to="/help">
                <h4>Help</h4>
              </Link>
            </button>
          </div>
          <Outlet />
        </div>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="encode" element={<Encode />} />
          <Route path="decode" element={<Decode />} />
          <Route path="help" element={<Help />} />
        </Routes>
        <div id="footer">
          <p>Designed by Co-DEji. 2023.</p>
        </div>
      </div>
    </>
  )
}

export default App
