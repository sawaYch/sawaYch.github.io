import { graphql, navigate, useStaticQuery } from 'gatsby';
import { useCallback, useMemo } from 'react';
import { Text, Badge, Card, Group, Image } from '@mantine/core';

import { IconArticle } from '@tabler/icons-react';
import { formatDateMonthName } from '../utils/format-date';
import getImageUrl from '../utils/getImageUrl';
import PaneContainer from './pane-container';
import Placeholder from './placeholder';

interface LatestPostCardProps {
  data: Queries.LatestPostQuery['allStrapiArticle']['nodes'][0];
  onClick: () => void;
}

const LatestPostCard = ({ data, onClick }: LatestPostCardProps) => {
  const sortedTag = useMemo(() => {
    const tags = (
      data.tags as {
        name: string;
        color: string;
      }[]
    ).sort((prev, next) => {
      if (prev.name === next.name) return 0;
      if (prev.name > next.name) return 1;
      return -1;
    });
    return tags;
  }, [data.tags]);

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      onClick={onClick}
      className="transition-all border-4 cursor-pointer latest-post-border"
    >
      <Card.Section>
        <Image
          src={getImageUrl(data.cover?.formats?.medium?.url ?? '')}
          className="brightness-[0.5] h-full w-full bg-clip-text"
        />
      </Card.Section>
      <Group justify="space-between" mt="md" mb="xs" className="flex flex-col">
        <Text fw={900} className="flex flex-row gap-2 text-center">
          <IconArticle />
          {data.title}
        </Text>
        <div className="flex flex-wrap gap-1 uppercase">
          {sortedTag != null &&
            sortedTag.map((t) => (
              <Badge key={t!.name} color={t!.color as string} size="xs">
                {t!.name as string}
              </Badge>
            ))}
        </div>
        <div className="flex text-xs uppercase">
          {formatDateMonthName(data.publishedAt ?? '')}
        </div>
      </Group>
    </Card>
  );
};

const LatestPost = () => {
  const data: Queries.LatestPostQuery = useStaticQuery(graphql`
    query LatestPost {
      allStrapiArticle(sort: { publishedAt: DESC }) {
        nodes {
          id
          title
          slug
          publishedAt
          tags {
            name
            color
          }
          cover {
            formats {
              medium {
                url
              }
            }
          }
        }
      }
    }
  `);

  const latestPost = data.allStrapiArticle.nodes[0];

  const handleReadPost = useCallback(() => {
    navigate(`/blog/${latestPost.slug}`);
  }, [latestPost.slug]);

  return (
    <>
      <PaneContainer className="!bg-transparent flex flex-col !items-center !justify-center !w-3/4 !h-4/5 !border-none">
        <div className="self-start my-8 text-xl uppercase">
          # Latest Post <span className="animate-ping">█</span>
        </div>
        <LatestPostCard
          key={latestPost.id}
          data={latestPost}
          onClick={handleReadPost}
        />
      </PaneContainer>
      <Placeholder />
    </>
  );
};

export default LatestPost;
