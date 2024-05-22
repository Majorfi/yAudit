import	React		from	'react';

import type {ReactElement, SVGProps} from 'react';

function	LogoManyfold(props: SVGProps<SVGSVGElement>): ReactElement {
	const defaultProps = {width: 39, height: 40};
	props = {...defaultProps, ...props};

	return (
		<svg
			viewBox={'0 0 39 40'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
			{...props}>
			<path
				fillRule={'evenodd'}
				clipRule={'evenodd'}
				d={'M12.7032 0.225787C12.075 0.363054 11.2106 0.602075 10.7823 0.756993C5.96896 2.49816 2.39235 6.72434 1.36929 11.8797C1.14968 12.9863 1.11334 15.5433 1.31073 15.998L1.43813 16.2911L1.72772 15.998C1.887 15.8368 2.26162 15.3497 2.56035 14.9156C4.04681 12.7549 5.69889 11.2837 7.83378 10.2194C8.9126 9.68169 9.9746 9.31277 11.2018 9.04925C12.4271 8.78624 15.0693 8.78271 16.2613 9.0426C19.806 9.81522 22.8831 11.8699 24.8098 14.7503C25.6594 16.0204 26.0611 16.8455 26.6099 18.4476C26.8644 19.1907 27.1259 19.8982 27.191 20.0198L27.3094 20.241L27.5748 19.9976C28.3359 19.2997 29.153 16.2259 29.1588 14.0395C29.1611 13.1182 28.9146 11.1074 28.6958 10.2627C27.3954 5.24431 23.52 1.43097 18.5395 0.268878C17.7963 0.0954777 17.1671 0.0380584 15.7143 0.011062C14.0471 -0.0199838 13.722 0.00327469 12.7032 0.225787ZM29.3858 7.6715C29.5056 7.97811 29.8742 8.81293 30.2049 9.52677C31.1413 11.5484 31.5066 12.9853 31.6168 15.0818C31.7317 17.2689 31.2501 19.4886 30.1977 21.6232C28.1976 25.6796 24.3628 28.5344 19.88 29.3042C18.7073 29.5056 16.4907 29.5075 15.3581 29.3082C14.8765 29.2234 14.4585 29.1783 14.429 29.2078C14.3995 29.2371 14.4484 29.3883 14.5376 29.5437C14.6268 29.6989 14.7316 29.9593 14.7704 30.1223C14.8658 30.5219 16.1997 31.8022 17.3146 32.5645C19.7797 34.2497 22.2452 35.0154 25.1631 35.0022C28.9646 34.985 32.3382 33.5164 34.9988 30.7206C38.3617 27.1868 39.6512 22.1564 38.4544 17.2397C37.6539 13.9504 35.6912 10.9937 32.9913 9.0099C32.0758 8.33717 30.07 7.28347 29.5018 7.17684L29.1682 7.11423L29.3858 7.6715ZM11.8725 11.5037C6.23456 12.2429 1.64486 16.5953 0.280401 22.4966C-0.0135486 23.7675 -0.0949531 26.6672 0.125483 28.0102C0.610483 30.9642 1.90704 33.6042 3.90321 35.7019C5.83024 37.7268 8.06232 39.0366 10.7365 39.7116C11.7721 39.9731 12.0422 39.9986 13.7934 40C15.8767 40.0016 17.0637 39.8183 18.522 39.2694C20.5056 38.5228 22.6192 37.1393 22.6192 36.5875C22.6192 36.5128 22.7126 36.3669 22.8269 36.2636C22.9411 36.1603 23.0345 36.0362 23.0345 35.9879C23.0345 35.9396 22.655 35.9002 22.1912 35.9002C19.5616 35.9002 16.6925 34.9666 14.4753 33.3895C13.4028 32.6265 11.8361 31.0313 11.1279 29.9809C10.0107 28.324 9.16772 26.2343 8.8664 24.3748C8.66257 23.1172 8.6605 20.9229 8.86214 19.7669C9.2783 17.3801 10.3618 15.0599 12.0194 13.0052C12.2498 12.7196 12.4658 12.3608 12.4995 12.2076C12.5332 12.0546 12.6279 11.8736 12.7099 11.8056C12.9165 11.634 12.8966 11.3931 12.6772 11.4089C12.5773 11.4162 12.2152 11.4589 11.8725 11.5037Z'}
				fill={'currentcolor'}/>
		</svg>
	);
}

export default LogoManyfold;



