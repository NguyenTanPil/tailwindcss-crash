import './App.css';

function App() {
	return (
		<>
			<form>
				<label className='block'>
					<span className='block text-sm font-medium text-slate-700'>Username</span>
					<input
						type='text'
						value='tbone'
						disabled
						className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
					/>
				</label>
			</form>

			<a
				href='#'
				className='group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500'
			>
				<div className='flex items-center space-x-3'>
					<svg
						className='h-6 w-6 stroke-sky-500 group-hover:stroke-white'
						fill='none'
						viewBox='0 0 24 24'
					></svg>
					<h3 className='text-slate-900 group-hover:text-white text-sm font-semibold'>New project</h3>
				</div>
				<p className='text-slate-500 group-hover:text-white text-sm'>
					Create a new project from a variety of starting templates.
				</p>
			</a>

			<div className='group is-published'>
				<div className='hidden group-[.is-published]:block'>Published</div>
			</div>

			{/* Next: Styling based on sibling state (peer-{modifier}) - https://tailwindcss.com/docs/hover-focus-and-other-states */}
		</>
	);
}

export default App;
