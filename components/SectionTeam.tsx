import React from 'react';
import Image from 'next/image';
import TEAM from 'utils/team';

import type {ReactElement} from 'react';
import type {TTeam} from 'utils/team';

function	SectionTeam(): ReactElement {
	return (
		<section
			id={'team'}
			aria-label={'team'}
			className={'mb-28 flex flex-row items-center space-x-8 md:mb-[120px]'}>
			<div>
				<div>
					<h2 className={'mb-4 text-3xl font-bold text-neutral-900'}>{'Meet the Team'}</h2>
					<p className={'text-base text-neutral-600'}>{'yAudit\'s technical team consists of gigabrains, gigachads, and gigabraingigachads. If you\'re in the smart contract security space, you may already know them.'}</p>
				</div>
				<div className={'mt-10 grid w-full max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6'}>
					{TEAM?.map((team: TTeam): ReactElement => (
						<div key={team.alias} className={'flex h-full flex-col bg-neutral-200'}>
							<Image
								src={team.avatar}
								width={282}
								height={282}
								quality={90}
								alt={team.alias}
								className={'object-cover'} />
							<div className={'p-2 md:px-6 md:py-4'}>
								<a
									href={team.URL}
									target={'_blank'}
									rel={'noreferrer'}>
									<b className={'cursor-pointer text-lg text-neutral-900 transition-colors hover:text-primary-500'}>{team.alias}</b>
								</a>
								<p className={'pt-0 text-neutral-900 md:pt-2'}>{team.role}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default SectionTeam;
