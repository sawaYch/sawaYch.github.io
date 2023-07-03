import { Timeline } from 'flowbite-react';
import { motion } from 'framer-motion';
import { GiVampireDracula } from '@react-icons/all-files/gi/GiVampireDracula';
import { FaSchool } from '@react-icons/all-files/fa/FaSchool';
import { FaBaby } from '@react-icons/all-files/fa/FaBaby';

import tw from 'twin.macro';
import PaneContainer from './pane-container';
import VoidTimelineItem, { VoidTimeItemProps } from './void-timeline-item';
import WavyText from './wavy-text';

const IndentText = tw.div`ml-8`;

const VoidTimeline = () => {
  const timelineData: VoidTimeItemProps[] = [
    {
      time: 'Unknown',
      title: 'Born',
      body: 'A wild little Sawa was born! 👶',
      icon: FaBaby,
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
      icon: FaSchool,
    },
    {
      time: 'Jul. 2020 - June. 2023',
      title: 'Analyst Programmer',
      body: (
        <ul className="list-disc">
          <li className="ml-4">React.js and React Native developer</li>
          <IndentText>
            Experience in integration of native SDK, bridge between react and
            native layer
          </IndentText>
          <IndentText>
            Experience in Popular form validation and schema libraries
          </IndentText>
          <li className="ml-4">.Net core developer</li>
          <IndentText>
            Experience in .Net6, EntityFramework, Dapper, Microsoft SQL Server
          </IndentText>
          <li className="ml-4">Experience in develop OutSystem C# extension</li>
          <li className="ml-4">
            Experience in data cleaning and data migration
          </li>
          <li className="ml-4">
            Experience in Azure AD, OAuth, Microsoft Graph API, Microsoft
            Authentication Library (MSAL), Intune SDK, MAM, MDM, Conditional
            access
          </li>
          <li className="ml-4">
            Experience in Azure DevOps Pipeline tasks automation
          </li>
          <li className="ml-4">
            Experience in mobile application metrics logging in Azure AppCenter,
            Dynatrace
          </li>
          <li className="ml-4">
            Experience in mobile application OTA update using CodePush
          </li>
          <li className="ml-4">Participate in Agile Scrum Projects</li>
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
    <PaneContainer className="!bg-transparent !border-0 flex !items-start !justify-center !w-3/4 !h-1/2">
      <motion.div
        className="!w-fit !h-fit"
        variants={{
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
        }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        <Timeline className="w-full border-gray-700 dark:border-gray-200 transition-color-apply">
          {timelineData.map((data, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <VoidTimelineItem {...data} key={index} order={index} />
          ))}
        </Timeline>
        <GiVampireDracula size="2rem" className="-mt-10 -ml-4" />
        <WavyText
          className="!mt-1 -ml-3"
          text="The journey continues 📱 🎮 💻"
          replay
        />
      </motion.div>
    </PaneContainer>
  );
};

export default VoidTimeline;
