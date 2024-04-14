import { Spotlight } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';
import { rem } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import useSpotlightModuleActions from '../hooks/use-spotlight-module-actions';

const VoidSpotlight = () => {
  const spotlightActions = useSpotlightModuleActions();
  const { height } = useViewportSize();

  return (
    <Spotlight
      actions={spotlightActions}
      nothingFound="🚨 Oops! Not Found!"
      highlightQuery={false}
      shortcut={['space']}
      trapFocus={false} // prevent focus on search bar, mainly for better mobile UX
      scrollable
      maxHeight={height * 0.7}
      searchProps={{
        leftSection: (
          <IconSearch
            style={{ width: rem(20), height: rem(20) }}
            stroke={1.5}
          />
        ),
        placeholder: 'Search...',
      }}
    />
  );
};

export default VoidSpotlight;
