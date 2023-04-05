/* eslint-disable @typescript-eslint/explicit-function-return-type */
const runtimeCaching = require('next-pwa/cache');
const {withPlausibleProxy} = require('next-plausible');
const withPWA = require('next-pwa')({
	dest: './public/',
	register: true,
	skipWaiting: true,
	runtimeCaching,
	buildExcludes: [/middleware-manifest.json$/]
});

module.exports = withPlausibleProxy()(withPWA({
	images: {
		domains: [
			'rawcdn.githack.com',
			'raw.githubusercontent.com',
			'placehold.co'
		]
	},
	async rewrites() {
		return [
			{
				source: '/js/script.js',
				destination: 'https://plausible.io/js/script.js'
			},
			{
				source: '/api/event',
				destination: 'https://plausible.io/api/event'
			}
		];
	},
	redirects() {
		return [
			{
				source: '/twitter',
				destination: 'https://twitter.com/yAuditDAO',
				permanent: true
			},
			{
				source: '/discord',
				destination: 'https://discord.gg/s9njyPNUca',
				permanent: true
			},
			{
				source: '/github',
				destination: 'https://github.com/yaudit',
				permanent: true
			},
			{
				source: '/yacademy',
				destination: 'yacademy.dev',
				permanent: true
			}
		];
	},
	env: {
		/* 🔵 - Yearn Finance **************************************************
		** Config over the RPC
		**********************************************************************/
		WEB_SOCKET_URL: {
			1: process.env.WS_URL_MAINNET,
			10: process.env.WS_URL_OPTIMISM,
			250: process.env.WS_URL_FANTOM,
			42161: process.env.WS_URL_ARBITRUM
		},
		JSON_RPC_URL: {
			1: 'https://1rpc.io/eth' || process.env.RPC_URL_MAINNET,
			10: process.env.RPC_URL_OPTIMISM,
			250: process.env.RPC_URL_FANTOM,
			42161: process.env.RPC_URL_ARBITRUM
		},
		ALCHEMY_KEY: process.env.ALCHEMY_KEY,
		INFURA_KEY: process.env.INFURA_KEY,
		TELEGRAM_BOT: process.env.TELEGRAM_BOT,
		TELEGRAM_CHAT: process.env.TELEGRAM_CHAT
	}
}));

