
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
		from: 'Anon Protocol',
		content: 'Just gave a quick look, but wow. This is extremely thorough. Thank you so much.'
	}
];


export default FEEDBACKS;
