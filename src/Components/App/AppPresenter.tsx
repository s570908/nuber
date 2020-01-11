import React from "react";
import PropTypes from "prop-types";
// import { useMutation } from "@apollo/react-hooks";
// import { USER_LOG_OUT } from "./AppQueries";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import AddPlace from "../../Routes/AddPlace";
import EditAccount from "../../Routes/EditAccount";
import Home from "../../Routes/Home";
import OutHome from "../../Routes/OutHome";
import PhoneLogin from "../../Routes/PhoneLogin";
import Places from "../../Routes/Places";
import Ride from "../../Routes/Ride";
import Settings from "../../Routes/Settings";
import VerifyPhone from "../../Routes/VerifyPhone";
import SocialLogin from "../../Routes/SocialLogin";
import FindAddress from "../../Routes/FindAddress";

interface IProps {
	isLoggedIn: boolean;
}

const AppPresenter: React.FC<IProps> = ({ isLoggedIn }) => {
	// const [logOut, { data, error, client }] = useMutation(USER_LOG_OUT);

	return (
		<BrowserRouter>
			{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
		</BrowserRouter>
		// <div>
		// 	<div>You are {isLoggedIn ? "In" : "Out"}</div>
		// 	{isLoggedIn && <button onClick={() => logOut()}>logout</button>}
		// </div>
	);
};

const LoggedOutRoutes: React.FC = () => (
	<Switch>
		<Route path={"/"} exact component={OutHome} />
		<Route path={"/phone-login"} exact component={PhoneLogin} />
		<Route path={"/verify-phone/:number"} exact component={VerifyPhone} />
		<Route path={"/social-login"} exact component={SocialLogin} />
		<Redirect path={"*"} to={"/"} />
	</Switch>
);

const LoggedInRoutes: React.FC = () => (
	<Switch>
		<Route path={"/"} exact component={Home} />
		<Route path={"/ride"} exact component={Ride} />
		<Route path={"/edit-account"} exact component={EditAccount} />
		<Route path={"/setting"} exact component={Settings} />
		<Route path={"/places"} exact component={Places} />
		<Route path={"/add-place"} exact component={AddPlace} />
		<Route path={"/find-address"} exact component={FindAddress} />
		<Redirect path={"*"} to={"/"} />
	</Switch>
);

AppPresenter.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired
};

export default AppPresenter;
