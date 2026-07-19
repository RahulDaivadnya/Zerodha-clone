import React from "react";

function Awards() {
  return (
    <div className="container p-5 ">
      <div className="row">
        <div className="col-6">
          <img src="media/images/largestBroker.svg" />
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Largest stock broker in India</h1>

          <p className=" mb-5 fs-6">
            12+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li style={{ padding: "5px" }}>Futures and Options</li>
                <li style={{ padding: "5px" }}>Stocks & IPOs</li>
                <li style={{ padding: "5px" }}>Commodity derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li style={{ padding: "5px" }}>Direct mutual funds</li>
                <li style={{ padding: "5px" }}>Currency derivatives</li>
                <li style={{ padding: "5px" }}>Bonds and Govt. Securities</li>
              </ul>
            </div>
            <img src="media/images/pressLogos.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
