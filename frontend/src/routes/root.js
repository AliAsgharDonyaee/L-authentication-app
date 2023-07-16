import { Route, Routes } from "react-router-dom";
import Profile from "../pages/profile/Profile.js";
import Signin from "../pages/auth/signin/Signin.js";
import Signup from "../pages/auth/signup/Signup.js";
import { RequireAuth } from "react-auth-kit";

const Routers = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<RequireAuth loginPath='/'>
						<Profile />
					</RequireAuth>
				}
			></Route>
			<Route path='/auth/signin' element={<Signin />} />
			<Route path='/auth/signup' element={<Signup />} />
		</Routes>
	);
};

export default Routers;
