import {Telegram} from 'telegraf';

import type {NextApiRequest, NextApiResponse} from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<boolean>): Promise<void> {
	const telegram = new Telegram(process.env.TELEGRAM_BOT as string);
	try {
		await telegram.sendMessage(
			process.env.TELEGRAM_CHAT as string, `
-------------------------------------------------------------------
You got a new message from your website contact form:
Name: ${req.body.name}
Telegram username: ${req.body.tguser}
Protocol: ${req.body.protocol}
Preferred audit completion date: ${req.body.date}
Website: ${req.body.website}
Github repo link: ${req.body.github}
Additional information: ${req.body.message}
------------------------------------------------------------------`);
		return res.status(200).json(true);
	} catch (error) {
		return res.status(500).json(false);
	}
}
