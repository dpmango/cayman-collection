export const get2xImage = (img) => {
  if (!img) return null;

  const [base, ext] = img.split('.');

  return `${base}@2x.${ext} 2x`;
};
