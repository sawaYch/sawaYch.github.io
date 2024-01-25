import cn from 'classnames';
import { ReactElement } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Paper, Text } from '@mantine/core';
import PaneContainer from './pane-container';
import Placeholder from './placeholder';

interface SkillCardProps {
  className?: string;
}

interface SkillCardItemProps {
  title: string;
  content: string;
  icon: ReactElement;
}

const SkillCardItem = ({ title, content, icon }: SkillCardItemProps) => (
  <div className="flex flex-col items-center justify-center rounded-lg outline outline-offset-4 outline-dracula-darker-900 drop-shadow-[2px_2px_2px_rgba(125,116,163,0.35)]">
    <Paper
      shadow="xs"
      p="xl"
      className="items-center justify-center w-full h-full text-center rounded-lg bg-dracula-darker-900"
    >
      <div className="mb-4 -mt-24">{icon}</div>
      <Text size="lg" className="font-bold text-dracula-cyan-300">
        {title}
      </Text>
      <Text size="sm" className="font-thin">
        {content}
      </Text>
    </Paper>
  </div>
);

const skillData: SkillCardItemProps[] = [
  {
    title: 'FullStack',
    content:
      'Proficient in front-end and back-end development, capable of creating dynamic web applications with user-friendly interfaces.',
    icon: (
      <StaticImage
        className="pointer-events-none select-none"
        src="../images/fullstack.png"
        alt="skill_1_icon"
        width={128}
        height={128}
        placeholder="blurred"
      />
    ),
  },
  {
    title: 'System Design',
    content:
      'Skilled in designing scalable and efficient systems by applying software engineering principles and design patterns, ensuring robustness and easy integration.',
    icon: (
      <StaticImage
        className="pointer-events-none select-none"
        src="../images/system-design.png"
        alt="skill_2_icon"
        width={128}
        height={128}
        placeholder="blurred"
      />
    ),
  },
  {
    title: 'MAM & MDM Integration',
    content:
      'Enable efficient control and management of mobile devices, applications, and data within organizations, facilitating smooth deployment and updates across various devices, ensuring a seamless user experience and maximizing productivity.',
    icon: (
      <StaticImage
        className="pointer-events-none select-none"
        src="../images/mam-mdm.png"
        alt="skill_3_icon"
        width={128}
        height={128}
        placeholder="blurred"
      />
    ),
  },
  {
    title: 'DevOps',
    content:
      'Streamlines the software development lifecycle by automating build, deployment, and testing processes, leveraging cloud platforms and containerization for scalability and reliability.',
    icon: (
      <StaticImage
        className="pointer-events-none select-none"
        src="../images/devops.png"
        alt="skill_4_icon"
        width={128}
        height={128}
        placeholder="blurred"
      />
    ),
  },
];

const SkillCard = ({ className }: SkillCardProps) => (
  <>
    <PaneContainer
      className={cn(
        '!bg-transparent !border-0 flex !items-start !justify-center !w-3/4 !h-1/2',
        className
      )}
    >
      <div className="grid grid-cols-1 gap-x-24 gap-y-24 sm:grid-cols-2 sm:w-2/3">
        {skillData.map((data) => (
          <SkillCardItem key={data.title} {...data} />
        ))}
      </div>
    </PaneContainer>
    <Placeholder />
  </>
);

export default SkillCard;
