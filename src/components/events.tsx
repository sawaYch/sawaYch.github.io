/* eslint-disable react/style-prop-object */
import { Card, Tabs } from 'flowbite-react';
import { BsFlagFill } from '@react-icons/all-files/bs/BsFlagFill';
import { BsCalendarFill } from '@react-icons/all-files/bs/BsCalendarFill';
import { FaUniversity } from '@react-icons/all-files/fa/FaUniversity';
import tw from 'twin.macro';
import PaneContainer from './pane-container';
import CTFTimeBadge from './ctftime-badge';

const TabItemContainer = tw.div`grid gap-2 p-2 overflow-auto grid-cols-1 sm:grid-cols-2 h-[38rem] auto-rows-max auto-cols-max`;

const StyledUnorderedList = tw.ul`list-disc list-inside mt-2`;

const CardTitle = tw.h5`font-bold tracking-tight text-gray-900 dark:text-dracula-purple-300`;
const CardContent = tw.div`font-normal text-gray-700 dark:text-gray-400`;

const Events = () => {
  const customTabTheme = {
    base: 'flex flex-col gap-2 w-full',
    tabpanel: '',
    tablist: {
      styles: {
        underline:
          'flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700',
      },
      tabitem: {
        base: 'flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 ',
        styles: {
          underline: {
            base: 'rounded-t-lg',
            active: {
              on: 'transition-all ease-in-out duration-500 rounded-t-lg border-b-2 border-dracula-buffy-600 active',
              off: 'transition-all ease-in-out duration-500 border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300',
            },
          },
        },
      },
    },
  };

  const customCardTheme = {
    root: {
      base: 'flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800/30 backdrop-blur-sm',
      children: 'flex h-full w-full flex-col justify-center gap-4 p-6',
      horizontal: {
        off: 'flex-col',
        on: 'flex-col md:max-w-xl md:flex-row',
      },
      href: 'hover:bg-gray-100 dark:hover:bg-gray-700',
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
      title: 'HKCert CTF competition 2022 - Open Division',
      content: (
        <>
          <span>Nov. 2022</span>
          <div>Team HKVTBER@MYA🐼_SAI3_JAT1</div>
          <CTFTimeBadge link="https://ctftime.org/event/1722" />
          <StyledUnorderedList>
            <li>Open Division Ranking: 10 th place/ 73 teams</li>
            <li>Overall Division Ranking: 30th place/ 310 teams</li>
          </StyledUnorderedList>
        </>
      ),
    },
    {
      title: 'HKCert CTF competition 2021 - Open Division',
      content: (
        <>
          <span>Nov. 2021</span>
          <div>Team FlowerTea</div>
          <CTFTimeBadge link="https://ctftime.org/event/1432" />
          <StyledUnorderedList>
            <li>Open Division Ranking: 16 th place/ 64 teams</li>
            <li>Overall Division Ranking: 38 th place/ 240 teams</li>
          </StyledUnorderedList>
        </>
      ),
    },
    {
      title: 'HKCert CTF competition 2020 - Open Division',
      content: (
        <>
          <span>Aug. 2020</span>
          <div>Team T0061</div>
          <CTFTimeBadge link="https://ctftime.org/event/1145" />
          <StyledUnorderedList>
            <li>
              37<sup>th</sup> place
            </li>
          </StyledUnorderedList>
        </>
      ),
    },
  ];

  return (
    <PaneContainer className="!bg-transparent !border-0 flex flex-col !items-center !justify-center !w-3/4">
      <div className="flex flex-col items-center justify-center">
        <div className="w-fit">
          <div className="h-[1.5rem] -mb-8 -mx-10 bg-dracula-buffy-400/30 -skew-x-12 backdrop-blur-sm" />
          <div className="flex">
            <h2 className="z-50 !text-dracula-buffy-100">
              Events & Achievement
            </h2>{' '}
            <BsCalendarFill
              size="2rem"
              className="z-50 ml-2 text-dracula-buffy-200"
            />
          </div>
        </div>
      </div>
      <Tabs.Group
        aria-label="Events Tab"
        theme={customTabTheme}
        style="underline"
      >
        <Tabs.Item active icon={BsFlagFill} title="CTF">
          <TabItemContainer>
            {ctfEventData.map((it) => (
              <Card className="!w-full !h-fit" theme={customCardTheme}>
                <CardTitle>{it.title}</CardTitle>
                <CardContent>{it.content}</CardContent>
              </Card>
            ))}
          </TabItemContainer>
        </Tabs.Item>
        <Tabs.Item active icon={FaUniversity} title="Tertiary">
          <TabItemContainer>
            {universityEventData.map((it) => (
              <Card className="!w-full !h-fit" theme={customCardTheme}>
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

export default Events;
