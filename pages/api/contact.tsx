import {Telegram} from 'telegraf';

import type {NextApiRequest, NextApiResponse} from 'next';
import type {TBalanceData} from '@yearn-finance/web-lib/hooks/types';
import type {TDict} from '@yearn-finance/web-lib/types';

export type TGetBatchBalancesResp = {balances: TDict<TBalanceData>, chainID: number};
export default async function handler(req: NextApiRequest, res: NextApiResponse<boolean>): Promise<void> {
	const telegram = new Telegram(process.env.TELEGRAM_BOT as string);
	try {
		const	answer = await telegram.sendMessage(
			process.env.TELEGRAM_CHAT as string, `
-------------------------------------------------------------------
You got a new message from your website contact form:
Name: ${req.body.name}
Email: ${req.body.email}
Website: ${req.body.website}
Subject: ${req.body.subject}
Message: ${req.body.description}
------------------------------------------------------------------`);
		console.log(answer);
		return res.status(200).json(true);
	} catch (error) {
		return res.status(500).json(false);
	}
}
