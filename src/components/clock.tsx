import dayjs from 'dayjs';
import { CgAppleWatch } from '@react-icons/all-files/cg/CgAppleWatch';
import { useEffect, useMemo, useState } from 'react';
import tw from 'twin.macro';

const ClockContainer = tw.div`flex items-center`;

const Clock = () => {
  const dayFormat = 'DD/MM/YYYY ddd HH:mm A';

  const [currentDateTime, setCurrentDateTime] = useState<string>(
    dayjs().format(dayFormat)
  );

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentDateTime(dayjs().format(dayFormat)),
      60000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

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
