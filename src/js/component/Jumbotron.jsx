import React from "react";

const Jumbotron = (props) => {
	return ( 
        <div clasNames="container">
        <div className="jumbotron">
            <h1 className="display-4">Lorem ipsum dolor sit amet</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <hr className="my-4"></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
        </div>
        </div>
    )
}

export default Jumbotron;