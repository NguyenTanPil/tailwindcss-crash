// import AspectRatio from './AspectRatio';
// import Column from './Column';
// import Container from './Container';
// import Break from './Break';
// import ObjectPosition from './ObjectPosition';

const Layout = () => {
	return (
		<div className='w-[80%] flex flex-col items-center mx-auto'>
			<h2>Layout</h2>

			{/* <AspectRatio /> */}
			{/* <Container /> */}
			{/* <Column /> */}
			{/* <Break /> */}
			{/* <ObjectPosition /> */}
			<div className='grid grid-cols-[1fr_500px_2fr]'></div>
			<button className='md:[&:nth-child(1)]:bg-white py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>
				Save changes 1
			</button>

			<button className='btn-primary'>Save changes 2</button>
		</div>
	);
};

export default Layout;
