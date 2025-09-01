// services/api_anime.js
const API_URL = 'https://graphql.anilist.co';
const ITEMS_PER_PAGE = 30;

async function fetchAnimes(graphqlQuery) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: graphqlQuery,
      variables: { page: 1 },
    }),
  });
  const { data } = await res.json();
  return data.Page.media;
}

export function getPopularAnimes() {
  const query = `
    query ($page: Int) {
      Page(page: $page, perPage: ${ITEMS_PER_PAGE}) {
        media(type: ANIME, sort: POPULARITY_DESC) {
          id
          title { english romaji }
          coverImage { large }
        }
      }
    }
  `;
  return fetchAnimes(query);
}

export function getAiringAnimes() {
  const query = `
    query ($page: Int) {
      Page(page: $page, perPage: ${ITEMS_PER_PAGE}) {
        media(type: ANIME, sort: TRENDING_DESC) {
          id
          title { english romaji }
          coverImage { large }
        }
      }
    }
  `;
  return fetchAnimes(query);
}

export function getTopRatedAnimes() {
  const query = `
    query ($page: Int) {
      Page(page: $page, perPage: ${ITEMS_PER_PAGE}) {
        media(type: ANIME, sort: SCORE_DESC) {
          id
          title { english romaji }
          coverImage { large }
        }
      }
    }
  `;
  return fetchAnimes(query);
}
