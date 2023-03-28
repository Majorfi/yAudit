import React, {Fragment, useState} from 'react';
import {Listbox, Transition} from '@headlessui/react';
import {Button} from '@yearn-finance/web-lib/components/Button';

import IconChevronDown from './icons/IconChevronDown';

import type {ReactElement} from 'react';

type TTabsProps = {
	selectedIndex: number,
	set_selectedIndex: React.Dispatch<React.SetStateAction<number>>
};

function	Tabs({selectedIndex, set_selectedIndex}: TTabsProps): ReactElement {
	return (
		<div className={'w-full'}>
			<div>
				<nav className={'hidden flex-row items-center space-x-10 md:flex'}>
					<button onClick={(): void => set_selectedIndex(0)}>
						<p
							title={'General'}
							aria-selected={selectedIndex === 0}
							className={'hover-fix tab'}>
							{'General'}
						</p>
					</button>
					<button onClick={(): void => set_selectedIndex(1)}>
						<p
							aria-selected={selectedIndex === 1}
							title={'Auditing Services'}
							className={'hover-fix tab'}>
							{'Auditing Services'}
						</p>
					</button>
					<button onClick={(): void => set_selectedIndex(2)}>
						<p
							aria-selected={selectedIndex === 2}
							title={'Fellowship Program'}
							className={'hover-fix tab'}>
							{'Fellowship Program'}
						</p>
					</button>
					<button onClick={(): void => set_selectedIndex(3)}>
						<p
							aria-selected={selectedIndex === 3}
							title={'Guest Auditor Program'}
							className={'hover-fix tab'}>
							{'Guest Auditor Program'}
						</p>
					</button>
				</nav>
				<div className={'mt-[-2px] hidden h-[2px] w-full bg-neutral-300 md:block'} />
			</div>
			<div className={'relative z-50 flex w-full md:hidden'}>
				<Listbox
					value={selectedIndex}
					onChange={(value): void => set_selectedIndex(value)}>
					{({open}): ReactElement => (
						<div className={'w-full'}>
							<div className={'w-full'}>
								<Listbox.Button
									className={'flex h-10 w-full flex-row items-center border border-neutral-300 bg-neutral-200 p-0 px-4 font-bold'}>
									<div className={'relative flex flex-row items-center'}>
										{selectedIndex === 0 && ('General')}
										{selectedIndex === 1 && ('Auditing Services')}
										{selectedIndex === 2 && ('Fellowship Program')}
										{selectedIndex === 3 && ('Guest Auditor Program')}
									</div>
									<div className={'absolute right-4'}>
										<IconChevronDown
											className={`transition-transform ${open ? 'rotate-0' : '-rotate-90'}`} />
									</div>
								</Listbox.Button>
							</div>
							<Transition
								as={Fragment}
								show={open}
								enter={'transition duration-100 ease-out'}
								enterFrom={'transform scale-95 opacity-0'}
								enterTo={'transform scale-100 opacity-100'}
								leave={'transition duration-75 ease-out'}
								leaveFrom={'transform scale-100 opacity-100'}
								leaveTo={'transform scale-95 opacity-0'}>
								<Listbox.Options style={{scrollbarWidth: 'thin'}} className={'yearn--listbox-menu'}>
									<Listbox.Option className={'yearn--listbox-menu-item'} value={0}>
										{'General'}
									</Listbox.Option>
									<Listbox.Option className={'yearn--listbox-menu-item'} value={1}>
										{'Auditing Services'}
									</Listbox.Option>
									<Listbox.Option className={'yearn--listbox-menu-item'} value={2}>
										{'Fellowship Program'}
									</Listbox.Option>
									<Listbox.Option className={'yearn--listbox-menu-item'} value={3}>
										{'Guest Auditor Program'}
									</Listbox.Option>
								</Listbox.Options>
							</Transition>
						</div>
					)}
				</Listbox>
			</div>
		</div>
	);
}

