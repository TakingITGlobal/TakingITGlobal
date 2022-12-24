import { useState, useEffect } from 'react';

export default function useWindowDimensions() {
	const isWindowClient = typeof window === 'object';

 	const [windowSize, setWindowSize] = useState(
 		isWindowClient ? window.innerWidth : undefined
 	);


	useEffect(() => {
		//a handler which will be called on change of the screen resize
		function setSize() {
			setWindowSize(window.innerWidth);
		}

		
			//register the window resize listener
			window.addEventListener('resize', setSize);

			setSize();
			//un-register the listener
			return () => window.removeEventListener('resize', setSize);
		
	}, [isWindowClient, setWindowSize]);

	return windowSize;
}
