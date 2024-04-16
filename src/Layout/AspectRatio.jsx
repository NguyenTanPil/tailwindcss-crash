const AspectRatio = () => {
	return (
		<div>
			<h3>Aspect Ratio</h3>

			<div>
				<h4>aspect-auto - aspect-ratio: auto;</h4>
				<iframe
					className='aspect-auto w-full'
					src='https://www.youtube.com/embed/dQw4w9WgXcQ'
					title='Rick Astley - Never Gonna Give You Up (Official Music Video)'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					referrerPolicy='strict-origin-when-cross-origin'
					allowFullScreen
				></iframe>

				<h4>aspect-square - aspect-ratio: 1 / 1;</h4>
				<iframe
					className='aspect-square w-full'
					src='https://www.youtube.com/embed/dQw4w9WgXcQ'
					title='Rick Astley - Never Gonna Give You Up (Official Music Video)'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					referrerPolicy='strict-origin-when-cross-origin'
					allowFullScreen
				></iframe>

				<h4>aspect-video - aspect-ratio: 16 / 9;</h4>
				<iframe
					className='w-full aspect-video md:aspect-square'
					src='https://www.youtube.com/embed/dQw4w9WgXcQ'
					title='Rick Astley - Never Gonna Give You Up (Official Music Video)'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					referrerPolicy='strict-origin-when-cross-origin'
					allowFullScreen
				></iframe>

				<h4>aspect-[4/3] - aspect-ratio: 4 / 3;</h4>
				<iframe
					className='w-full aspect-[4/3]'
					src='https://www.youtube.com/embed/dQw4w9WgXcQ'
					title='Rick Astley - Never Gonna Give You Up (Official Music Video)'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					referrerPolicy='strict-origin-when-cross-origin'
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
};

export default AspectRatio;
