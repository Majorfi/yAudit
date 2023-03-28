import	React		from	'react';

import type {ReactElement, SVGProps} from 'react';

function	LogoSuperfluid(props: SVGProps<SVGSVGElement>): ReactElement {
	const defaultProps = {width: 40, height: 40};
	props = {...defaultProps, ...props};

	return (
		<svg
			viewBox={'0 0 40 40'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
			{...props}>
			<path
				fill-rule={'evenodd'}
				clip-rule={'evenodd'}
				d={'M3.21985 0.0778559C2.0784 0.347515 0.879098 1.36883 0.320902 2.54647L0 3.22378V20.0138V36.8038L0.372732 37.5575C0.834386 38.4912 1.58937 39.2336 2.53043 39.6792L3.20802 40H20H36.792L37.4696 39.6792C38.4106 39.2336 39.1656 38.4912 39.6273 37.5576L40 36.8038V20.0138V3.22378L39.6791 2.54647C39.2333 1.60582 38.4905 0.851159 37.5566 0.389702L36.8024 0.01713L20.2057 0.00159783C10.4281 -0.00762128 3.44912 0.0237437 3.21985 0.0778559ZM30.9273 16.351V23.616H27.3195H23.7118L23.6854 19.9835L23.6591 16.351L20.0251 16.3247L16.391 16.2984V12.6922V9.08593H23.6591H30.9273V16.351ZM16.2907 27.3237V30.9312H12.6817H9.07268V27.3237V23.7162H12.6817H16.2907V27.3237Z'}
				fill={'currentcolor'}/>
		</svg>
	);
}

export default LogoSuperfluid;



