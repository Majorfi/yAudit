import React from 'react';

import type {ReactElement, SVGProps} from 'react';

type TLogo = SVGProps<SVGSVGElement> & { isColored?: boolean };

function LogoRhino(props: TLogo): ReactElement {
	const defaultProps = {
		width: 79,
		height: 40
	};

	props = {...defaultProps, ...props};

	return props.isColored ? (
		<svg
			viewBox={'0 0 272 272'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
		>
			<circle
				cx={'136'}
				cy={'136'}
				r={'136'}
				fill={'white'} />
			<path
				d={
					'M186.12 188H197.753C201.722 184.284 204.259 178.626 204.92 175.409C197.753 172.303 194.555 170.029 190.586 166.146L190.089 166.646C191.357 168.975 191.468 171.138 191.468 172.802C191.633 177.462 190.475 180.789 186.12 188ZM118.802 188H128.01C128.01 173.856 125.087 167.533 119.188 161.876L118.527 162.264C120.952 167.533 120.952 172.414 120.952 176.019C120.952 180.401 120.125 183.507 118.747 188H118.802ZM133.633 188H146.534C147.196 180.845 146.534 173.634 144.605 166.757C142.951 160.988 139.863 153.5 134.129 147.732L134.515 147.344C141.958 153.112 144.77 158.27 147.582 163.151C154.639 163.151 161.53 167.533 169.304 167.533C174.321 167.533 179.559 166.757 187.994 162.763C185.568 158.492 183.914 154.665 183.529 147.565H184.025C189.152 168.532 211.426 172.026 220.082 173.579C227.8 174.855 230.447 180.679 230.447 186.336C230.447 186.891 230.447 187.445 230.336 188H237.614C237.89 186.114 238 184.228 238 182.342C238 178.238 237.724 174.078 235.85 170.639C228.958 158.936 223.169 154.554 223.169 145.569C223.169 136.583 229.951 130.149 230.336 129.761C226.367 129.095 224.989 125.268 222.287 121.164C216.388 112.012 206.574 110.625 201.447 110.625C196.319 110.625 193.508 111.291 188.546 111.291C165.665 111.124 154.143 85 126.245 85C106.783 85 94.3783 100.419 94.654 114.452L94.2681 114.563C91.9525 112.012 87.9829 108.518 83.4068 106.964C83.4068 107.63 83.5171 108.351 83.5171 109.128C83.5171 121.497 78.3897 134.864 65.8745 134.864C61.0228 134.864 56.557 132.701 52.4221 128.541C51.5951 129.983 51.2091 131.647 51.2643 133.311C51.3194 135.141 51.7053 136.971 52.4221 138.691L52.1464 139.079C44.7034 138.691 40.0171 136.528 35.4962 133.033C35 136.25 35 137.637 35 141.52C35 157.993 49.7205 173.801 69.1825 173.801C88.6445 173.801 103.2 158.104 103.2 139.967H103.861C104.633 143.461 105.24 147.177 104.633 151.448C127.899 160.822 133.633 174.633 133.633 187.889V188Z'
				}
				fill={'url(#pattern0)'}
			/>
			<defs>
				<pattern
					id={'pattern0'}
					patternContentUnits={'objectBoundingBox'}
					width={'1'}
					height={'1'}
				>
					<use
						href={'#image0_1719_760'}
						transform={
							'matrix(0.0130339 0 0 0.0228817 0 -0.0296767)'
						}
					/>
				</pattern>
				<image
					id={'image0_1719_760'}
					width={'79'}
					height={'45'}
					href={
						'data:image/png;base64,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'
					}
				/>
			</defs>
		</svg>
	) : (
		<svg
			viewBox={'0 0 79 40'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
			{...props}
		>
			<path
				d={
					'M58.6873 40H63.205C64.7466 38.5568 65.7315 36.3597 65.9884 35.1104C63.205 33.9041 61.9632 33.021 60.4216 31.5132L60.2289 31.7071C60.7213 32.6117 60.7641 33.4518 60.7641 34.098C60.8284 35.9074 60.3788 37.1998 58.6873 40ZM32.5446 40H36.1202C36.1202 34.5073 34.9854 32.0517 32.6945 29.8546L32.4375 30.0054C33.3796 32.0517 33.3796 33.9472 33.3796 35.3473C33.3796 37.049 33.0584 38.2553 32.5232 40H32.5446ZM38.3041 40H43.3143C43.5712 37.2213 43.3143 34.4211 42.5649 31.7501C41.9226 29.51 40.7235 26.602 38.4968 24.3619L38.6467 24.2111C41.5372 26.4513 42.6291 28.4545 43.7211 30.35C46.4617 30.35 49.138 32.0517 52.157 32.0517C54.1054 32.0517 56.1394 31.7501 59.4153 30.1992C58.4732 28.5407 57.8309 27.0544 57.681 24.2973H57.8737C59.8649 32.4394 68.5149 33.7964 71.8764 34.3996C74.8739 34.895 75.9017 37.1567 75.9017 39.3538C75.9017 39.5692 75.9017 39.7846 75.8588 40H78.6851C78.7921 39.2676 78.835 38.5353 78.835 37.8029C78.835 36.2089 78.7279 34.5934 77.9999 33.2579C75.3236 28.713 73.0754 27.0113 73.0754 23.5218C73.0754 20.0323 75.709 17.5337 75.8588 17.3829C74.3172 17.1244 73.782 15.6381 72.7328 14.0442C70.4419 10.49 66.6307 9.95154 64.6395 9.95154C62.6483 9.95154 61.5564 10.21 59.6294 10.21C50.7438 10.1454 46.269 0 35.435 0C27.877 0 23.0595 5.98815 23.1666 11.4378L23.0167 11.4809C22.1175 10.49 20.5759 9.13301 18.7988 8.52989C18.7988 8.78837 18.8416 9.06839 18.8416 9.36995C18.8416 14.1734 16.8504 19.3646 11.9901 19.3646C10.1059 19.3646 8.37167 18.5245 6.76585 16.909C6.44468 17.469 6.29481 18.1152 6.31622 18.7614C6.33763 19.4723 6.4875 20.1831 6.76585 20.8508L6.65879 21.0016C3.76832 20.8508 1.94839 20.0108 0.192698 18.6537C-6.38095e-08 19.9031 0 20.4416 0 21.9494C0 28.3468 5.71671 34.4857 13.2748 34.4857C20.8328 34.4857 26.4853 28.3899 26.4853 21.3463H26.7422C27.042 22.7033 27.2775 24.1465 27.042 25.8051C36.0774 29.4453 38.3041 34.8088 38.3041 39.9569V40Z'
				}
				fill={'black'}
			/>
		</svg>
	);
}

export default LogoRhino;
