import React from "react";
import { SigninSchema } from "../utils/signinSchema.js";
import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Notiflix from "notiflix";
import { useSignIn } from "react-auth-kit";

function SigninForm() {
	const [showPassword, setShowPassword] = React.useState(false);
	const navigate = useNavigate();
	const signIn = useSignIn();

	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			validationSchema={SigninSchema}
			onSubmit={(data) => {
				axios
					.post("http://localhost:4000/api/v1/auth/signin", data)
					.then((res) => {
						Notiflix.Notify.success(`Dear, You have successfully login`);
						signIn({
							token: res.data.token,
							expiresIn: 3600,
							tokenType: "Bearer",
							authState: { email: data.email },
						});
						navigate("/");
					})
					.catch((err) => {
						Notiflix.Notify.failure(err.response.data.message);
					});
			}}
		>
			{({ errors, touched }) => (
				<Form className='grid gap-4'>
					<div className='p-2 px-3 w-dull h-full bg-primary/5 rounded-xl'>
						<div className='flex justify-between items-center'>
							<label htmlFor='email' className='text-gray-400 text-sm mb-2'>
								email
							</label>
							<div className='text-red-500 text-xs'>
								{errors.email && touched.email ? <p>{errors.email}</p> : null}
								{!errors.email && touched.email && <p>✅</p>}
							</div>
						</div>
						<Field
							id='email'
							name='email'
							type='email'
							className='px-1 w-full h-8 font-bold tracking-wide bg-transparent border-b-2 border-gray-300 transition focus:outline-none focus:border-primary'
						/>
					</div>
					<div className='p-2 px-3 w-dull h-full bg-primary/5 rounded-xl'>
						<div className='flex justify-between items-center'>
							<label htmlFor='password' className='text-gray-400 text-sm mb-2'>
								password
							</label>
							<div className='text-red-500 text-xs flex'>
								{errors.password && touched.password ? <p>{errors.password}</p> : null}
								{!errors.password && touched.password && <p>✅</p>}
								<dev
									className='ml-3 w-5 h-5 text-gray-500 cursor-pointer '
									onClick={() => setShowPassword(!showPassword)}
								>
									{!showPassword ? (
										<EyeIcon className='w-full h-full' />
									) : (
										<EyeSlashIcon className='w-full h-full' />
									)}
								</dev>
							</div>
						</div>
						<Field
							id='password'
							name='password'
							type={showPassword ? "text" : "password"}
							className='px-1 w-full h-8 font-bold tracking-wide bg-transparent border-b-2 border-gray-300 transition focus:outline-none focus:border-primary'
						/>
					</div>
					<div className=' mt-8 flex justify-between items-center gap-x-4'>
						<Link
							href='/sighup'
							className='w-1/2 h-12 text-primary rounded-full border-2 border-primary font-bold tracking-wider grid place-content-center'
						>
							Signup
						</Link>
						<button
							type='submit'
							className='w-1/2 h-12 bg-primary rounded-full text-white font-bold tracking-wider'
						>
							Login
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
}

export default SigninForm;
