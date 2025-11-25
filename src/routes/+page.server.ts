import { env } from '$env/dynamic/private';

export function load() {
	return {
		NODE_ENV: env.NODE_ENV,
		NAME: env.NAME,
	};
}
