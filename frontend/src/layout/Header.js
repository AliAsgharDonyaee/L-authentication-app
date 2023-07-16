import { useSignOut } from "react-auth-kit";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Header() {
	const [cookies, setCookie] = useCookies();
	const location = useLocation();
	const Signout = useSignOut();
	const navigate = useNavigate();
	return (
		<header className='py-1 w-full h-24 flex flex-col md:flex-row justify-around md:justify-center items-center'>
			<div className='md:mr-10'>
				<p className='text-lg font-extrabold tracking-wider'>Authentication App</p>
			</div>
			<div className=''>
				<ul className='flex '>
					{cookies._auth && cookies._auth_state.email && cookies._auth_storage && cookies._auth_type ? (
						<>
							<li className='mx-4'>
								<NavLink
									to='/'
									className={`${
										location.pathname === "/" ? "text-primary" : "text-gray-400"
									} font-bold tracking-wide`}
								>
									Profile
								</NavLink>
							</li>
							<li className='mx-4'>
								<button
									onClick={() => {
										Signout();
										navigate("/auth/signin");
										window.location.reload();
									}}
									className='w-full h-full text-gray-400 font-bold tracking-wide'
								>
									Log out
								</button>
							</li>
						</>
					) : (
						<>
							<li className='mx-4'>
								<NavLink
									to='/auth/signin'
									className={`${
										location.pathname === "/auth/signin" ? "text-primary" : "text-gray-400"
									} font-bold tracking-wide`}
								>
									Sign in
								</NavLink>
							</li>
							<li className='mx-4'>
								<NavLink
									to='/auth/signup'
									className={`${
										location.pathname === "/auth/signup" ? "text-primary" : "text-gray-400"
									} font-bold tracking-wide`}
								>
									Sign up
								</NavLink>
							</li>
						</>
					)}
				</ul>
			</div>
		</header>
	);
}

export default Header;
