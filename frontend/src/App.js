import { useLocation } from "react-router-dom";
import Routers from "./routes/root.js";
import Header from "./layout/Header.js";

function App() {
	const location = useLocation();

	return (
		<section className='w-screen h-screen lg:flex'>
			<div className=' w-full lg:w-2/3 h-2/3'>
				<Header />
				<article className='pt-10 2xl:pt-20 px-3 w-full h-full flex justify-center items-center'>
					<Routers />
				</article>
			</div>
			<div className='w-full lg:w-1/3 h-1/3 lg:h-full flex items-end'>
				<div className='w-full h-1/2 lg:h-full bg-gradient-to-t lg:bg-gradient-to-l from-primary/50 rounded-t-[100%] lg:rounded-t-none lg:rounded-l-[100%] flex justify-center items-end lg:items-center'>
					<p className='text-primary font-bold text-xl lg:text-3xl 2xl:text-5xl text-center mb-4 lg:mb-0 lg:ml-10 tracking-wider lg:w-3/5'>
						Welcome to {location.pathname === "/" ? "home" : location.pathname.slice(1)} page
					</p>
				</div>
			</div>
		</section>
	);
}

export default App;
