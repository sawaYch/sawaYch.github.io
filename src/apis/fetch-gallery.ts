import ApiFetch from './api-fetch';
import { formatDate } from '../utils/format-date';

type format = 'thumbnail' | 'medium' | 'small' | 'large';

interface CMSImage {
  name: string;
  alternativeText: string;
  captions: string;
  width: number;
  height: number;
  formats: {
    [k in format]: {
      name: string;
      width: number;
      height: number;
      url: string;
    };
  };
  url: string;
}

export interface GalleryData {
  id: string;
  name: string;
  captions: string;
  image: CMSImage[];
  updatedAt: string;
}

const appendAssetUrl = (input: {
  [k in format]: {
    name: string;
    width: number;
    height: number;
    url: string;
  };
}) => {
  Object.entries(input).forEach(([_name, entry]) => {
    // eslint-disable-next-line no-param-reassign
    entry.url = `${process.env.GATSBY_API_BASE_URL?.slice(0, -4)}${entry.url}`;
  });

  return input;
};

const fetchGallery = async () => {
  try {
    const res = await ApiFetch(
      '/galleries?populate=*&sort[0]=publishedAt:desc'
    );
    const jsonObject = await res.json();
    const formatData: GalleryData[] = jsonObject.data.map((d: any) => ({
      id: d.id,
      name: d.attributes.name,
      captions: d.attributes.captions,
      updatedAt: formatDate(d.attributes.updatedAt),
      image: d.attributes.image.data.map((img: any) => ({
        name: img.attributes.name,
        alternativeText: img.attributes.alternativeText,
        captions: img.attributes.captions,
        width: img.attributes.width,
        height: img.attributes.height,
        formats: appendAssetUrl(img.attributes.formats),
        url: `${process.env.GATSBY_API_BASE_URL?.slice(0, -4)}${
          img.attributes.url
        }`,
      })),
    }));
    return formatData;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('err', err);
  }
  return null;
};

export default fetchGallery;
