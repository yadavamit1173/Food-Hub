// import ErrorImage from "../Images/404 Error.jpg";
import { useRouteError, Link } from "react-router-dom"; // import useRouteError for routing error
import Logo from "../assets/img/nikal.png"

const Error = () => {
  // call useRouteError so we can access error data while routing
  const err = useRouteError();
  return (
    <div className="error-page">
      
      <img src={Logo} alt="Error Image" className="error-image"/>
      
      <h1>Oops! The restaurant you're looking for can't be found.</h1>
      <h3 className="error-data">{err.data}</h3>
      <h3 className="error-back-home">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
};

export default Error;