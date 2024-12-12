//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Navbar from "./component/Navbar.jsx";
import Jumbotron from "./component/Jumbotron.jsx";
import Card from "./component/Card.jsx";
import Footer from "./component/Footer.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(
  <div>
      <Navbar/>
    <div className="container p-5"> 
      <Jumbotron/>
    </div>
    <div className="container-fluid"> 
      <div className="row"> 
        <div className="col-md-3"> 
          <Card image={"https://acortar.link/WznuSF"} title={"Bichón Maltés"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
        </div>
        <div className="col-md-3">
          <Card image={"https://acortar.link/caN8wH"} title={"Boxer Terrier"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
        </div>
        <div className="col-md-3">
          <Card image={"https://acortar.link/3jXwtn"} title={"Airedale Terrier"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
        </div>
        <div className="col-md-3">
          <Card image={"https://acortar.link/PBs94k"} title={"Shiba Inu"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
);