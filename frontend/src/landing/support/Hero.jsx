const heroLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "Kite user manual",
];

function Hero() {
  return (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      <div className="container py-4 py-md-5" style={{ maxWidth: "1280px" }}>
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 pb-4 pb-md-5">
          <p className="mb-0 fw-semibold" style={{ fontSize: "2rem" }}>
            <a href="/" className="text-dark text-decoration-none">
              Support Portal
            </a>
          </p>

          <a
            href="/login?next=https%3A%2F%2Fsupport.zerodha.com%2Ftickets%2F"
            target="_blank"
            rel="noreferrer"
            className="btn text-white fw-medium"
            style={{ backgroundColor: "#387ed1", borderRadius: "2px", padding: "10px 18px" }}
          >
            My tickets
          </a>
        </div>

        <div
          className="d-flex align-items-center gap-2 gap-md-3 bg-white border rounded-1 px-4 px-md-4"
          style={{ height: "60px", borderColor: "#d9e1ea" }}
        >
          <span className="text-secondary d-none d-md-inline">
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
          <input
            id="searchInput"
            type="text"
            autoComplete="off"
            className="form-control border-0 shadow-none px-0"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
            autoFocus
          />
        </div>

        <div className="d-flex flex-wrap gap-3 gap-md-4 mt-4">
          {heroLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="text-decoration-underline"
              style={{ color: "#387ed1", textUnderlineOffset: "4px" }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
