import { Link } from "react-router-dom";
import "./App.css";
function NotFound() {
  return (
    <div className="container text-center mt-5 mb-5">
      <div className="row">
        <h1 className="mt-5 mb-3 fs-3" style={{}}>
          404 Not Found The Page
        </h1>
        <p style={{ fontSize: "20px" }}>
          We couldn’t find the page you were looking for. Visit 
          <Link className="link" style={{textDecoration:"none"}} to="/"> Zerodha’s home page </Link>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
