import PRODUCTS_IMG_1 from '@/assets/our-products/food.webp';
import PRODUCTS_IMG_2 from '@/assets/our-products/home-care.webp';
import PRODUCTS_IMG_3 from '@/assets/our-products/personal-care.webp';

const productTypes = ['FOOD & BEVERAGE', 'HOME CARE', 'PERSONAL CARE'];

const productImages = [PRODUCTS_IMG_1, PRODUCTS_IMG_2, PRODUCTS_IMG_3];
const productImageCounts = [9, 8, 23];

const generateSlug = (label) =>
  label.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');

export const productsCatalogue = productTypes.map((type, index) => ({
  id: generateSlug(type),
  imageSrc: productImages[index],
  label: type,
}));

export const productsCatalogueImageCounts = productTypes.reduce(
  (acc, type, index) => {
    acc[generateSlug(type)] = productImageCounts[index];
    return acc;
  },
  {}
);
