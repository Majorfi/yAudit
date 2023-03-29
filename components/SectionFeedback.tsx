import React from 'react';
import FEEDBACKS from 'utils/feedbacks';

import IconQuote from './icons/IconQuote';

import type {ReactElement} from 'react';
import type {TFeeback} from 'utils/feedbacks';

function	SectionFeedback(): ReactElement {
	return (
		<section
			id={'feedback'}
			aria-label={'feedback'}
			className={'mb-28 flex flex-row items-center space-x-8 md:mb-[120px]'}>
			<div>
				<div>
					<h2 className={'text-3xl font-bold'}>{'Feedback'}</h2>
				</div>
				<div className={'mt-10 grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6'}>
					{FEEDBACKS?.map((feeback: TFeeback): ReactElement => (
						<div key={feeback.from} className={'relative flex h-full flex-row space-x-6 bg-neutral-200 p-6'}>
							<IconQuote className={'min-w-[24px] text-neutral-900'} />
							<div>
								<p className={'mb-4 text-lg text-neutral-600'}>{feeback.content}</p>
								<b className={'text-lg text-neutral-900'}>{feeback.from}</b>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default SectionFeedback;
