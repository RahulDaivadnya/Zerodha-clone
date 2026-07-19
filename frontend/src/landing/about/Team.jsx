import "../../App.css";
function Team() {
  return (
    <>
      <div
        className="container px-5 py-0 text-center "
        style={{ width: "60%" }}
      >
        <div className="row p-5 ">
          <h2 style={{ fontSize: "24px" }}>People</h2>
        </div>
      </div>
      <div className="container px-5 " style={{ width: "70%" }}>
        <div className="row">
          <div className="col text-center">
            <img
              className="rounded-circle"
              src="media/images/nithinKamath.jpg"
              width="300"
              height="300"
            />
            <p className="fs-5 m-3 p-0">Nithin Kamath</p>
            <p className="text-muted">Founder, CEO</p>
          </div>

          <div className="col">
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              Playing basketball is his zen.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              Connect on
              <a className="link" style={{ textDecoration: "none" }} href="/">
                <span> </span>Homepage<span> </span>
              </a>
              /
              <a className="link" style={{ textDecoration: "none" }} href="/">
                <span> </span>TradingQnA<span> </span>
              </a>
              /
              <a className="link" style={{ textDecoration: "none" }} href="/">
                <span> </span>Twitter<span> </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="container p-5">
        <div className="row p-5">
          <div className="col text-center">
            <img
              className="rounded-circle"
              src="media/images/Nikhil.jpg"
              width="240"
              height="240"
            />
            <p className="fs-5 m-3 p-0">Nikhil Kamath</p>
            <p className="text-muted">Co-founder & CFO</p>
          </div>
          <div className="col text-center">
            <img
              className="rounded-circle"
              src="media/images/Kailash.jpg"
              width="240"
              height="240"
            />
            <p className="fs-5 m-3 p-0">Dr. Kailash Nadh</p>
            <p className="text-muted">CTO</p>
          </div>
          <div className="col text-center">
            <img
              className="rounded-circle"
              src="media/images/Venu.jpg"
              width="240"
              height="240"
            />
            <p className="fs-5 m-3 p-0">Venu Madhav</p>
            <p className="text-muted">COO</p>
          </div>
          
        </div>

        <div className="row p-5">
          <div className="col text-center">
            <img
              className="rounded-circle"
              src="media/images/Seema.jpg"
              width="240"
              height="240"
            />
            <p className="fs-5 m-3 p-0">Seema Patil</p>
            <p className="text-muted">Director</p>
          </div>
          <div className="col text-center">
            <img
              className="rounded-circle"
              src="media/images/Karthik.jpg"
              width="240"
              height="240"
            />
            <p className="fs-5 m-3 p-0">Karthik Rangappa</p>
            <p className="text-muted">Chief of Education</p>
          </div>
          <div className="col text-center">
            <img
              className="rounded-circle"
              src="media/images/Austin.jpg"
              width="240"
              height="240"
            />
            <p className="fs-5 m-3 p-0">Austin Prakesh</p>
            <p className="text-muted">Director Strategy</p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Team;
