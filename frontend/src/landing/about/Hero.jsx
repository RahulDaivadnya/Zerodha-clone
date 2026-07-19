function Hero() {
  return (
    <>
      <div className="container px-5 my-0 text-center " style={{ width: "60%" }}>
        <div className="row p-5 ">
          <h2 style={{ fontSize: "24px" }}>
            We pioneered the discount broking model in India.
          </h2>
          <h2 style={{ fontSize: "24px" }}>
            Now, we are breaking ground with our technology.
          </h2>
        </div>
      </div>
      <div className="container p-0 ">
        <hr className="featurette-divider"></hr>
      </div>

      <div className="container px-5 my-0" style={{ width: "70%" }}>
        <div className="row p-5">
          <div className="col px-3 ">
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="col px-3">
            <p
              className=""
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              <a className="link" style={{ textDecoration: "none" }} href="#">
                Rainmatter
              </a>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our
              <a className="link" style={{ textDecoration: "none" }} href="#">
                blog
              </a>{" "}
              or see what the media is
              <a className="link" style={{ textDecoration: "none" }} href="#">
                saying about us
              </a>{" "}
              or learn more about our business and product
              <a className="link" style={{ textDecoration: "none" }} href="#">
                philosophies
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
