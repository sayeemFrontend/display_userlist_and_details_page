import { useEffect } from 'react';
import { useState } from 'react';
import Loader from './Loader';
import PropTypes from 'prop-types';

export default function Suspender({ children, isLoading, isError, onlyFirstRender = false, preRender = true }) {
  const [f_visit, setF_visit] = useState(true);

  useEffect(() => {
    setF_visit(false);
  }, []);

  if (isLoading && (onlyFirstRender ? f_visit : true)) {
    return (
      <>
        <div className='relative'>
          <Loader />
        </div>
        {preRender && children}
      </>
    );
  } else if (!isLoading && isError) {
    console.log(isError);
    return <>{children}</>;
  } else {
    return <>{children}</>;
  }
}

Suspender.propTypes = {
  children: PropTypes.any,
  isLoading: PropTypes.bool,
  isError: PropTypes.any,
  onlyFirstRender: PropTypes.bool,
  preRender: PropTypes.bool,
};
