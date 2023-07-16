import { SignupSchema } from "../utils/signupSchema.js";
import { Field, Form, Formik } from "formik";
import Notiflix from "notiflix";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function SignupForm() {
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();
	return (
		<Formik
			initialValues={{
				fname: "",
				lname: "",
				email: "",
				password: "",
			}}
			validationSchema={SignupSchema}
			onSubmit={(data) => {
				axios
					.post("http://localhost:4000/api/v1/auth/signup", data)
					.then((res) => {
						Notiflix.Notify.success(`Dear ${res.data.data[0].fullName}, You have successfully registered`);
						navigate("/auth/signin");
					})
					.catch((err) => {
						Notiflix.Notify.failure(err.response.data.message);
					});
			}}
		>
			{({ errors, touched }) => (
				<Form className='grid gap-4'>
					<div className='w-full h-20 flex gap-4'>
						<div className='p-2 px-3 w-1/2 h-full bg-primary/5 rounded-xl'>
							<div className='flex justify-between items-center'>
								<label htmlFor='fname' className='text-gray-400 text-sm mb-2'>
									first name
								</label>
								<div className='text-red-500 text-xs'>
									{errors.fname && touched.fname ? <p>{errors.fname}</p> : null}
									{!errors.fname && touched.fname && <p>✅</p>}
								</div>
							</div>
							<Field
								va
								id='fname'
								name='fname'
								type='text'
								className='px-1 w-full h-8 font-bold tracking-wide bg-transparent border-b-2 border-gray-300 text-gray-700 transition focus:outline-none'
							/>
						</div>
						<div className='p-2 px-3 w-1/2 h-full bg-primary/5 rounded-xl'>
							<div className='flex justify-between items-center'>
								<label htmlFor='lname' className='text-gray-400 text-sm mb-2'>
									last name
								</label>
								<div className='text-red-500 text-xs'>
									{errors.lname && touched.lname ? <p>{errors.lname}</p> : null}
									{!errors.lname && touched.lname && <p>✅</p>}
								</div>
							</div>
							<Field
								id='lname'
								name='lname'
								type='text'
								className='px-1 w-full h-8 font-bold tracking-wide bg-transparent border-b-2 border-gray-300 transition focus:outline-none focus:border-primary'
							/>
						</div>
					</div>
					<div className='p-2 px-3 w-dull h-full bg-primary/5 rounded-xl'>
						<div className='flex justify-between items-center'>
							<label htmlFor='email' className='text-gray-400 text-sm mb-2'>
								email address
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
								<div className='w-5 h-5'>{!errors.password && touched.password && <p>✅</p>}</div>
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
							className='px-1 w-full h-8 font-bold tracking-wide bg-transparent border-b-2 border-gray-300 transition focus:outline-none focus:border-primary'
							type={showPassword ? "text" : "password"}
						/>
					</div>
					<div className='p-2 px-3 w-dull h-full bg-primary/5 rounded-xl'>
						<div className='flex justify-between items-center'>
							<label htmlFor='passwordConfirm' className='text-gray-400 text-sm mb-2'>
								password confirm
							</label>
							<div className='text-red-500 text-xs'>
								{errors.passwordConfirm && touched.passwordConfirm ? (
									<p>{errors.passwordConfirm}</p>
								) : null}
								{!errors.passwordConfirm && touched.passwordConfirm && <p>✅</p>}
							</div>
						</div>
						<Field
							name='passwordConfirm'
							type='password'
							className='px-1 w-full h-8 font-bold tracking-wide bg-transparent border-b-2 border-gray-300 transition focus:outline-none focus:border-primary'
						/>
					</div>
					<div className=' mt-8 flex justify-between items-center gap-x-4'>
						<Link
							href='/login'
							className='w-1/2 h-12 text-primary rounded-full border-2 border-primary font-bold tracking-wider grid place-content-center'
						>
							Login
						</Link>
						<button
							type='submit'
							className='w-1/2 h-12 bg-primary rounded-full text-white font-bold tracking-wider'
						>
							Create Account
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
}

export default SignupForm;
