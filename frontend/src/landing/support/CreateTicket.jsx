const supportGroups = [
  {
    title: "Account Opening",
    icon: "fa-user-circle-o",
    items: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa-id-card-o",
    items: [
      "Your Profile",
      "Account modification",
      "Client Master Report (CMR) and Depository Participant (DP)",
      "Nomination",
      "Transfer and conversion of securities",
    ],
  },
  {
    title: "Kite",
    icon: "fa-paper-plane-o",
    items: [
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility (MTF) and Margins",
      "Charts and orders",
      "Alerts and Nudges",
      "General",
    ],
  },
  {
    title: "Funds",
    icon: "fa-inr",
    items: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
  },
  {
    title: "Console",
    icon: "fa-desktop",
    items: [
      "Portfolio",
      "Corporate actions",
      "Funds statement",
      "Reports",
      "Profile",
      "Segments",
    ],
  },
  {
    title: "Coin",
    icon: "fa-circle-o",
    items: [
      "Mutual funds",
      "National Pension Scheme (NPS)",
      "Fixed Deposit (FD)",
      "Features on Coin",
      "Payments and Orders",
      "General",
    ],
  },
];

const featured = [
  "Offer for sale (OFS) - July 2026",
  "Latest Intraday leverages and Square-off timings",
];

const quickLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "Kite user manual",
  "Learn how to create a ticket",
];

function CreateTicket() {
  return (
    <div className="container px-3 px-md-4 pt-4 pt-md-5" style={{ maxWidth: "1280px" }}>
      <div className="row g-4 g-md-5 align-items-start">
        <div className="col-md-7">
          <div
            className="d-flex flex-column px-4 py-3 d-md-none mb-4"
            style={{ backgroundColor: "#fff8db", borderLeft: "8px solid #f0c44c" }}
          >
            <ul className="mb-0 ps-3">
              {featured.map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="link text-decoration-none">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="d-flex flex-column gap-3">
            {supportGroups.map((group) => (
              <details key={group.title}>
                <summary
                  className="d-flex align-items-center border rounded-1 cursor-pointer list-unstyled"
                  style={{ borderColor: "#d9d9d9" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center align-self-stretch"
                    style={{
                      backgroundColor: "#eef5ff",
                      minWidth: "74px",
                      color: "#387ed1",
                      fontSize: "1.1rem",
                    }}
                  >
                    <i className={`fa ${group.icon}`} aria-hidden="true"></i>
                  </div>
                  <h2 className="mb-0 px-3 py-3 fw-medium" style={{ fontSize: "1.1rem" }}>
                    {group.title}
                  </h2>
                  <span className="ms-auto px-4 text-primary">
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </summary>

                <div
                  className="border border-top-0"
                  style={{ borderColor: "#d9d9d9" }}
                >
                  <ul className="mb-0 ps-5 py-3">
                    {group.items.map((item) => (
                      <li key={item} className="mb-1" style={{ color: "#387ed1" }}>
                        <a
                          href="#"
                          className="d-block px-2 py-2 text-decoration-none"
                          style={{ color: "#387ed1" }}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="col-md-5">
          <div
            className="d-none d-md-flex flex-column mt-4 px-4 py-3 gap-2"
            style={{ backgroundColor: "#fff8db", borderLeft: "8px solid #f0c44c" }}
          >
            <ul className="mb-0 ps-3">
              {featured.map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="link text-decoration-none">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="d-flex flex-column py-4">
            <div className="px-4 py-3 fw-medium" style={{ backgroundColor: "#f7f7f7" }}>
              Quick links
            </div>
            {quickLinks.map((item, index) => (
              <a
                key={item}
                href="#"
                className="px-4 py-3 text-decoration-none"
                style={{ color: "#387ed1", border: "1px solid #d9d9d9", borderTop: "0" }}
              >
                {index + 1}. {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
