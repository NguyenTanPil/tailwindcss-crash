const ObjectPosition = () => {
	return (
		<div className='relative w-full overflow-auto'>
			<div className='w-full'>
				<div className='overflow-x-scroll overflow-y-hidden snap-x scroll-p-4 flex sm:grid sm:grid-cols-3 sm:gap-16 p-8 items-end pt-16'>
					<div className='relative snap-always snap-start w-40 shrink-0 sm:w-auto'>
						<p className='absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
							object-left-top
						</p>
						<div className='group relative mx-auto w-20 h-20 rounded-lg'>
							<div
								className='relative z-10 w-full h-full rounded-md bg-left-top ring-1 ring-black/10 ring-inset shadow-lg'
								style={{
									backgroundImage:
										'url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=128&amp;h=128&amp;q=80)',
								}}
							></div>
							<img
								className='absolute top-0 left-0 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none'
								src='https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=80'
							/>
						</div>
					</div>
					<div className='relative snap-always snap-start w-40 shrink-0 sm:w-auto'>
						<p className='absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
							object-top
						</p>
						<div className='group relative mx-auto w-20 h-20 rounded-lg'>
							<div
								className='relative z-10 w-full h-full rounded-md bg-top ring-1 ring-black/10 ring-inset shadow-lg'
								style={{
									backgroundImage:
										'url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=128&amp;h=128&amp;q=80)',
								}}
							></div>
							<img
								className='absolute top-0 -left-6 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none'
								src='https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=80'
							/>
						</div>
					</div>
					<div className='relative snap-always snap-start w-40 shrink-0 sm:w-auto'>
						<p className='absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
							object-right-top
						</p>
						<div className='group relative mx-auto w-20 h-20 rounded-lg'>
							<div
								className='relative z-10 w-full h-full rounded-md bg-right-top ring-1 ring-black/10 ring-inset shadow-lg'
								style={{
									backgroundImage:
										'url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=128&amp;h=128&amp;q=80)',
								}}
							></div>
							<img
								className='absolute top-0 right-0 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none'
								src='https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=80'
							/>
						</div>
					</div>
					<div className='relative snap-always snap-start w-40 shrink-0 sm:w-auto'>
						<p className='absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
							object-left
						</p>
						<div className='group relative mx-auto w-20 h-20 rounded-lg'>
							<div
								className='relative z-10 w-full h-full rounded-md bg-left ring-1 ring-black/10 ring-inset shadow-lg'
								style={{
									backgroundImage:
										'url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=128&amp;h=128&amp;q=80)',
								}}
							></div>
							<img
								className='absolute -top-6 left-0 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none'
								src='https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=80'
							/>
						</div>
					</div>
					<div className='relative snap-always snap-start w-40 shrink-0 sm:w-auto'>
						<p className='absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
							object-center
						</p>
						<div className='group relative mx-auto w-20 h-20 rounded-lg'>
							<div
								className='relative z-10 w-full h-full rounded-md bg-center ring-1 ring-black/10 ring-inset shadow-lg'
								style={{
									backgroundImage:
										'url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=128&amp;h=128&amp;q=80)',
								}}
							></div>
							<img
								className='absolute -top-6 -left-6 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none'
								src='https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=80'
							/>
						</div>
					</div>
					<div className='relative snap-always snap-start w-40 shrink-0 sm:w-auto'>
						<p className='absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
							object-right
						</p>
						<div className='group relative mx-auto w-20 h-20 rounded-lg'>
							<div
								className='relative z-10 w-full h-full rounded-md bg-right ring-1 ring-black/10 ring-inset shadow-lg'
								style={{
									backgroundImage:
										'url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=128&amp;h=128&amp;q=80)',
								}}
							></div>
							<img
								className='absolute -top-6 right-0 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none'
								src='https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=80'
							/>
						</div>
					</div>
					<div className='relative snap-always snap-start w-40 shrink-0 sm:w-auto'>
						<p className='absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
							object-left-bottom
						</p>
						<div className='group relative mx-auto w-20 h-20 rounded-lg'>
							<div
								className='relative z-10 w-full h-full rounded-md bg-left-bottom ring-1 ring-black/10 ring-inset shadow-lg'
								style={{
									backgroundImage:
										'url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=128&amp;h=128&amp;q=80)',
								}}
							></div>
							<img
								className='absolute -top-12 left-0 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none'
								src='https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=80'
							/>
						</div>
					</div>
					<div className='relative snap-always snap-start w-40 shrink-0 sm:w-auto'>
						<p className='absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
							object-bottom
						</p>
						<div className='group relative mx-auto w-20 h-20 rounded-lg'>
							<div
								className='relative z-10 w-full h-full rounded-md bg-bottom ring-1 ring-black/10 ring-inset shadow-lg'
								style={{
									backgroundImage:
										'url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=128&amp;h=128&amp;q=80)',
								}}
							></div>
							<img
								className='absolute -top-12 -left-6 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none'
								src='https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=80'
							/>
						</div>
					</div>
					<div className='relative snap-always snap-start w-56 -mx-8 shrink-0 sm:w-auto'>
						<p className='absolute top-0 inset-x-0 -translate-y-8 font-medium text-sm text-slate-500 font-mono text-center mb-3 dark:text-slate-400'>
							object-right-bottom
						</p>
						<div className='group relative mx-auto w-20 h-20 rounded-lg'>
							<div
								className='relative z-10 w-full h-full rounded-md bg-right-bottom ring-1 ring-black/10 ring-inset shadow-lg'
								style={{
									backgroundImage:
										'url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=128&amp;h=128&amp;q=80)',
								}}
							></div>
							<img
								className='absolute -top-12 right-0 rounded-md overflow-hidden w-32 h-32 opacity-0 sm:group-hover:opacity-25 max-w-none'
								src='https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=80'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ObjectPosition;
