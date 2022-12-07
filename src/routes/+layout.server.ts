import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    console.log("LOGGING ON");
    console.log('env', env);
  return {
  };
}
