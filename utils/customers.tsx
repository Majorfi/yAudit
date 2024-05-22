import Image from 'next/image';
import LogoGet from 'components/icons/projects/LogoGet';
import LogoLlamalend from 'components/icons/projects/LogoLlamalend';
import LogoManyfold from 'components/icons/projects/LogoManyfold';
import LogoNouns from 'components/icons/projects/LogoNouns';
import LogoOlympus from 'components/icons/projects/LogoOlympus';
import LogoRage from 'components/icons/projects/LogoRage';
import LogoSuperfluid from 'components/icons/projects/LogoSuperfluid';
import LogoTimeless from 'components/icons/projects/LogoTimeless';
import LogoYearn from 'components/icons/projects/LogoYearn';

import type {ReactElement} from 'react';

export type TCustomer = {
	name: string;
	description?: string;
	docURI: string;
	URI: string;
	logo: ReactElement;
}

const	CUSTOMERS: TCustomer[] = [
	{
		name: 'Yearn',
		description: 'A decentralized suite of products helping individuals, DAOs, and other protocols earn yield on their digital assets.',
		docURI: 'https://docs.yearn.finance/',
		URI: 'https://yearn.finance',
		logo: <LogoYearn className={'text-900'} />
	},
	{
		name: 'Olympus DAO',
		description: 'Olympus is building OHM, a community-owned, decentralized and censorship-resistant reserve currency.',
		docURI: 'https://docs.olympusdao.finance/',
		URI: 'https://www.olympusdao.finance/',
		logo: <LogoOlympus className={'text-900'} />
	},
	{
		name: 'Nouns DAO',
		description: 'Nouns is a community-owned brand that makes a positive impact by funding ideas and fostering collaboration. ',
		docURI: 'https://nouns.center/',
		URI: 'https://nouns.wtf/',
		logo: <LogoNouns className={'text-900'} />
	},
	{
		name: 'Superfluid',
		description: 'A revolutionary asset streaming protocol for real-time crypto transfers, utilized by DAOs, web3 businesses, and DeFi games.',
		docURI: 'https://docs.superfluid.finance/superfluid/',
		URI: 'https://www.superfluid.finance/',
		logo: <LogoSuperfluid className={'text-900'} />
	},
	{
		name: 'Llamalend',
		description: 'A protocol for borrowing ETH against your NFTs.',
		docURI: 'https://github.com/LlamaLend/contracts/blob/master/README.md',
		URI: 'https://llamalend.com/',
		logo: <LogoLlamalend className={'text-900'} />
	},
	{
		name: 'Get Protocol',
		description: 'A complete ticketing solution for the modern web',
		docURI: 'https://docs.get-protocol.io/',
		URI: 'https://www.get-protocol.io/',
		logo: <LogoGet className={'text-900'} />
	},
	{
		name: 'Timeless Finance',
		description: 'Creators of Timeless and Bunni - open source and non-custodial yield markets and liquidity engine protocols.',
		docURI: 'https://docs.timelessfi.com/',
		URI: 'https://timelessfi.com/',
		logo: <LogoTimeless className={'text-900'} />
	},
	{
		name: 'Manifold Finance',
		description: 'Lots of the biggest names in DeFi are already using Manifold to leverage MEV to their advantage.',
		docURI: 'https://kb.manifoldfinance.com/',
		URI: 'https://www.manifoldfinance.com/',
		logo: <LogoManyfold className={'text-900'} />
	},
	{
		name: 'Rage Trade',
		description: 'The most liquid, composable, and omnichain ETH perp!',
		docURI: 'https://docs.rage.trade/',
		URI: 'https://www.rage.trade/',
		logo: <LogoRage className={'text-900'} />
	},
	{
		name: 'Curve',
		description: 'A platform that allows users to swap, provide liquidity and earn rewards for various assets, especially stablecoins.',
		docURI: 'https://resources.curve.fi/',
		URI: 'https://curve.fi',
		logo: <Image src={'/customers/curve.png'} alt={'Curve Finance'} width={100} height={100} className={'grayscale'} />
	},
	{
		name: 'Stryke',
		description: 'A platform to supply digital assets to earn from dynamic rates and use that as collateral to borrow other digital assets.',
		docURI: 'https://docs.strike.org/',
		URI: 'https://www.strike.org/',
		logo: <Image src={'/customers/stryke.jpg'} alt={'Stryke'} width={100} height={100} className={'grayscale'} />
	},
	{
		name: 'Inverse',
		description: 'Inverse Finance is an Open Source Protocol for borrowing at a fixed-rate. Stake INV to earn real yield through DBR streaming.',
		docURI: 'https://docs.inverse.finance/inverse-finance',
		URI: 'https://www.inverse.finance/',
		logo: <Image src={'/customers/inverse.svg'} alt={'Inverse'} width={100} height={100} className={'grayscale'} />
	},
	{
		name: 'Ramses',
		description: 'RAMSES houses deep liquidity, low fees, and near 0 slippage for correlated assets built on Arbitrum One.',
		docURI: 'https://docs.ramses.exchange/',
		URI: 'https://www.ramses.exchange/',
		logo: <Image src={'/customers/ramses.png'} alt={'Ramses'} width={100} height={100} className={'grayscale'} />
	},
	{
		name: 'Temple',
		description: 'In a world of volatility and stress, the Temple of long term wealth creation is where disciples come to stake, sleep easy, and chill.',
		docURI: 'https://docs.templedao.link/',
		URI: 'https://templedao.link/',
		logo: <Image src={'/customers/temple.jpg'} alt={'Temple'} width={100} height={100} className={'grayscale'} />
	},
	{
		name: 'Sickle',
		description: 'Web3 portfolio viewer and much, much more in the works.',
		docURI: 'vfat.io',
		URI: 'vfat.io/yield',
		logo: <Image src={'/customers/sickle.jpg'} alt={'Sickle'} width={100} height={100} className={'grayscale'} />
	},
	{
		name: 'Euler',
		description: 'Euler is a modular lending platform that enables users to lend, borrow and build without limits.',
		docURI: 'https://docs.euler.finance/euler-v2-lite-paper/',
		URI: 'https://www.euler.finance/',
		logo: <Image src={'/customers/euler.svg'} alt={'Euler'} width={100} height={100} className={'grayscale'} />
	},
	{
		name: 'Asymmetry',
		description: 'Market leading real yield via customizable LSTfi Structured Products',
		docURI: 'https://docs.asymmetry.finance/security/audits-bug-bounties',
		URI: 'https://www.asymmetry.finance/',
		logo: <Image src={'/customers/asymmetry.png'} alt={'Asymmetry'} width={100} height={100} className={'grayscale'} />
	},
	{
		name: 'TLX',
		description: 'The simplest way to trade with leverage',
		docURI: 'https://docs.tlx.fi/',
		URI: 'https://tlx.fi/',
		logo: <Image src={'/customers/TLX.png'} alt={'TLX'} width={100} height={100} className={'grayscale'} />
	},
	{
		name: 'Peapods',
		description: 'The first fully decentralized on-chain yield-bearing index funds',
		docURI: 'https://docs.peapods.finance/',
		URI: 'https://peapods.finance/',
		logo: <Image src={'/customers/peapods.png'} alt={'Peapods'} width={100} height={100} className={'grayscale'} />
	},
	{
		name: 'Cove',
		description: 'The first onchain portfolio manager. Backed by Electric Capital.',
		docURI: 'https://docs.cove.finance/introduction',
		URI: 'https://www.cove.finance/',
		logo: <Image src={'/customers/cove.svg'} alt={'Cove'} width={100} height={100} className={'grayscale'} />
	}
];


export default CUSTOMERS;
