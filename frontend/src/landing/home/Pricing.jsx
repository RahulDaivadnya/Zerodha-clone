import React from "react";
import "../../App.css";
function Pricing() {
  return (
    <div className="container p-5 my-0">
      <div className="row p-5">
        <div className="col-5">
          <h1 className="f-3">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            style={{ textDecoration: "none", fontWeight: "600" }}
            href=""
            className="icon-link icon-link-hover link "
          >
            See Pricing
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-7 p-0 text-center">
          <div className="row">
            <div className="col-4 ">
              <div className="row">
                <div className="col-6 text-center">
                  <img
                    className=""
                    src="media/images/pricing0.svg"
                    style={{ width: "140px", margin: "0 auto" }}
                  />
                </div>
                <div className="col-6 text-center ">
                  <p
                    style={{
                      fontSize: "13px",
                      paddingTop: "50%",
                      paddingLeft: "5px",
                    }}
                  >
                    Free account opening
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4 ">
              <div className="row">
                <div className="col-6 text-center ">
                  <img
                    className=""
                    src="media/images/pricing0.svg"
                    style={{ width: "140px", margin: "0 auto" }}
                  />
                </div>
                <div className="col-6 text-center ">
                  <p
                    style={{
                      fontSize: "13px",
                      paddingTop: "50%",
                      paddingLeft: "5px",
                    }}
                  >
                    Free equity delivery and direct mutual funds{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-4 ">
              <div className="row">
                <div className="col-6 text-center">
                  <img
                    className=""
                    src="media/images/pricing20.svg"
                    style={{ width: "140px", margin: "0 auto" }}
                  />
                </div>
                <div className="col-6 text-center ">
                  <p
                    style={{
                      fontSize: "13px",
                      paddingTop: "50%",
                      paddingLeft: "5px",
                    }}
                  >
                    Intraday and F&O
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
