import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import { PropsWithChildren, ReactElement, ReactNode } from 'react';

import { Timeline, Text } from '@mantine/core';
import {
  IconBriefcase,
  IconCampfireFilled,
  IconEggCracked,
  IconSchool,
} from '@tabler/icons-react';
import PaneContainer from './pane-container';
import Placeholder from './placeholder';
import WavyText from './wavy-text';

const IndentText = ({ children }: PropsWithChildren) => (
  <div className="ml-4">{children}</div>
);

export interface VoidTimeItemProps {
  time: string;
  title: string;
  body: string | ReactElement;
  order?: number;
  icon?: ReactNode;
}

const VoidTimeline = () => {
  const timelineData: VoidTimeItemProps[] = [
    {
      time: 'Unknown',
      title: 'Born',
      body: 'A wild little Sawa was born! 👶',
      icon: <IconEggCracked />,
    },
    {
      time: 'Aug. 2020',
      title: 'Graduate from University',
      body: (
        <>
          <p>
            Graduate from The Hong Kong University of Science and Technology
            (HKUST)
          </p>
          <p>Major BENG in Computer Science (COMP)</p>
        </>
      ),
      icon: <IconSchool />,
    },
    {
      time: 'Jul. 2020 - June. 2023',
      title: 'Analyst Programmer',
      body: (
        <ul className="list-disc">
          <li className="ml-2">React.js and React Native developer</li>
          <IndentText>
            Experience in integration of native SDK, bridge between react and
            native layer
          </IndentText>
          <IndentText>
            Experience in popular form validation and schema libraries, e.g.
            React Hook Form, Formik, Zod, Yup
          </IndentText>
          <li className="ml-2">.Net developer</li>
          <IndentText>
            Experience in .Net6, EntityFramework, Dapper, Microsoft SQL Server,
            Domain Driven Design (DDD)
          </IndentText>
          <li className="ml-2">Experience in develop OutSystem C# extension</li>
          <li className="ml-2">
            Experience in data cleaning and data migration
          </li>
          <li className="ml-2">
            Experience in Azure AD, OAuth, Microsoft Graph API, Microsoft
            Authentication Library (MSAL), Intune SDK, MAM, MDM, Conditional
            access
          </li>
          <li className="ml-2">
            Experience in Azure DevOps Pipeline tasks automation
          </li>
          <li className="ml-2">
            Experience in mobile application metrics logging in Azure AppCenter,
            Dynatrace
          </li>
          <li className="ml-2">
            Experience in mobile application OTA update using CodePush
          </li>
          <li className="ml-2">Participate in Agile Scrum Projects</li>
          <IndentText>👩‍💼 PMO - Data Migration</IndentText>
          <IndentText>🚍 Staff Bus Booking Application</IndentText>
          <IndentText>🚍 Free Shuttle Bus Application</IndentText>
          <IndentText>
            🚇 Smart Maintenance Data Management Application for Transportation
          </IndentText>
          <IndentText>
            💡 Enterprise Mobile Application Architecture Framework
          </IndentText>
          <IndentText>💡 Online Cable Disposal System</IndentText>
          <IndentText>
            💰 Retirement fund product online platform: standardize, streamline
            and automate the administration processes
          </IndentText>
        </ul>
      ),
    },
  ];
  return (
    <>
      <PaneContainer className="!bg-transparent !border-0 flex !items-start !justify-center !w-3/4 !h-1/2">
        <motion.div
          className="!w-fit !h-fit"
          variants={
            isMobile
              ? undefined
              : {
                  offscreen: {
                    scaleY: 0,
                    originY: 'top',
                    opacity: 0,
                  },
                  onscreen: {
                    scaleY: 1,
                    originY: 'top',
                    opacity: 1,
                    transition: {
                      duration: 1,
                    },
                  },
                }
          }
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <Timeline active={2} bulletSize={30} lineWidth={3} color="#6272a4">
            {timelineData.map((data, index) => (
              <Timeline.Item
                key={data.title}
                bullet={data.icon ?? <IconBriefcase />}
                lineVariant={
                  index === timelineData.length - 1 ? 'dotted' : 'solid'
                }
              >
                <motion.div
                  variants={
                    isMobile
                      ? undefined
                      : {
                          offscreen: {
                            opacity: 0,
                          },
                          onscreen: {
                            opacity: 1,
                            transition: {
                              duration: 0.5,
                              delay: (data.order ?? 1) * 0.5,
                            },
                          },
                        }
                  }
                  initial="offscreen"
                  whileInView="onscreen"
                  layout="position"
                  viewport={{ once: true }}
                >
                  <Text c="dimmed" size="sm">
                    {data.time}
                  </Text>
                  <Text size="md" mt={4}>
                    {data.title}
                  </Text>
                  <div className="m-4 text-xs">{data.body}</div>
                </motion.div>
              </Timeline.Item>
            ))}
            <Timeline.Item bullet={<IconCampfireFilled />}>
              <WavyText
                className="!mt-1 -ml-3"
                text="The journey continues 📱 🎮 💻"
                replay
              />
            </Timeline.Item>
          </Timeline>
        </motion.div>
      </PaneContainer>
      <Placeholder />
    </>
  );
};

export default VoidTimeline;
