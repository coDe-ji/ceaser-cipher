import React from "react"
import { Outlet, Link } from "react-router-dom"
import "../App.css"

function Main() {
  return (
    <div className="main">
      <div>
        <button className="link0">
          <Link className="link" to="/encode">
            Encode
          </Link>
        </button>
        <button className="link0">
          <Link className="link" to="/decode">
            Decode
          </Link>
        </button>
        <Outlet />
      </div>
    </div>
  )
}

export default Main
