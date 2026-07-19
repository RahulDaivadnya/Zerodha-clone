function Hero() {
  return (
    <>
      <div className="container text-center py-5" style={{ width: "70%" }}>
        <div className="row py-4">
          <h1 className="mb-3" style={{ fontSize: "2.8rem" }}>
            Zerodha Products
          </h1>
          <p className="text-muted mb-3" style={{ fontSize: "1.25rem" }}>
            Sleek, modern, and intuitive trading platforms
          </p>
          <p className="text-muted mb-0">
            Check out our{" "}
            <a
              href="https://zerodha.com/investments"
              style={{ textDecoration: "none", fontWeight: "500" }}
              className="link"
            >
              investment offerings
            </a>
          </p>
        </div>
      </div>
      <div className="container p-0">
        <hr className="featurette-divider"></hr>
      </div>
    </>
  );
}

export default Hero;
