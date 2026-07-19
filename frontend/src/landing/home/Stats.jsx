import React from "react";
import "../../App.css";
function Stats() {
  return (
    <div className="container p-5 mt-5 mb-5">
      <div className="row">
        <div className="col-5 px-5">
          <div className="mb-5">
            <h1 className="fs-3">Trust with confidence</h1>
          </div>
          <div className="mb-5">
            <h3 className="fs-4 mb-3">Customer-first always</h3>
            <p>
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>
          <div className="mb-5">
            <h3 className="fs-4 mb-3">No spam or gimmicks</h3>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
              <a
                className="link"
                style={{ textDecoration: "none", fontWeight: "600" }}
                href="#"
              >
                <span> Our philosophies.</span>
              </a>
            </p>
          </div>
          <div className="mb-5">
            <h3 className="fs-4 mb-3">The Zerodha universe</h3>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="mb-5">
            <h3 className="fs-4 mb-3">Do better with money</h3>
            <p>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-7 ">
          <img src="media/images/ecosystem.png" style={{ width: "90%" }} />
          <div className="" style={{ marginLeft: "15%" }}>
            <a
              style={{ textDecoration: "none", fontWeight: "600" }}
              href=""
              className="icon-link icon-link-hover link m-4 p-0"
            >
              Explore our products
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              style={{ textDecoration: "none", fontWeight: "600" }}
              href=""
              className="icon-link icon-link-hover link m-4 p-0"
            >
              Try Kite demo
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
