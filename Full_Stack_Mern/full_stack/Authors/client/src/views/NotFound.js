import React from "react"
import { Link } from "react-router-dom";

const NotFound = (props) => {

    return (
        <div className="p-3">
            <img src="https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Typed-Message.gif" width={"800px"} alt="404 Not Found"></img>
            <p>We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</p>
            <hr />
            <Link to={"/authors/new"}><button className="btn btn-outline-primary"> Create an Author</button></Link>
        </div>
    );
};

export default NotFound;