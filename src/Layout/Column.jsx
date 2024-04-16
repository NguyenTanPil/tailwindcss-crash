const Column = () => {
	return (
		<div className='w-full'>
			<h3>Column</h3>

			<div className='columns-[10rem] md:columns-4xs lg:columns-md gap-8'>
				<div className='h-32 w-full aspect-square bg-blue'></div>
				<div className='h-32 w-full aspect-square bg-purple'></div>
				<div className='h-32 w-full aspect-square bg-pink'></div>
				<div className='h-32 w-full aspect-square bg-green'></div>
				<div className='h-32 w-full aspect-square bg-yellow'></div>
				<div className='h-32 w-full aspect-square bg-gray-dark'></div>
			</div>
		</div>
	);
};

export default Column;
