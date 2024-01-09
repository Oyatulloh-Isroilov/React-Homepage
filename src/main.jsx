import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./header"
import Hero from "./hero"
import Footer from "./footer"
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Footer />
  </React.StrictMode>,
)
