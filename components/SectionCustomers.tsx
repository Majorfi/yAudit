import React from 'react';
import CUSTOMERS from 'utils/customers';
import IconLinkOut from '@yearn-finance/web-lib/icons/IconLinkOut';

import type {ReactElement} from 'react';
import type {TCustomer} from 'utils/customers';

function	SectionCustomers(): ReactElement {
	return (
		<section
			id={'customers'}
			aria-label={'customers'}
			className={'mb-28 flex flex-row items-center space-x-8 md:mb-[120px]'}>
			<div>
				<div>
					<h2 className={'text-3xl font-bold'}>{'Our customers'}</h2>
				</div>
				<div className={'mt-10 grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-6'}>
					{CUSTOMERS?.map((customer: TCustomer): ReactElement => (
						<div key={customer.name} className={'relative flex h-full flex-col bg-neutral-200 p-6'}>
							<div className={'min-h-10 mb-4 h-10 max-h-10 w-10'}>
								{customer.logo}
							</div>
							<b className={'text-lg'}>{customer.name}</b>
							<p className={'text-neutral-600'}>{customer.description}</p>
							<a
								href={customer.docURI}
								target={'_blank'}
								rel={'noopener noreferrer'}
								className={'mt-auto pt-4 text-primary-500 hover:underline'}>
								{'Explore docs →'}
							</a>
							<div className={'absolute top-6 right-6'}>
								<a
									href={customer.URI}
									target={'_blank'}
									rel={'noopener noreferrer'}
									className={'text-neutral-500 transition-colors hover:text-neutral-900'}>
									<IconLinkOut className={'h-6 w-6'} />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default SectionCustomers;
