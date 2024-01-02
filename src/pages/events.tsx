/* eslint-disable react/style-prop-object */
import { PropsWithChildren } from 'react';
import { Card, Tabs } from 'flowbite-react';
import { BsFlagFill } from '@react-icons/all-files/bs/BsFlagFill';
import { BsCalendarFill } from '@react-icons/all-files/bs/BsCalendarFill';
import { FaUniversity } from '@react-icons/all-files/fa/FaUniversity';
import PaneContainer from '../components/pane-container';
import CTFTimeBadge from '../components/ctftime-badge';
import SectionTitle from '../components/section-title';

const TabItemContainer = ({ children }: PropsWithChildren) => (
  <div className="grid grid-cols-1 gap-2 p-2 overflow-auto sm:grid-cols-2 h-fit auto-rows-max auto-cols-max">
    {children}
  </div>
);

const StyledUnorderedList = ({ children }: PropsWithChildren) => (
  <ul className="mt-2 list-disc list-inside">{children}</ul>
);

const CardTitle = ({ children }: PropsWithChildren) => (
  <h5 className="font-bold tracking-tight text-dracula-purple-300">
    {children}
  </h5>
);

const CardContent = ({ children }: PropsWithChildren) => (
  <div className="font-normal text-gray-400">{children}</div>
);

const EventPage = () => {
  const customTabTheme = {
    base: 'flex flex-col gap-2 w-full',
    tabpanel: '',
    tablist: {
      styles: {
        underline: 'flex-wrap -mb-px border-b border-gray-700',
      },
      tabitem: {
        base: 'flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-500',
        styles: {
          underline: {
            base: 'rounded-t-lg',
            active: {
              on: 'transition-all ease-in-out duration-500 rounded-t-lg border-b-2 border-dracula-buffy-600 active',
              off: 'transition-all ease-in-out duration-500 border-b-2 border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-300',
            },
          },
        },
      },
    },
  };

  const customCardTheme = {
    root: {
      base: 'flex rounded-lg border shadow-md border-gray-700 bg-gray-800/30 backdrop-blur-sm',
      children: 'flex h-full w-full flex-col justify-center gap-4 p-6',
      horizontal: {
        off: 'flex-col',
        on: 'flex-col md:max-w-xl md:flex-row',
      },
      href: 'hover:bg-gray-700',
    },
    img: {
      base: '',
      horizontal: {
        off: 'rounded-t-lg',
        on: 'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg',
      },
    },
  };

  const universityEventData = [
    {
      title: 'HKUST Robotics Team, Robocon - War Dragon team',
      content: (
        <>
          <span>Nov. 2018 - 2019</span>
          <div className="uppercase">member, mentor</div>
          <StyledUnorderedList>
            <li>Micro Controller (STM32) Software Engineer</li>
            <li>Experience in robot control and senors fusion algorithm</li>
            <li>Collaborate with team members</li>
            <li>
              Train junior members, help organized college internal robotics
              competition
            </li>
          </StyledUnorderedList>
        </>
      ),
    },
    {
      title: 'Inter Tertiary Institute CTF contest organized by ASTRI',
      content: (
        <>
          <span>Nov. 2018 - 2019</span>
          <div>Team - No Shutdown</div>
          <StyledUnorderedList>
            <li>
              Gained experience in Reverse, PWN, web and Misc penetration
              testing skills
            </li>
          </StyledUnorderedList>
        </>
      ),
    },
  ];

  const ctfEventData = [
    {
      title: 'HKCert CTF 2023 - Open Division',
      content: (
        <>
          <span>Nov. 2023</span>
          <div>Team HKVTBER@MYA🐼_SAI3_JAT1</div>
          <CTFTimeBadge link="https://ctftime.org/event/2122" />
          <StyledUnorderedList>
            <li>Score: 2420</li>
            <li>Open Division Ranking: 17 th place/ 114 teams</li>
            <li>Overall Division Ranking: 45th place/ 312 teams</li>
          </StyledUnorderedList>
        </>
      ),
    },
    {
      title: 'SEKAI CTF 2023',
      content: (
        <>
          <span>AUG. 2023</span>
          <div>TeamMYA - HKVTBER@MYA🐼_SAI3_JAT1</div>
          <CTFTimeBadge link="https://ctftime.org/event/1923" />
          <StyledUnorderedList>
            <li>Score: 478</li>
            <li>with DGC Group & 米亞Discord Group眾院友</li>
            <li>Ranking: 188th place/ 981 teams</li>
          </StyledUnorderedList>
        </>
      ),
    },
    {
      title: 'HKCert CTF 2022 - Open Division',
      content: (
        <>
          <span>Nov. 2022</span>
          <div>Team HKVTBER@MYA🐼_SAI3_JAT1</div>
          <CTFTimeBadge link="https://ctftime.org/event/1722" />
          <StyledUnorderedList>
            <li>Score: 1500</li>
            <li>Open Division Ranking: 10 th place/ 73 teams</li>
            <li>Overall Division Ranking: 30th place/ 310 teams</li>
          </StyledUnorderedList>
        </>
      ),
    },
    {
      title: 'HKCert CTF 2021 - Open Division',
      content: (
        <>
          <span>Nov. 2021</span>
          <div>Team FlowerTea</div>
          <CTFTimeBadge link="https://ctftime.org/event/1432" />
          <StyledUnorderedList>
            <li>Score: 1150</li>
            <li>Open Division Ranking: 16 th place/ 64 teams</li>
            <li>Overall Division Ranking: 38 th place/ 240 teams</li>
          </StyledUnorderedList>
        </>
      ),
    },
    {
      title: 'HKCert CTF 2020 - Open Division',
      content: (
        <>
          <span>Aug. 2020</span>
          <div>Team T0061</div>
          <CTFTimeBadge link="https://ctftime.org/event/1145" />
          <StyledUnorderedList>
            <li>Score: 480</li>
            <li>
              37<sup>th</sup> place
            </li>
          </StyledUnorderedList>
        </>
      ),
    },
  ];

  return (
    <PaneContainer className="!bg-transparent !border-0 flex flex-col !items-center !justify-center !w-3/4 pt-10">
      <SectionTitle
        icon={
          <BsCalendarFill
            size="2rem"
            className="z-50 ml-2 text-dracula-buffy-200"
          />
        }
        text="Memories Created"
      />
      <Tabs.Group
        aria-label="Events Tab"
        theme={customTabTheme}
        style="underline"
      >
        <Tabs.Item active icon={BsFlagFill} title="CTF">
          <TabItemContainer>
            {ctfEventData.map((it) => (
              <Card
                key={it.title}
                className="!w-full !h-fit"
                theme={customCardTheme}
              >
                <CardTitle>{it.title}</CardTitle>
                <CardContent>{it.content}</CardContent>
              </Card>
            ))}
          </TabItemContainer>
        </Tabs.Item>
        <Tabs.Item active icon={FaUniversity} title="Tertiary">
          <TabItemContainer>
            {universityEventData.map((it) => (
              <Card
                key={it.title}
                className="!w-full !h-fit"
                theme={customCardTheme}
              >
                <CardTitle>{it.title}</CardTitle>
                <CardContent>{it.content}</CardContent>
              </Card>
            ))}
          </TabItemContainer>
        </Tabs.Item>
      </Tabs.Group>
    </PaneContainer>
  );
};

export default EventPage;
