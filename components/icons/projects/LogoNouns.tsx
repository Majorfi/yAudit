import	React		from	'react';

import type {ReactElement, SVGProps} from 'react';

function	LogoNouns(props: SVGProps<SVGSVGElement>): ReactElement {
	const defaultProps = {width: 107, height: 40};
	props = {...defaultProps, ...props};

	return (
		<svg
			viewBox={'0 0 107 40'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
			{...props}>
			<path
				fill-rule={'evenodd'}
				clip-rule={'evenodd'}
				d={'M20.0625 6.66667V13.3333H10.0313H0V23.3333V33.3333H3.34375H6.6875V26.6667V20H13.375H20.0625V30V40H40.125H60.1875V29.9917V19.9835L63.4644 20.0584L66.7413 20.1333L66.8113 30.0667L66.8814 40H86.9407H107V20V0H86.9375H66.875V6.66667V13.3333H63.5313H60.1875V6.66667V0H40.125H20.0625V6.66667ZM39.8575 20V33.3333H33.3038H26.75V20.1779C26.75 12.9421 26.8303 6.94214 26.9284 6.84454C27.0263 6.74667 29.9755 6.66667 33.4822 6.66667H39.8575V20ZM86.873 20.0667L86.9426 33.3333H80.2524H73.5625V20.1779C73.5625 12.9421 73.6449 6.94027 73.7455 6.83973C73.8461 6.73947 76.8255 6.6896 80.3661 6.7288L86.8038 6.8L86.873 20.0667Z'}
				fill={'currentcolor'}/>
		</svg>
	);
}

export default LogoNouns;



