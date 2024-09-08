import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import LazyLoad from "./LazyLoad"
import FizzBuzz from "./FizzBuzz"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="menu">
          <ul>
            <li>
              <Link to="/lazyload">Lazy Load</Link>
            </li>
            <li>
              <Link to="/fizzbuzz">FizzBuzz</Link>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/lazyload" element={<LazyLoad />} />
            <Route path="/fizzbuzz" element={<FizzBuzz />} />
            <Route path="/" element={<LazyLoad />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
