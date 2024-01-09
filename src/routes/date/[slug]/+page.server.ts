import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
    const {slug} = event.params;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const dateEST = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    return { slug, time: dateEST }
}

export const prerender = 'auto';