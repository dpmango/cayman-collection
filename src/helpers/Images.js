export const get2xImage = (img) => {
  const [base, ext] = img.split('.');

  return `${base}@2x.${ext} 2x`;
};
