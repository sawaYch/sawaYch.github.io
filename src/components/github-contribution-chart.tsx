import { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import PaneContainer from './pane-container';
import ActivityHeatMap from './activity-heat-map';
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

  const currentDate = useMemo(() => dayjs().format('YYYY-MM-DD'), []);

  const transformedData: {
    [date: string]: number;
  } = useMemo(() => {
    const d = data?.contributions.map((x) => ({ [x.date]: x.count }));
    if (d == null) return null;
    return Object.assign({}, ...d);
  }, [data]);

  if (!mounted) return null;

  return (
    <PaneContainer className="flex flex-col items-center justify-center p-4 my-1">
      {isLoading ? (
        <Spinner />
      ) : (
        <ActivityHeatMap
          values={transformedData}
          until={currentDate}
          radius={14}
          blockSize={10}
        />
      )}
    </PaneContainer>
  );
};

export default GithubContributionMap;
