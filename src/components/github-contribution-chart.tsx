import { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ActivityCalendar from 'react-activity-calendar';
import Tooltip from '@mui/material/Tooltip';
import { animated, useSpring } from 'react-spring';
import PaneContainer from './pane-container';
import Spinner from './spinner';

type Level = 0 | 1 | 2 | 3 | 4;

interface Activity {
  date: string;
  count: number;
  level: Level;
}

interface ApiResponse {
  total: {
    [year: number]: number;
    [year: string]: number; // 'lastYear;
  };
  contributions: Array<Activity>;
}

interface ApiErrorResponse {
  error: string;
}

const GithubContributionMap = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const githubContributionApi = useCallback(async () => {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/sawaych?y=last`
    );
    const d: ApiResponse | ApiErrorResponse = await response.json();

    if (!response.ok) {
      throw new Error((d as ApiErrorResponse).error);
    }

    return d as ApiResponse;
  }, []);

  const { data, isLoading } = useQuery(
    ['github-contribution'],
    githubContributionApi
  );

  const [props] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { tension: 350, friction: 250 },
    }),
    []
  );

  if (!mounted) return null;

  return (
    <PaneContainer className="flex flex-col items-center justify-center p-4 my-1">
      {isLoading || data?.contributions == null ? (
        <Spinner />
      ) : (
        <ActivityCalendar
          data={data.contributions}
          hideTotalCount
          hideColorLegend
          colorScheme="dark"
          blockRadius={14}
          blockSize={10}
          fontSize={10}
          theme={{
            dark: ['#383838', '#4D455D', '#bd93f9', '#ff79c6', '#ffb86c'],
          }}
          renderBlock={(block, activity) => {
            const cellContent = (
              <animated.g role="img" style={props}>
                {block}
              </animated.g>
            );

            if (activity.count === 0) {
              return cellContent;
            }
            return (
              <Tooltip
                role="tooltip"
                title={`${activity.count} energy earns on ${activity.date}`}
                placement="top"
                arrow
              >
                {cellContent}
              </Tooltip>
            );
          }}
        />
      )}
    </PaneContainer>
  );
};

export default GithubContributionMap;
