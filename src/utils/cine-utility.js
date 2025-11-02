export const getImagePath = (imageName) => {
  const url = `/src/assets/movie-covers/${imageName}`;
  const base = import.meta.url;
  const path = new URL(url, base).href;
  return path;
};
