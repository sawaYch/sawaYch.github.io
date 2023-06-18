import { useMemo } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { GridLoader } from 'react-spinners';
import { animated, useSpring } from 'react-spring';
import Tooltip from '@mui/material/Tooltip';

const GithubContributionMap = () => {
  const theme = useMemo(
    () => ({
      light: ['#373a4d', '#d3b6fc'] as [from: string, to: string],
      dark: ['#373a4d', '#d3b6fc'] as [from: string, to: string],
    }),
    []
  );

  const [props] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { tension: 350, friction: 500 },
    }),
    []
  );

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-opacity-70 bg-dracula-darker border border-dracula-aro p-4">
      <div className="flex w-full justify-center items-center">
        <GridLoader color="#bd93f9" size={2} />
        <hr className="grow ml-2 mr-2 border-dracula-dark border border-dashed" />
        <GridLoader color="#bd93f9" size={2} />
      </div>
      <div className="my-1">
        <GitHubCalendar
          username="sawaych"
          hideColorLegend
          hideTotalCount
          blockRadius={14}
          style={{ color: '#d3b6fc' }}
          theme={theme}
          renderBlock={(block, activity) => (
            <>
              {activity.count === 0 ? (
                block
              ) : (
                <Tooltip
                  title={`${activity.count} energy earns on ${activity.date}`}
                  placement="top"
                  arrow
                >
                  <animated.g
                    id={activity.date}
                    key={activity.date}
                    style={props}
                  >
                    {block}
                  </animated.g>
                </Tooltip>
              )}
            </>
          )}
        />
      </div>
      <div className="flex w-full justify-center items-center">
        <GridLoader color="#bd93f9" size={2} />
        <hr className="grow ml-2 mr-2 border-dracula-dark border border-dashed" />
        <GridLoader color="#bd93f9" size={2} />
      </div>
    </div>
  );
};

export default GithubContributionMap;
