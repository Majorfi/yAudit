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
Email: ${req.body.email}
Website: ${req.body.website}
Subject: ${req.body.subject}
Message: ${req.body.description}
------------------------------------------------------------------`);
		return res.status(200).json(true);
	} catch (error) {
		return res.status(500).json(false);
	}
}
