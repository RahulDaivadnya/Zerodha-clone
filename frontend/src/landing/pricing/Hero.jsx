const highlights = [
  {
    image: "media/images/pricing0.svg",
    title: "Free equity delivery",
    description:
      "All equity delivery investments (NSE, BSE) are absolutely free - Rs. 0 brokerage.",
  },
  {
    image: "media/images/pricing20.svg",
    title: "Intraday and F&O trades",
    description:
      "Flat Rs. 20 or 0.03% per executed order, whichever is lower.",
  },
  {
    image: "media/images/pricing0.svg",
    title: "Free direct MF",
    description:
      "All direct mutual fund investments are absolutely free - Rs. 0 commissions and DP charges.",
  },
];

function Hero() {
  return (
    <>
      <div className="container text-center py-5" style={{ width: "72%" }}>
        <div className="row py-4">
          <h1 className="mb-3" style={{ fontSize: "2.8rem" }}>
            Charges
          </h1>
          <p className="text-muted mb-0" style={{ fontSize: "1.2rem" }}>
            List of all charges and taxes
          </p>
        </div>
      </div>

      <div className="container p-0">
        <hr className="featurette-divider"></hr>
      </div>

      <div className="container py-5" style={{ width: "76%" }}>
        <div className="row text-center">
          {highlights.map((item) => (
            <div key={item.title} className="col-4 px-4">
              <img
                src={item.image}
                alt={item.title}
                className="mb-4"
                style={{ width: "68%" }}
              />
              <h3 className="mb-3" style={{ fontSize: "1.8rem" }}>
                {item.title}
              </h3>
              <p className="text-muted mb-0" style={{ lineHeight: "1.8" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
