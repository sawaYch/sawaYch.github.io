import React, { PropsWithChildren, ReactElement } from 'react';
import tw from 'twin.macro';
import { FaRegWindowClose } from '@react-icons/all-files/fa/FaRegWindowClose';
import { FaRegWindowRestore } from '@react-icons/all-files/fa/FaRegWindowRestore';
import { FaRegWindowMinimize } from '@react-icons/all-files/fa/FaRegWindowMinimize';

const StyledPaneContainerBody = tw.div`w-fit h-full bg-dracula-darker border border-dracula-aro`;

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
        <StyledPaneContainerBody className={props.className} ref={ref}>
          <div className="flex flex-col">
            <div className="flex items-center justify-end w-full h-4 bg-dracula-dracula-700 gap-x-1">
              <FaRegWindowMinimize />
              <FaRegWindowRestore />
              <FaRegWindowClose />
            </div>
            <div className="p-4">{props.children}</div>
          </div>
        </StyledPaneContainerBody>
      ) : (
        <StyledPaneContainerBody className={props.className} ref={ref}>
          {props.children}
        </StyledPaneContainerBody>
      )}
    </>
  )
);

export default PaneContainer;
