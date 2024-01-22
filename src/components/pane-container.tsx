import React, { PropsWithChildren, ReactElement } from 'react';
import cn from 'classnames';
import { FaRegWindowClose } from '@react-icons/all-files/fa/FaRegWindowClose';
import { FaRegWindowRestore } from '@react-icons/all-files/fa/FaRegWindowRestore';
import { FaRegWindowMinimize } from '@react-icons/all-files/fa/FaRegWindowMinimize';

interface PaneContainerProps {
  withFrame?: boolean;
  className?: string;
}

const PaneContainer = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<PaneContainerProps>
>(
  (props: PropsWithChildren<PaneContainerProps>, ref): ReactElement => (
    <>
      {props.withFrame ? (
        <div
          className={cn(
            'h-full border w-fit bg-dracula-darker border-dracula-aro',
            props.className
          )}
          ref={ref}
        >
          <div className="flex flex-col">
            <div className="flex items-center justify-end w-full h-4 pr-1 bg-dracula-blue gap-x-1">
              <FaRegWindowMinimize />
              <FaRegWindowRestore />
              <FaRegWindowClose />
            </div>
            <div className="p-4">{props.children}</div>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            'h-full border w-fit bg-dracula-darker border-dracula-aro',
            props.className
          )}
          ref={ref}
        >
          {props.children}
        </div>
      )}
    </>
  )
);

export default PaneContainer;
