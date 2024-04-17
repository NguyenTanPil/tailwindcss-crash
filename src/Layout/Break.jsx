const Break = () => {
	return (
		<div className='w-full'>
			<h3>Break</h3>

			<div className=''>
				<h4>Break after</h4>
				<div className='columns-2 border-b-2 pb-4 mb-4'>
					<p>Well, let me tell you something, ...</p>
					<p className='break-after-column'>Sure, go ahead, laugh...</p>
					<p>Maybe we can live without...</p>
					<p>Look. If you think this is...</p>
				</div>
				<h4>Break before</h4>
				<div className='columns-2 border-b-2 pb-4 mb-4'>
					<p>Well, let me tell you something, ...</p>
					<p className='break-before-column'>Sure, go ahead, laugh...</p>
					<p>Maybe we can live without...</p>
					<p>Look. If you think this is...</p>
				</div>
				<h4>Break inside</h4>
				<div className='columns-2 border-b-2 pb-4 mb-4'>
					<p>Well, let me tell you something, ...</p>
					<p className='break-inside-avoid-column'>Sure, go ahead, laugh...</p>
					<p>Maybe we can live without...</p>
					<p>Look. If you think this is...</p>
				</div>

				<h4>Box decoration break</h4>
				<div>
					<span className='box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2'>
						Hello
						<br />
						World
					</span>
					<span className='box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2'>
						Hello
						<br />
						World
					</span>
				</div>
			</div>
		</div>
	);
};

export default Break;
