import { Badge, Card, Group, Indicator, Text } from '@mantine/core';
import { IconGrain } from '@tabler/icons-react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import PaneContainer from './pane-container';
import Placeholder from './placeholder';

interface Project {
  name: string;
  languages: string[];
  description: string;
  // eslint-disable-next-line react/no-unused-prop-types
  isNew?: boolean;
  url: string;
  image?: IGatsbyImageData;
}

const projectData: Project[] = [
  {
    name: 'myaPoll',
    languages: ['Typescript', 'NextJS'],
    description:
      'Youtube live stream poll app powered by Next & official data APIv3.',
    isNew: true,
    url: 'https://github.com/sawaYch/myaPoll',
  },
  {
    name: 'next-youtube-livechat',
    languages: ['Typescript', 'NextJS', 'React Hook Library'],
    description:
      'Fetch YouTube live chat without official API using NextJS. Package available on NPM registry.',
    isNew: true,
    url: 'https://github.com/sawaYch/next-youtube-livechat',
  },
  {
    name: 'sawaYch.github.io',
    languages: ['Typescript', 'Gatsby'],
    description: "Nice to meet you.\nCodebase of Sawa's personal site.",
    url: 'https://github.com/sawaYch/sawaYch.github.io',
  },
  {
    name: 'mya88',
    languages: ['Typescript', 'NextJS'],
    description:
      'Youtube live stream chat message viewer powered by Next & official data APIv3.',
    url: 'https://github.com/sawaYch/mya88',
  },
];

const ProjectCard = ({ name, languages, description, url, image }: Project) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <Card
      key={name}
      withBorder
      shadow="sm"
      radius="md"
      className="bg-[#1b2735]/75 backdrop-md h-fit cursor-pointer"
    >
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text fw={500}>{name}</Text>
          <IconGrain size="1rem" color="gray" />
        </Group>
      </Card.Section>
      {image && (
        <Card.Section>
          <GatsbyImage
            className="pointer-events-none select-none"
            image={image}
            alt={`${name}-image`}
          />
        </Card.Section>
      )}
      <pre className="mt-2 text-sm text-gray-400 whitespace-pre-wrap">
        {description}
      </pre>
      <Card.Section mt="xl" p="sm">
        <div className="flex flex-wrap gap-1">
          {languages.map((lang) => (
            <Badge key={`${name}-${lang}`} color="indigo">
              {lang}
            </Badge>
          ))}
        </div>
      </Card.Section>
    </Card>
  </a>
);

const ProjectCardWrapper = ({ isNew, ...props }: Project) =>
  isNew ? (
    <Indicator inline label="✨Latest✨" size={20}>
      <ProjectCard key={props.name} {...props} />
    </Indicator>
  ) : (
    <ProjectCard key={props.name} {...props} />
  );

const PinnedProject = () => {
  const data: Queries.ProjectImageFilesQuery = useStaticQuery(graphql`
    query ProjectImageFiles {
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          relativeDirectory: { eq: "projects" }
        }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(
                width: 720
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <PaneContainer className="!bg-transparent !border-0 flex flex-col !items-center !justify-center !w-3/4 !h-1/2">
        <div className="self-start my-8 text-xl uppercase">
          # Recent Projects <span className="animate-ping">█</span>
        </div>
        <div className="grid w-full grid-cols-1 gap-x-24 gap-y-24 sm:grid-cols-2">
          {projectData.map((d) => {
            const imageNode = data.allFile.edges.find((queryData) =>
              queryData.node.name.toLowerCase().includes(d.name.toLowerCase())
            );
            return (
              <ProjectCardWrapper
                key={d.name}
                image={imageNode?.node?.childImageSharp?.gatsbyImageData}
                {...d}
              />
            );
          })}
        </div>
      </PaneContainer>
      <Placeholder />
    </>
  );
};

export default PinnedProject;
