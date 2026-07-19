const equityRows = [
  [
    "Brokerage",
    "Zero Brokerage",
    "0.03% or Rs. 20/executed order whichever is lower",
    "0.03% or Rs. 20/executed order whichever is lower",
    "Flat Rs. 20 per executed order",
  ],
  [
    "STT/CTT",
    "0.1% on buy & sell",
    "0.025% on the sell side",
    "0.02% on the sell side",
    "0.1% on sell side on premium",
  ],
  [
    "Transaction charges",
    "NSE: 0.00297% | BSE: 0.00375%",
    "NSE: 0.00297% | BSE: 0.00375%",
    "NSE: 0.00173% | BSE: 0",
    "NSE: 0.03503% | BSE: 0.0325%",
  ],
  [
    "GST",
    "18% on brokerage + SEBI + transaction charges",
    "18% on brokerage + SEBI + transaction charges",
    "18% on brokerage + SEBI + transaction charges",
    "18% on brokerage + SEBI + transaction charges",
  ],
  ["SEBI charges", "Rs. 10 / crore", "Rs. 10 / crore", "Rs. 10 / crore", "Rs. 10 / crore"],
  [
    "Stamp charges",
    "0.015% or Rs. 1500 / crore on buy side",
    "0.003% or Rs. 300 / crore on buy side",
    "0.002% or Rs. 200 / crore on buy side",
    "0.003% or Rs. 300 / crore on buy side",
  ],
];

const currencyRows = [
  [
    "Brokerage",
    "0.03% or Rs. 20/executed order whichever is lower",
    "Rs. 20/executed order",
  ],
  ["STT/CTT", "No STT", "No STT"],
  ["Transaction charges", "NSE: 0.00035% | BSE: 0.00045%", "NSE: 0.0311% | BSE: 0.001%"],
  [
    "GST",
    "18% on brokerage + SEBI + transaction charges",
    "18% on brokerage + SEBI + transaction charges",
  ],
  ["SEBI charges", "Rs. 10 / crore", "Rs. 10 / crore"],
  ["Stamp charges", "0.0001% or Rs. 10 / crore on buy side", "0.0001% or Rs. 10 / crore on buy side"],
];

const commodityRows = [
  [
    "Brokerage",
    "0.03% or Rs. 20/executed order whichever is lower",
    "Rs. 20/executed order",
  ],
  ["STT/CTT", "0.01% on sell side", "0.05% on sell side"],
  ["Transaction charges", "MCX: 0.0021% | NSE: 0.0001%", "MCX: 0.0418% | NSE: 0.001%"],
  [
    "GST",
    "18% on brokerage + SEBI + transaction charges",
    "18% on brokerage + SEBI + transaction charges",
  ],
  ["SEBI charges", "Agri: Rs. 1 / crore | Non-agri: Rs. 10 / crore", "Rs. 10 / crore"],
  ["Stamp charges", "0.002% or Rs. 200 / crore on buy side", "0.003% or Rs. 300 / crore on buy side"],
];

const accountOpening = [
  ["Individual account", "Free"],
  ["Minor account", "Free"],
  ["NRI account", "Rs. 500"],
  ["HUF account", "Free online / Rs. 500 offline"],
  ["Partnership, LLP, and Corporate accounts", "Rs. 500"],
];

const extras = [
  [
    "Call & trade",
    "Additional charges of Rs. 50 per order for orders placed through a dealer.",
  ],
  ["DP charges", "Rs. 15.34 per scrip on sell transactions."],
  ["Pledging charges", "Rs. 30 + GST per pledge request per ISIN."],
  ["AMC", "Free for the first year for resident individual accounts."],
  ["Delayed payment charges", "0.05% per day or 18% per year on debit balance."],
];

function PricingTable({ title, headers, rows }) {
  return (
    <div className="mb-5">
      <h3 className="mb-4" style={{ fontSize: "1.8rem" }}>
        {title}
      </h3>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="bg-light text-dark fw-semibold py-3"
                  style={{ minWidth: "180px" }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) => (
                  <td
                    key={`${row[0]}-${index}`}
                    className={index === 0 ? "fw-semibold" : "text-muted"}
                    style={{ lineHeight: "1.7" }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Brokerage() {
  return (
    <>
      <div className="container py-4" style={{ width: "78%" }}>
        <PricingTable
          title="Equity"
          headers={[
            "",
            "Equity delivery",
            "Equity intraday",
            "F&O - Futures",
            "F&O - Options",
          ]}
          rows={equityRows}
        />

        <PricingTable
          title="Currency"
          headers={["", "Currency futures", "Currency options"]}
          rows={currencyRows}
        />

        <PricingTable
          title="Commodity"
          headers={["", "Commodity futures", "Commodity options"]}
          rows={commodityRows}
        />
      </div>

      <div className="container py-4" style={{ width: "78%" }}>
        <div className="row">
          <div className="col-6">
            <h3 className="mb-4" style={{ fontSize: "1.8rem" }}>
              Charges for account opening
            </h3>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="bg-light py-3">Type of account</th>
                    <th className="bg-light py-3">Charges</th>
                  </tr>
                </thead>
                <tbody>
                  {accountOpening.map((row) => (
                    <tr key={row[0]}>
                      <td className="fw-semibold">{row[0]}</td>
                      <td className="text-muted">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-6 ps-5">
            <h3 className="mb-4" style={{ fontSize: "1.8rem" }}>
              Charges explained
            </h3>
            {extras.map((item) => (
              <div key={item[0]} className="mb-4">
                <h5 className="mb-2">{item[0]}</h5>
                <p className="text-muted mb-0" style={{ lineHeight: "1.8" }}>
                  {item[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container text-center py-5" style={{ width: "72%" }}>
        <img
          src="media/images/largestBroker.svg"
          alt="Largest broker"
          className="mb-4"
          style={{ width: "24%" }}
        />
        <p className="text-muted mb-3" style={{ lineHeight: "1.8" }}>
          Want to calculate your brokerage before placing a trade? Use Zerodha's
          brokerage calculator to estimate costs upfront.
        </p>
        <a
          href="https://zerodha.com/brokerage-calculator/"
          className="btn btn-primary px-4"
        >
          Brokerage calculator
        </a>
      </div>
    </>
  );
}

export default Brokerage;
