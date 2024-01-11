import type { RequestHandler } from "./$types";

export const GET = (async (event) => {
  const title = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
    .then(response => response.json())
    .then(async storyIds => {
      const randomIdx = Math.floor(Math.random() * storyIds.length);
      const storyId = storyIds[randomIdx];
      console.log({ storyId })
      return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
        .then(response => response.json())
        .then(story => {
          return (story.title) as string;
        })
    })
  event.setHeaders({
    'Cache-Control': 'public, max-age=0, s-maxage=60, stale-while-revalidate=59',
  })
  return new Response(JSON.stringify({ title }))
}) satisfies RequestHandler;