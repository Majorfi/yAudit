import React, {useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {DefaultSeo} from 'next-seo';
import {WithYearn} from '@yearn-finance/web-lib/contexts/WithYearn';

import type {AppProps} from 'next/app';
import type {ReactElement} from 'react';

import '../style.css';

function	AppHead(): ReactElement {
	return (
		<>
			<Head>
				<title>{'yAudit'}</title>
				<meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
				<meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
				<meta name={'description'} content={'yAudit'} />
				<meta name={'msapplication-TileColor'} content={'#000000'} />
				<meta name={'theme-color'} content={'#000000'} />
				<script
					defer
					data-domain={'yaudit.dev'}
					src={'/js/script.js'} />
				<link
					rel={'shortcut icon'}
					type={'image/x-icon'}
					href={'/favicons/favicon.ico'} />
				<link
					rel={'apple-touch-icon'}
					sizes={'180x180'}
					href={'/favicons/apple-touch-icon.png'} />
				<link
					rel={'icon'}
					type={'image/png'}
					sizes={'32x32'}
					href={'/favicons/favicon-32x32.png'} />
				<link
					rel={'icon'}
					type={'image/png'}
					sizes={'16x16'}
					href={'/favicons/favicon-16x16.png'} />
				<link
					rel={'icon'}
					type={'image/png'}
					sizes={'192x192'}
					href={'/favicons/android-chrome-192x192.png'} />
				<link
					rel={'icon'}
					type={'image/png'}
					sizes={'512x512'}
					href={'/favicons/android-chrome-512x512.png'} />

				<meta name={'robots'} content={'index,nofollow'} />
				<meta name={'googlebot'} content={'index,nofollow'} />
				<meta charSet={'utf-8'} />
			</Head>
			<DefaultSeo
				title={'yAudit'}
				defaultTitle={'yAudit'}
				description={'yAudit brings an attention to detail above and beyond your standard auditing firm'}
				openGraph={{
					type: 'website',
					locale: 'en_US',
					url: 'https://yaudit.dev',
					site_name: 'yAudit',
					title: 'yAudit',
					description: 'yAudit brings an attention to detail above and beyond your standard auditing firm',
					images: [
						{
							url: 'https://yaudit.dev/og.png',
							width: 1200,
							height: 675,
							alt: 'Yearn'
						}
					]
				}}
				twitter={{
					handle: '@yAuditDAO',
					site: '@yAuditDAO',
					cardType: 'summary_large_image'
				}} />
		</>
	);
}

function	AppHeader(): ReactElement {
	const	router = useRouter();
	const	[currentPath, set_currentPath] = useState<string>(router.asPath);

	return (
		<header>
			<div className={'flex w-full flex-row items-center justify-between py-6'}>
				<nav className={'flex flex-row items-center space-x-6'}>
					<div>
						<svg
							width={'32'}
							height={'32'}
							viewBox={'0 0 400 400'}
							fill={'none'}
							xmlns={'http://www.w3.org/2000/svg'}>
							<rect
								width={'400'}
								height={'400'}
								rx={'200'}
								fill={'#0657F9'}/>
							<path d={'M65 92V137.403L143.84 168.785L65 200.166V245.569L195.848 190.818V146.751L65 92Z'} fill={'white'}/>
							<path d={'M334 309V265.6H200.17V309H334Z'} fill={'white'}/>
						</svg>
					</div>
					<div>
						<a href={'#'} onClick={(): void => set_currentPath('/')}>
							<p
								aria-selected={!currentPath.includes('#feedback') && !currentPath.includes('#team') && !currentPath.includes('#contact')}
								className={'project--nav'}>
								{'About'}
							</p>
						</a>
					</div>
					<div>
						<a href={'#customers'} onClick={(): void => set_currentPath('/#customers')}>
							<p
								aria-selected={currentPath.includes('#customers')}
								className={'project--nav'}>
								{'Customers'}
							</p>
						</a>
					</div>
					<div>
						<a href={'#feedback'} onClick={(): void => set_currentPath('/#feedback')}>
							<p
								aria-selected={currentPath.includes('#feedback')}
								className={'project--nav'}>
								{'Feedback'}
							</p>
						</a>
					</div>
					<div>
						<a href={'#team'} onClick={(): void => set_currentPath('/#team')}>
							<p
								aria-selected={currentPath.includes('#team')}
								className={'project--nav'}>
								{'Team'}
							</p>
						</a>
					</div>
					<div>
						<a href={'#contact'} onClick={(): void => set_currentPath('/#contact')}>
							<p
								aria-selected={currentPath.includes('#contact')}
								className={'project--nav'}>
								{'Contact'}
							</p>
						</a>
					</div>
				</nav>
			</div>
		</header>
	);
}

function	AppWrapper(props: AppProps): ReactElement {
	const	{Component, pageProps, router} = props;


	return (
		<>
			<AppHead />
			<div id={'app'} className={'mx-auto mb-0 grid max-w-6xl grid-cols-12 flex-col gap-x-4 md:flex-row'}>
				<div className={'col-span-12 flex min-h-[100vh] w-full flex-col'}>
					<AppHeader />
					<Component
						key={router.route}
						router={props.router}
						{...pageProps} />
				</div>
				<div className={'col-span-12 mx-auto my-6 flex w-full flex-col justify-center'}>
					<p className={'pb-2 text-center text-base text-neutral-600'}>
						{'All Right Reserved! yAudit © 2023 Copyright'}
					</p>
					<div className={'text-center text-sm text-neutral-600'}>
						<Link
							className={'cursor-pointer hover:underline'}
							href={'/github'}
							target={'_blank'}>
							{'Github'}
						</Link>
						{' - '}
						<Link
							className={'cursor-pointer hover:underline'}
							href={'/twitter'}
							target={'_blank'}>
							{'Twitter'}
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

function	MyApp(props: AppProps): ReactElement {
	const	{Component, pageProps} = props;

	return (
		<WithYearn>
			<AppWrapper
				Component={Component}
				pageProps={pageProps}
				router={props.router} />
		</WithYearn>
	);
}

export default MyApp;

