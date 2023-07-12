import { PropsWithChildren, FC, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const RootElement: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            structuralSharing: false,
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      }),
    []
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default RootElement;
