import { get } from "http";

// Get the url of the Strapi API based om the env variable or the default local one.
export function getStrapiURL(path) {
  return `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOSTNAME}:${process.env.NEXT_PUBLIC_API_PORT}${path}`;
}

// This function will get the url of your medias depending on where they are hosted
export function getStrapiMedia(url) {
  if (url == null) {
    return null;
  }
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }
  return getStrapiURL(url);
}

// handle the redirection to the homepage if the page we are browsinng doesn't exists
export function redirectToHomepage() {
  return {
    redirect: {
      destination: `/`,
      permanent: false,
    },
  };
}


// This function will build the url to fetch on the Strapi API
export function getPageData(slug) {
  const slugToReturn = `/${slug}`;
  const apiUrl = `/api/pages?filters[slug][$eq]=${slug}&populate=deep`;
  console.log(getStrapiURL(apiUrl));
  return {
    data: getStrapiURL(apiUrl),
    slug: slugToReturn,
  };
}