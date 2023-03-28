import React from 'react';
import axios from 'axios';
import {Button} from '@yearn-finance/web-lib/components/Button';
import {yToast} from '@yearn-finance/web-lib/components/yToast';

import type {ReactElement} from 'react';

function	SectionContact(): ReactElement {
	const {toast} = yToast();

	return (
		<section
			id={'contact'}
			aria-label={'contact'}
			className={'mb-28 flex flex-row items-center space-x-8 md:pb-[400px]'}>
			<div className={'w-full md:w-1/2'}>
				<div>
					<h2 className={'mb-4 text-3xl font-bold text-neutral-900'}>{'Contact us'}</h2>
					<p className={'text-xl leading-10 text-neutral-900'}>{'Request an audit or ask a question. We don\'t just read code, we read your messages too.'}</p>
				</div>
				<div className={'mt-[52px]'}>
					<form
						id={'contact-form'}
						onSubmit={(e): void => {
							e.preventDefault();
							const name = (e.target as any).name.value;
							const email = (e.target as any).email.value;
							const subject = (e.target as any).subject.value;
							const description = (e.target as any).description.value;
							const website = (e.target as any).website.value;
							axios.post('/api/contact', {
								name,
								email,
								subject,
								description,
								website
							}).then((): void => {
								toast({
									type: 'success',
									content: 'Thank you for your message. We will get back to you as soon as possible!',
									duration: 10000
								});
							}).catch((): void => {
								toast({
									type: 'error',
									content: 'We are sorry, but something went wrong. Please try again later.',
									duration: 10000
								});
							}).finally((): void => {
								(document.getElementById('contact-form') as any)?.reset?.();
							});
						}}
						className={'flex flex-col space-y-4 md:space-y-12'}>
						<div className={'flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0'}>
							<input
								className={'border-none bg-neutral-200'}
								type={'text'}
								name={'name'}
								placeholder={'Name'}
								required />
							<input
								className={'border-none bg-neutral-200'}
								type={'url'}
								name={'website'}
								placeholder={'Website'}
								required />
						</div>
						<input
							className={'border-none bg-neutral-200'}
							type={'email'}
							name={'email'}
							placeholder={'E-mail'}
							required />
						<input
							className={'border-none bg-neutral-200'}
							type={'text'}
							name={'subject'}
							placeholder={'Subject'}
							required />
						<textarea
							className={'border-none bg-neutral-200'}
							name={'description'}
							placeholder={'Description'}
							rows={6}
							required />
						<Button>
							{'Send request'}
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default SectionContact;
