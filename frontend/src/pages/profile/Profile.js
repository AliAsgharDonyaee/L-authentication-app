import { useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Notiflix from "notiflix";

function Profile() {
	const [state, setState] = useState({ fullName: "", email: "" });
	const auth = useAuthUser();
	const navigate = useNavigate();
	const cookie = useCookies();
	const get = auth().email;

	const getUser = () => {
		if (cookie[0]._auth_type && cookie[0]._auth) {
			axios
				.post("http://localhost:4000/api/v1/auth/login", { email: get })
				.then((res) => setState({ fullName: res.data.data.fullName, email: res.data.data.email }))
				.catch((err) => Notiflix.Notify.failure(err.message));
			return (
				<div>
					<h1 className='text-3xl'>welcome {state.fullName}</h1>
					<p className='text-gray-700'>{state.email}</p>
				</div>
			);
		}
		return (
			<div>
				<p>please login</p>
				<button onClick={() => navigate("/auth/signin")} className='w-16 h-8 bg-primary text-white text-center'>
					login
				</button>
			</div>
		);
	};

	return <section>{getUser()}</section>;
}

export default Profile;
