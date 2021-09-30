import React from 'react';
import Cross from '../../icons/Cross';
import css from './SideBarLayout.module.scss';

//types
type ComponentProps = { className?: string } & (
  | { handleClose: () => any; handleBack?: never }
  | { handleBack: () => any; handleClose?: never }
);

const SideBarLayout: React.FC<ComponentProps> = ({
  children,
  className,
  handleClose,
  handleBack,
}) => {
  return (
    <div className={css.root}>
      <header className={css.header}>
        {handleClose && (
          <button
            onClick={handleClose}
            aria-label="Close"
            className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none"
          >
            <Cross className="h-6 w-6 hover:text-accent-3" />
            <span className="ml-2 text-accent-7 text-sm ">Close</span>
          </button>
        )}
        {handleBack && (
          <button
            onClick={handleBack}
            aria-label="Go back"
            className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none"
          >
            <span className="ml-2 text-accent-7 text-xs">Back</span>
          </button>
        )}
      </header>
      <div className={className}></div>
      <div className={css.container}>{children}</div>
    </div>
  );
};

export default SideBarLayout;
