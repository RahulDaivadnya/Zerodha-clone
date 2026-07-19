/* eslint-disable no-unused-vars */
import React from "react";

function Hero() {
  return (
    <div className="container p-5 text-center mb-5" style={{width:"70%"}}>
      <div className="row">
        <img className="mb-3" src="media/images/homeHero.png" alt="hero image" />
        <h1 className="mt-5 mb-3 fs-3" style={{}}>Invest in everything</h1>
        <p style={{fontSize:"px"}}>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="btn btn-primary mt-4 fs-5" style={{width:"25%",margin:"0 auto"}}>Signup now</button>
      </div>
    </div>
  );
}

export default Hero;
