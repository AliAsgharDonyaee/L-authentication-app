import SigninForm from "../../../common/SigninForm.js";

function Signin() {
	return (
		<div className='w-full md:w-1/2 lg:w-2/3 xl:w-1/2 2xl:w-2/5 h-full mx-auto'>
			<div className=''>
				<p className='text-gray-500 text-xs'>OUR WELCOME FOR YOU</p>
				<h1 className='flex my-3 items-end text-3xl font-bold tracking-wide'>
					Login account<div className='mb-1 ml-1 w-2 h-2 bg-primary rounded-full'></div>
				</h1>
			</div>
			<div className='mt-8 w-full h-auto'>
				<SigninForm />
			</div>
		</div>
	);
}

export default Signin;
