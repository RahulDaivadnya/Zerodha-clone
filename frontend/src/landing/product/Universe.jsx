const partners = [
  {
    name: "Zerodha Fund House",
    image: "media/images/zerodhaFundhouse.png",
    href: "https://www.zerodhafundhouse.com/",
    description:
      "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
  },
  {
    name: "Sensibull",
    image: "media/images/sensibullLogo.svg",
    href: "https://sensibull.com",
    description:
      "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
  },
  {
    name: "GoldenPi",
    image: "media/images/goldenpiLogo.png",
    href: "https://www.tijorifinance.com/",
    description:
      "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
  },
  {
    name: "Streak",
    image: "media/images/streakLogo.png",
    href: "https://streak.tech",
    description:
      "Systematic trading platform that allows you to create and backtest strategies without coding.",
  },
  {
    name: "Smallcase",
    image: "media/images/smallcaseLogo.png",
    href: "https://smallcase.zerodha.com",
    description:
      "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
  },
  {
    name: "Ditto",
    image: "media/images/dittoLogo.png",
    href: "https://joinditto.in/",
    description:
      "Personalized advice on life and health insurance. No spam and no mis-selling.",
  },
];

function Universe() {
  return (
    <div className="container py-5 text-center" style={{ width: "72%" }}>
      <div className="row justify-content-center mb-5">
        <div className="col-8">
          <h2 className="mb-3" style={{ fontSize: "2rem" }}>
            The Zerodha Universe
          </h2>
          <p className="text-muted">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      <div className="row g-4">
        {partners.map((partner) => (
          <div key={partner.name} className="col-4">
            <a
              href={partner.href}
              className="text-decoration-none text-dark d-block border rounded-4 h-100 p-4"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="mb-4"
                style={{ maxHeight: "44px", maxWidth: "180px" }}
              />
              <p
                className="text-muted mb-0"
                style={{ fontSize: "0.95rem", lineHeight: "1.8" }}
              >
                {partner.description}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Universe;
