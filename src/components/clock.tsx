import dayjs from 'dayjs';
import { CgAppleWatch } from '@react-icons/all-files/cg/CgAppleWatch';
import { useEffect, useMemo, useState } from 'react';
import tw from 'twin.macro';
import useAnimationInterval from '../utils/use-animation-Interval';

const ClockContainer = tw.div`flex items-center`;

const Clock = () => {
  const dayFormat = 'DD/MM/YYYY ddd HH:mm:ss A';

  const [currentDateTime, setCurrentDateTime] = useState<string>(
    '01/01/1900 Sun 00:00:00 AM'
  );

  const setInterval = useAnimationInterval();

  useEffect(() => {
    const requestId = setInterval(
      () => setCurrentDateTime(dayjs().format(dayFormat)),
      1000
    );
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [setInterval]);

  const currentTimeZone = useMemo(
    () =>
      Intl.DateTimeFormat()
        .resolvedOptions()
        .timeZone.replace('_', ' ')
        .split('/')
        .pop(),
    []
  );

  return (
    <ClockContainer>
      <CgAppleWatch size="1.2em" />
      {currentDateTime} | {currentTimeZone}
    </ClockContainer>
  );
};

export default Clock;
