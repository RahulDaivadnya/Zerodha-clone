import React from "react";

function Education() {
  return (
    <div className="container p-5 py-0 ">
      <div className="row ">
        <div className="col-4">
          <img src="media/images/education.svg" />
        </div>
        <div className="col-2 p-5 "></div>
        <div className="col-6 p-5">
          <h2 className="my-4">Free and open market education</h2>
          <p className="my-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            style={{ textDecoration: "none", fontWeight: "600" }}
            href=""
            className="icon-link icon-link-hover link my-3 "
          >
            Varsity
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="my-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            style={{ textDecoration: "none", fontWeight: "600" }}
            href=""
            className="icon-link icon-link-hover link my-3 "
          >
            TradingQ&A
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
