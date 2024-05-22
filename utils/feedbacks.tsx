
import type {ReactElement} from 'react';

export type TFeeback = {
	from: string;
	content: string | ReactElement;
}

const	FEEDBACKS: TFeeback[] = [
	{
		from: 'Manifold Finance',
		content: 'We would like to especially thank the team at @yAcademyDAO for their audit which you can find here. We give them a 9/10. Logarithmic scale.'
	},
	{
		from: 'Temple DAO',
		content: 'This process has been very good and far better than past experiences - so kudos to the team.'
	},
	{
		from: 'Get Protocol',
		content: 'Amazing stuff, really pleased with it. Very solid work from yourself and the yAcademy troop.'
	},
	{
		from: 'Curve Finance',
		content: 'yAudit looked at our core infra in a very timely manner, made availabilities based on the urgency of our needs and helped deliver a very good audit of a codebase even though they were not the first external reviewers.'
	},
	{
		from: 'Stryke',
		content: 'Great audit partners and overall experience from scoping to audits. yAudits is currently securing Stryke\'s mainnet contracts as well as partners building on Stryke\'s underlying tech'
	},
	{
		from: 'Sickle',
		content: 'yAudit have been a pleasure to work with, digging deep into the codebase and discovering edge cases. Will be staying with them!'

	}
];


export default FEEDBACKS;
