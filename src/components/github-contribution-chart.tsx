import { useMemo } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { animated, useSpring } from 'react-spring';

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
    <div className="w-full h-full flex flex-col items-center justify-center bg-opacity-60 bg-dracula-darker border border-dracula-aro p-4">
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
                <animated.g
                  id={activity.date}
                  key={activity.date}
                  style={props}
                >
                  {block}
                </animated.g>
              )}
            </>
          )}
        />
      </div>
    </div>
  );
};

export default GithubContributionMap;
