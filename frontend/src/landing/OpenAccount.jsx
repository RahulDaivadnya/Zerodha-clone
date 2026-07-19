
function OpenAccount() {
  return (
    <div className="container text-center mt-5 mb-5">
      <div className="row">
        <h1 className="mt-5 mb-3 fs-3" style={{}}>
          Open a Zerodha account
        </h1>
        <p style={{ fontSize: "20px" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary mt-4 fs-5 "
          style={{ width: "25%", margin: "0 auto" }}
        >
          Signup for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