function	TabGeneral(): ReactElement {
	return (
		<div className={'w-full md:w-8/12'}>
			<h3 className={'mb-2 text-xl font-bold text-neutral-900 md:mb-4'}>{'Quick Brief'}</h3>
			<p className={'mb-10 text-base text-neutral-600'}>{'yAudit is an auditing collective made up of the best auditors hand-selected from the yAcademy training program. Delivering high quality smart contract security audits under the yAcademy brand since 2021, yAudit brings an attention to detail above and beyond your standard auditing firm.'}</p>

			<h3 className={'mb-2 text-xl font-bold text-neutral-900 md:mb-4'}>{'We are tackling a (human) scalability problem'}</h3>
			<p className={'mb-4 text-base text-neutral-600 md:mb-6'}>{'Ethereum is on a path towards a gloriously scalable future thanks to innovations such as interactive provers, ZK-Rollups, efficient commitment schemes, and data-availability sampling. These innovations are the fruits of years of uncompromising focus on a maximally decentralized, secure, and credibly neutral blockchain.'}</p>
			<p className={'mb-4 text-base text-neutral-600 md:mb-6'}>{'But there are bottlenecks that need scaling.'}</p>
			<p className={'mb-4 text-base text-neutral-600 md:mb-6'}>{'There is an acute shortage of software auditing talent. Considering how much value is at stake in blockchain systems, solving this bottleneck is essential to getting these trust-minimized systems for broader adoption.'}</p>
			<p className={'mb-6 text-base text-neutral-600'}>{'Our model takes a different approach to auditing. We are nimble, with minimal administrative overhead. We audit communally, in a collaborative environment between our residents/mentors/guest auditors on one side, and our fellows on another.'}</p>
			<a
				href={'https://yacademy.dev/about/'}
				target={'_blank'}
				rel={'noreferrer'}>
				<Button>
					{'Discover more about us'}
				</Button>
			</a>
		</div>
	);
}
function	TabAuditing(): ReactElement {
	return (
		<div className={'w-full md:w-8/12'}>
			<h3 className={'mb-2 text-xl font-bold text-neutral-900 md:mb-4'}>{'We be auditing, always.'}</h3>
			<p className={'mb-4 text-base text-neutral-600 md:mb-6'}>{'During our fellowship programs, your code would be audited by everyone: residents, guest auditors, and fellows. Everyone submits their findings. Our residents will then verifty and curate the findings, and send you a unified report.'}</p>
			<p className={'mb-6 text-base text-neutral-600'}>{'If we’re not running a fellowship at the time you requested an audit, your codebase will be audited by our residents. As there are no fellows to mentor, your codebase will be their only focus.'}</p>
			<a
				href={'https://reports.yacademy.dev/'}
				target={'_blank'}
				rel={'noreferrer'}>
				<Button>
					{'Explore completed reports'}
				</Button>
			</a>
		</div>
	);
}
function	TabFellowship(): ReactElement {
	return (
		<div className={'w-full md:w-8/12'}>
			<h3 className={'mb-2 text-xl font-bold text-neutral-900 md:mb-4'}>{'We be auditing, always.'}</h3>
			<p className={'mb-4 text-base text-neutral-600 md:mb-6'}>{'yAcademy fellowships are not introductory programs to software auditing. They are trial-by-fire programs where you will audit pre- or in-production codebases, and the stakes are very high.'}</p>
			<ul className={'mb-4 ml-6 list-outside list-disc'}>
				<li className={'text-base text-neutral-600'}>{'You will be auditing alongside our resident and guest auditors.'}</li>
				<li className={'text-base text-neutral-600'}>{'You will be expected to participate and add value to the discussions.'}</li>
				<li className={'text-base text-neutral-600'}>{'You will be expected to be fluent at setting up test environments, and run toolings.'}</li>
				<li className={'text-base text-neutral-600'}>{'You are not required to have had experience in auditing or coding in the Web3 space, but you must be proficient in software engineering generally (hence, Web2 developers are welcome to apply)'}</li>
				<li className={'text-base text-neutral-600'}>{'The time commitment is >=20 hours per week.'}</li>
			</ul>
			<p className={'mb-6 text-base text-neutral-600'}>{'If you think this program is advanced for you, fear not, you can still join after going through an introductory program such as Secureum. If you prefer to fly solo, you can bootstrap yourself and hunt for bounties on Immunefi. Then, come back and apply, we would love to boost your progress to an advanced level.'}</p>
			<a
				href={'https://yacademy.dev/fellowship-program/'}
				target={'_blank'}
				rel={'noreferrer'}>
				<Button>
					{'Learn more'}
				</Button>
			</a>
		</div>
	);
}
function	TabGuestAuditor(): ReactElement {
	return (
		<div className={'w-full md:w-8/12'}>
			<h3 className={'mb-2 text-xl font-bold text-neutral-900 md:mb-4'}>{'We be auditing, always.'}</h3>
			<p className={'mb-4 text-base text-neutral-600 md:mb-6'}>{'Auditing is a lonely business, but it doesn’t have to be that way.'}</p>
			<p className={'mb-4 text-base text-neutral-600 md:mb-6'}>{'If you have a track record in the security space (audits, bounties, or security research), we welcome you to be our guest for 1-2 weeks.'}</p>
			<p className={'mb-4 text-base text-neutral-600 md:mb-6'}>{'You will be prepped and supported by our resident auditors and core staff. All you have to do is show up and engage with our residents and fellows for the duration of 1 auditing sprint (typically 1-2 weeks).'}</p>
			<p className={'mb-6 text-base text-neutral-600'}>{'You will be given access to the codebase well in advance to familiarize yourself with it. Our auditing sprints are a mix of sync calls and async discussions. Our fellows work in groups, and you’ll have access to their groups to participate and mentor, alongside our resident auditors who are always there as well.'}</p>
			<a href={'#contact'}>
				<Button>
					{'Contact us'}
				</Button>
			</a>
		</div>
	);
}

function	SectionAbout(): ReactElement {
	const [selectedIndex, set_selectedIndex] = useState(0);

	return (
		<section className={'mb-28 w-full items-center md:mb-[120px]'}>
			<div className={'mb-6 md:mb-10'}>
				<h2 className={'text-3xl font-bold'}>{'About'}</h2>
			</div>

			<Tabs
				selectedIndex={selectedIndex}
				set_selectedIndex={set_selectedIndex} />


			<div className={'mt-8 w-full'}>
				{selectedIndex === 0 && <TabGeneral />}
				{selectedIndex === 1 && <TabAuditing />}
				{selectedIndex === 2 && <TabFellowship />}
				{selectedIndex === 3 && <TabGuestAuditor />}
			</div>
		</section>
	);
}

export default SectionAbout;
