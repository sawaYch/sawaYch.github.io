import { useQuery } from '@tanstack/react-query';
import Layout from '../components/layout';
import fetchArtworks from '../apis/fetch-artworks';

const ArtworksPage = () => {
  const { data } = useQuery(['artworks'], fetchArtworks);
  return (
    <Layout>
      Artworks Page <div>{JSON.stringify(data)}</div>
    </Layout>
  );
};

export default ArtworksPage;
