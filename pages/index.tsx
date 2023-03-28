import React from 'react';
import HeroSVG from 'components/HeroSVG';
import SectionAbout from 'components/SectionAbout';
import SectionContact from 'components/SectionContact';
import SectionCustomers from 'components/SectionCustomers';
import SectionFeedback from 'components/SectionFeedback';
import SectionTeam from 'components/SectionTeam';
import {Button} from '@yearn-finance/web-lib/components/Button';

import type {ReactElement} from 'react';

function	Index(): ReactElement {
	return (
		<main>
			<section aria-label={'hero'} className={'mt-[85px] mb-[70px] grid grid-cols-12 items-center'}>
				<div className={'col-span-12 md:col-span-7'}>
					<h1 className={'mb-6 whitespace-pre break-words text-6xl text-neutral-900 md:text-8xl'}>{'Welcome to\nyAudit'}</h1>
					<p className={'text-lg'}>{'Secure your contracts'}</p>
					<div className={'mt-4 flex w-full flex-row space-x-3 md:space-x-4'}>
						<a href={'#contact'}>
							<Button className={'whitespace-nowrap'}>
								{'Request an audit'}
							</Button>
						</a>
						<a
							href={'https://reports.yacademy.dev/'}
							target={'_blank'}
							rel={'noreferrer'}>
							<Button variant={'outlined'} className={'whitespace-nowrap'}>
								{'View past reports'}
							</Button>
						</a>
					</div>
				</div>
				<div className={'col-span-5 hidden md:block'}>
					<HeroSVG />
				</div>
			</section>

			<SectionAbout />
			<SectionCustomers />
			<SectionFeedback />
			<SectionTeam />
			<SectionContact />
		</main>
	);
}

export default Index;
