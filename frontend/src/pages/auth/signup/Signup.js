import SignupForm from "../../../common/SignupForm.js";

function Signup() {
	return (
		<div className='w-full md:w-1/2 lg:w-2/3 xl:w-3/5 h-full mx-auto grid place-content-center'>
			<div className=''>
				<p className='text-gray-500 text-xs'>START FOR FREE</p>
				<h1 className='flex my-3 items-end text-3xl font-bold tracking-wide'>
					Craete new account<div className='mb-1 ml-1 w-2 h-2 bg-primary rounded-full'></div>
				</h1>
			</div>
			<div className='mt-8 w-full h-auto'>
				<SignupForm />
			</div>
		</div>
	);
}

export default Signup;
