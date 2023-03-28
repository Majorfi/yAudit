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
	}
];


export default CUSTOMERS;
