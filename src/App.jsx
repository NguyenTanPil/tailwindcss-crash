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

			<form>
				<label className='block'>
					<span className='block text-sm font-medium text-slate-700'>Email</span>
					<input
						type='email'
						className='peer'
					/>
					<p className='mt-2 invisible peer-invalid:visible text-pink-600 text-sm peer-hover:text-blue-300'>
						Please provide a valid email address.
					</p>
				</label>
			</form>

			<fieldset>
				<legend>Published status</legend>

				<input
					id='draft'
					className='peer/draft'
					type='radio'
					name='status'
					checked
				/>
				<label
					htmlFor='draft'
					className='peer-checked/draft:text-sky-500'
				>
					Draft
				</label>

				<input
					id='published'
					className='peer/published'
					type='radio'
					name='status'
				/>
				<label
					htmlFor='published'
					className='peer-checked/published:text-sky-500'
				>
					Published
				</label>

				<div className='hidden peer-checked/draft:block'>Drafts are only visible to administrators.</div>
				<div className='hidden peer-checked/published:block'>Your post will be publicly visible on your site.</div>
			</fieldset>

			<div>
				<h2>Categories</h2>
				<ul className='*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10'>
					<li>Sales</li>
					<li>Marketing</li>
					<li>SEO</li>
				</ul>
			</div>

			<label className='block'>
				<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
					Email
				</span>
				<input
					type='email'
					name='email'
					className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
					placeholder='you@example.com'
				/>
			</label>

			<label className='relative block'>
				<span className='sr-only'>Search</span>
				<span className='absolute inset-y-0 left-0 flex items-center pl-2'>
					<svg
						className='h-5 w-5 fill-slate-300'
						viewBox='0 0 20 20'
					></svg>
				</span>
				<input
					className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
					placeholder='Search for anything...'
					type='text'
					name='search'
				/>
			</label>

			<ul
				role='list'
				className='marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400'
			>
				<li>5 cups chopped Porcini mushrooms</li>
				<li>1/2 cup of olive oil</li>
				<li>3lb of celery</li>
			</ul>

			<div className='selection:bg-fuchsia-300 selection:text-fuchsia-900'>
				<p>
					So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made
					my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the
					kinship of all living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
				</p>
			</div>

			<button className='hover:-translate-y-0.5 transition motion-reduce:hover:translate-y-0 motion-reduce:transition-none'>
				Save changes
			</button>
		</>
	);
}

export default App;
