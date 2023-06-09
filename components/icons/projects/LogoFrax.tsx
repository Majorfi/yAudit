import	React		from	'react';

import type {ReactElement, SVGProps} from 'react';

type TLogo = SVGProps<SVGSVGElement> & {isColored?: boolean};

function	LogoFrax(props: TLogo): ReactElement {
	const defaultProps = {
		width: 40,
		height: 40
	};

	props = {...defaultProps, ...props};

	return props.isColored ? (
		<svg
			viewBox={'0 0 80 80'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}>
			<path
				fillRule={'evenodd'}
				clipRule={'evenodd'}
				d={'M80 40C80 17.9288 62.0712 0 40 0C17.9288 0 0 17.9288 0 40C0 62.0712 17.9288 80 40 80C62.0712 80 80 62.0712 80 40Z'}
				fill={'white'}/>
			<path
				fillRule={'evenodd'}
				clipRule={'evenodd'}
				d={'M25.0347 60L30.8366 54.1981C36.4148 57.7983 43.5852 57.7983 49.1634 54.1981L54.9653 60L60 54.9653L54.1981 49.1634C57.7983 43.5852 57.7983 36.4148 54.1981 30.8366L60 25.0347L54.9653 20L49.1634 25.8019C43.5852 22.2017 36.4148 22.2017 30.8366 25.8019L25.0347 20L20 25.0347L25.8019 30.8366C22.2017 36.4148 22.2017 43.5852 25.8019 49.1634L20 54.9653L25.0347 60ZM40 29.7809C45.6386 29.7809 50.2191 34.3614 50.2191 40C50.2191 45.6386 45.6386 50.2191 40 50.2191C34.3614 50.2191 29.7809 45.6386 29.7809 40C29.7809 34.3614 34.3614 29.7809 40 29.7809Z'}
				fill={'black'}/>
		</svg>

	):(
		<svg
			viewBox={'0 0 40 40'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
			{...props}>
			<path
				fillRule={'evenodd'}
				clipRule={'evenodd'}
				d={'M5.03474 40L10.8366 34.1981C16.4148 37.7983 23.5852 37.7983 29.1634 34.1981L34.9653 40L40 34.9653L34.1981 29.1634C37.7983 23.5852 37.7983 16.4148 34.1981 10.8366L40 5.03474L34.9653 0L29.1634 5.80189C23.5852 2.20173 16.4148 2.20173 10.8366 5.80189L5.03474 0L0 5.03474L5.80189 10.8366C2.20173 16.4148 2.20173 23.5852 5.80189 29.1634L0 34.9653L5.03474 40ZM20 9.78095C25.6386 9.78095 30.2191 14.3614 30.2191 20C30.2191 25.6386 25.6386 30.2191 20 30.2191C14.3614 30.2191 9.78095 25.6386 9.78095 20C9.78095 14.3614 14.3614 9.78095 20 9.78095Z'}
				fill={'black'}/>
		</svg>
        
	);
}

export default LogoFrax;
